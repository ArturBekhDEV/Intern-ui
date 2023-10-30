import { usersService } from "@/services/users";
import { mockAxiosClientWithCredentials } from "../../setup/utils";

jest.mock("@/utils/getEnv", () => ({
  getEnv: jest.fn(() => ({
    apiUrl: "http://localhost:3001",
    googleClientId: "test-google-client-id",
  })),
}));

const mockedUserData = {
  role: "ADMIN",
  firstName: "Test",
  lastName: "Test",
  email: "email@gmail.com",
  password: "test",
};

describe("users service", () => {
  it("should create user successfully", async () => {
    mockAxiosClientWithCredentials.onPost("/users").reply(201, mockedUserData);
    const result = await usersService.createUser({});

    expect(result.status).toEqual(201);
    expect(result.data).toMatchObject({
      ...mockedUserData,
      password: expect.any(String)
    });
  });
});
