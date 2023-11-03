import { usersService } from "@/services/users";
import MockAdapter from "axios-mock-adapter";
import { axiosClientWithCredentials } from "@/services";

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
  let mockAxiosClientWithCredentials;
  beforeEach(() => {
    mockAxiosClientWithCredentials = new MockAdapter(axiosClientWithCredentials);
  });
  afterEach(async () => {
    mockAxiosClientWithCredentials.restore();
  });
  it("should create user successfully", async () => {
    mockAxiosClientWithCredentials.onPost("/users").reply(201, mockedUserData);
    const result = await usersService.createUser({});

    expect(result.status).toEqual(201);
    expect(result.data).toMatchObject({
      ...mockedUserData,
      password: expect.any(String),
    });
  });

  it("should get all users successfully", async () => {
    mockAxiosClientWithCredentials.onGet("/users").reply(200, [mockedUserData]);
    const result = await usersService.getUsers({});

    expect(result.status).toEqual(200);
    expect(result.data.length).toBeGreaterThanOrEqual(1);
  });

  it("should delete users successfully", async () => {
    mockAxiosClientWithCredentials
      .onPost("/users/delete", { id: ["test-id"] })
      .reply(201);
    const result = await usersService.deleteUsers(['test-id']);

    expect(result.status).toEqual(201);
  });

  it("should update user successfully", async () => {
    mockAxiosClientWithCredentials.onPatch(/\/users\//, {firstName: 'Test'})
      .reply(204);
    const result = await usersService.updateUser({firstName: 'Test'}, 'test-id');

    expect(result.status).toEqual(204);
  });
});
