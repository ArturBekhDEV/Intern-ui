function save<D>(key: string, data: D) {
  localStorage.setItem(key, JSON.stringify(data));
}
function get<D>(key: string): D {
  return JSON.parse(localStorage.getItem(key) as string) as D;
}
function remove(key: string) {
  localStorage.removeItem(key)
}

export const storage = {
  save,
  get,
  remove
}