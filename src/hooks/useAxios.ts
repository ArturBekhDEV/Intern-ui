import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

interface UseAxiosProps<T, D> {
  service: (params?: T) => Promise<AxiosResponse<D>>;
  onError?: (error: string) => void;
  onSuccess?: (data?: D) => void;
}

export const useAxios = <T, D>({ service, ...props }: UseAxiosProps<T, D>) => {
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const request = async (params?: T): Promise<AxiosResponse<D> | undefined> => {
    try {
      const response: AxiosResponse = await service(params);
      props.onSuccess && props.onSuccess(response.data);
      return response.data;
    } catch (error) {
      setError(true);
      if (error instanceof AxiosError || error instanceof Error) {
        setErrorMsg(error.message);
        props.onError && props.onError(error.message);
      } else {
        const defaultErrorMsg = "Something went wrong. Please try again";
        setErrorMsg(defaultErrorMsg);
        props.onError && props.onError(defaultErrorMsg);
      }
    }
  };

  return {
    request,
    error,
    errorMsg,
  };
};
