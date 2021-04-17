export const Storage = {
  key: process.env.REACT_APP_STORAGE_KEY || 'mentor-app-',

  getKey(key) {
    return `${this.key}${key}`
  },

  get(key, def = null) {
    const item = localStorage.getItem(this.getKey(key))
    return item || def
  },

  set(key, data) {
    return localStorage.setItem(this.getKey(key), data)
  },

  getJSON(key, def = null) {
    let data = this.get(key)
    if (!data) {
      return def
    }
    return JSON.parse(data)
  },

  setJSON(key, data) {
    return this.set(key, JSON.stringify(data))
  },

  remove(key) {
    return localStorage.removeItem(this.getKey(key))
  }
}