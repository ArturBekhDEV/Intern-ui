import { mockAxiosClientWithCredentials } from "@tests/utils";
import { authService } from "@/services/auth";
import MockAdapter from "axios-mock-adapter";
import { axiosClient } from "@/services";

const mockedSignUpResponse = {
  token: "test-token",
  role: "ADMIN",
  firstName: "Test",
};

const mockedSignInResponse = mockedSignUpResponse;
const mockedSignInWithGoogleResponse = mockedSignUpResponse;

const mockedCurrentUserResponse = {
  role: "ADMIN",
  firstName: "Test",
  lastName: "Test",
  email: "email@gmail.com",
};

jest.mock("@/utils/getEnv", () => ({
  getEnv: jest.fn(() => ({
    apiUrl: "http://localhost:3001",
    googleClientId: "test-google-client-id",
  })),
}));

describe("auth service", () => {
  let mockAxiosClient;
  beforeEach(() => {
    mockAxiosClient = new MockAdapter(axiosClient);
  });
  afterEach(() => {
    mockAxiosClient.restore();
  });

  it("should sign up successfully", async () => {
    mockAxiosClient.onPost("/auth/sign-up").reply(201, mockedSignUpResponse);
    const result = await authService.signUp();
    expect(result.status).toEqual(201);
    expect(result.data).toEqual(mockedSignUpResponse);
  });

  it("should sign in successfully", async () => {
    mockAxiosClient.onPost("/auth/sign-in").reply(201, mockedSignInResponse);
    const result = await authService.signIn();

    expect(result.status).toEqual(201);
    expect(result.data).toEqual(mockedSignInResponse);
  });

  it("should sign in with google successfully", async () => {
    mockAxiosClient
      .onPost("/auth/google")
      .reply(201, mockedSignInWithGoogleResponse);
    const result = await authService.googleAuth();

    expect(result.status).toEqual(201);
    expect(result.data).toEqual(mockedSignInWithGoogleResponse);
  });

  it("should get current user successfully", async () => {
    mockAxiosClientWithCredentials
      .onGet("/auth/current-user")
      .reply(200, mockedCurrentUserResponse);
    const result = await authService.currentUser();

    expect(result.status).toEqual(200);
    expect(result.data).toEqual(mockedCurrentUserResponse);
  });
});
