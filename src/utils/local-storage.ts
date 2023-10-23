export function saveToStorage<D>(key: string, data: D) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getFromStorage<D>(key: string): D {
  return JSON.parse(localStorage.getItem(key) as string) as D;
}
export function removeFromStorage(key: string) {
  localStorage.removeItem(key)
}