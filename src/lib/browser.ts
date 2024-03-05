const LocalStorage: typeof window.localStorage = {
  getItem(key: string): string | null {
    try {
      const value = window.localStorage.getItem(key)
      if (value === 'undefined' || !value) {
        return null
      }
      return value
    } catch (error) {
      return null
    }
  },

  setItem(key: string, value: string): void {
    try {
      return window.localStorage.setItem(key, value)
    } catch (error) {
      return
    }
  },

  removeItem(key: string): void {
    try {
      return window.localStorage.removeItem(key)
    } catch (error) {
      return
    }
  },

  clear(): void {
    try {
      return window.localStorage.clear()
    } catch (error) {
      return
    }
  },

  key(index: number): string | null {
    try {
      return window.localStorage.key(index)
    } catch (error) {
      return null
    }
  },

  get length(): number {
    try {
      return window.localStorage.length
    } catch (error) {
      return 0
    }
  },
}

export default LocalStorage
