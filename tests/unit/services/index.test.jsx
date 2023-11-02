import MockAdapter from "axios-mock-adapter";

import { axiosClientWithCredentials } from "@/services";
import { storage } from '@/utils/local-storage'

const mock = new MockAdapter(axiosClientWithCredentials);

const mockedUserData = {
  role: "ADMIN",
  firstName: "Test",
  lastName: "Test",
  email: "email@gmail.com",
  password: "test",
  id: "test-id",
};

jest.mock("@/utils/getEnv", () => ({
  getEnv: jest.fn(() => 'http://localhost:3001'),
}));

const JWT_TOKEN = 'your-jwt-token'

describe("Authorization Interceptor", () => {
  it("should add Authorization header with a token from storage", async () => {
    jest.spyOn(storage, 'get').mockReturnValue(JWT_TOKEN)
    const requestUrl = "/users";
    const responseData = { data: [mockedUserData] };

    mock.onPost(requestUrl).reply(201, responseData);

    const response = await axiosClientWithCredentials.post(requestUrl);
    expect(response.config.headers.Authorization).toMatch(`Bearer ${JWT_TOKEN}`);
    expect(response.status).toBe(201);
  });

    it('should handle cases where the token is not in storage', async () => {
    jest.spyOn(storage, 'get').mockReturnValue(null);

    const requestUrl = "/users";
    const responseData = { data: [mockedUserData] };

    mock.onPost(requestUrl).reply(201, responseData);

    const response = await axiosClientWithCredentials.post(requestUrl);

    expect(response.config.headers.Authorization).toMatch(`Bearer null`);
  });

  afterEach(() => {
    mock.reset();
    jest.restoreAllMocks();
  });
});
