import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface UseAxiosProps<T, D> {
  service: (params?: T, userId?: string) => Promise<AxiosResponse<D>>;
  onError?: (error: string) => void;
  onSuccess?: (data?: D) => void;
  requestOnRender?: boolean;
  params?: T;
}

export const useAxios = <T, D>({ service, ...props }: UseAxiosProps<T, D>) => {
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const request = async (
    params?: T,
    userId?: string
  ): Promise<AxiosResponse<D> | undefined> => {
    try {
      const response: AxiosResponse = await service(params, userId);

      props.onSuccess && props.onSuccess(response?.data);
      return response?.data;
    } catch (error) {
      setError(true);
      if (error instanceof AxiosError) {
        const errorMsg =
          error.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again";
        setErrorMsg(errorMsg);
        props.onError && props.onError(errorMsg);
      } else {
        const defaultErrorMsg = "Something went wrong. Please try again";
        setErrorMsg(defaultErrorMsg);
        props.onError && props.onError(defaultErrorMsg);
      }
    }
  };

  const refetch = async () => {
    return await request(props?.params);
  };

  useEffect(() => {
    props.requestOnRender && void request(props?.params);
  }, []);

  return {
    request,
    error,
    errorMsg,
    refetch,
  };
};
