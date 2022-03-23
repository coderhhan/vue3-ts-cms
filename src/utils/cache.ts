class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const getCacheValue = window.localStorage.getItem(key)
    return getCacheValue && JSON.parse(getCacheValue)
  }
}

export default new LocalCache()
