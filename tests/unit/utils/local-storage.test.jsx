import { saveToStorage, getFromStorage, removeFromStorage } from "@/utils/local-storage";

describe("localStorage utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save data to storage", () => {
    saveToStorage("test", "test");
    expect(localStorage.getItem("test")).toMatch(/test/);
  });

  it("should get data from storage", () => {
    localStorage.setItem("test", JSON.stringify("test"));
    const data = getFromStorage("test");
    expect(data).toMatch(/test/);
  });

  it('should remove data from storage', () => {
    localStorage.setItem("test", JSON.stringify("test"));
    const data = getFromStorage("test");
    expect(data).toMatch(/test/);
    removeFromStorage('test')

    expect(localStorage.getItem('test')).toBeNull()
  })
});
