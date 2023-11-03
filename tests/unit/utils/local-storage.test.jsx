import { storage } from "@/utils/local-storage";

describe("localStorage utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save data to storage", () => {
    storage.save("test", "test");
    expect(localStorage.getItem("test")).toMatch(/test/);
  });

  it("should get data from storage", () => {
    localStorage.setItem("test", JSON.stringify("test"));
    const data = storage.get("test");
    expect(data).toMatch(/test/);
  });

  it('should remove data from storage', () => {
    localStorage.setItem("test", JSON.stringify("test"));
    const data = storage.get("test");
    expect(data).toMatch(/test/);
    storage.remove('test')

    expect(localStorage.getItem('test')).toBeNull()
  })
});
