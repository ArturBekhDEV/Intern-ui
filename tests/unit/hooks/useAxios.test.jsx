import React from "react";
import { useAxios } from "@/hooks/use-axios";
import { renderHook, act } from "@testing-library/react";
import { AxiosError } from "axios";

const mockUseState = jest.spyOn(React, "useState");
const setError = jest.fn();
const setErrorMsg = jest.fn();

describe("Use axios custom hook", () => {
  const serviceMock = jest.fn(() => {
    return { data: { name: "test" } };
  });
  const onSuccessMock = jest.fn();
  const onErrorMock = jest.fn();

  beforeEach(() => {
    mockUseState
      .mockImplementationOnce(() => [false, setError])
      .mockImplementationOnce(() => ["", setErrorMsg]);
  });

  it("should call serviceMock", async () => {
    const { result } = renderHook(() =>
      useAxios({
        service: serviceMock,
        requestOnRender: false,
      })
    );

    await act(() => void result.current.request());

    expect(serviceMock).toHaveBeenCalled();
  });

  it("should call onSuccessMock", async () => {
    const { result } = renderHook(() =>
      useAxios({
        service: serviceMock,
        onSuccess: onSuccessMock,
        requestOnRender: false,
      })
    );

    await act(() => result.current.request());

    expect(onSuccessMock).toHaveBeenCalled();
  });

  it("should handle axios error and call onErrorMock", async () => {
    const errorServiceMock = jest.fn();
    errorServiceMock.mockImplementation(() => {
      throw new AxiosError("test");
    });

    const { result } = renderHook(() =>
      useAxios({
        service: errorServiceMock,
        onError: onErrorMock,
        requestOnRender: false,
      })
    );

    await act(() => result.current.request());

    expect(onErrorMock).toHaveBeenCalled();
    expect(setErrorMsg).toHaveBeenCalled();
  });

  it("should handle error and call onErrorMock", async () => {
    const errorServiceMock = jest.fn();
    errorServiceMock.mockImplementation(() => {
      throw new Error("test");
    });

    const { result } = renderHook(() =>
      useAxios({
        service: errorServiceMock,
        onError: onErrorMock,
        requestOnRender: false,
      })
    );

    await act(() => result.current.request());

    expect(onErrorMock).toHaveBeenCalled();
    expect(setErrorMsg).toHaveBeenCalled();
  });

  it("should make request on first render", () => {
    renderHook(() =>
      useAxios({
        service: serviceMock,
        requestOnRender: true,
      })
    );

    expect(serviceMock).toHaveBeenCalled();
  });
});
