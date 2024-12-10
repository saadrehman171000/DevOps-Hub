import '@testing-library/jest-dom'

// Mock the Kinde Auth module
jest.mock('@kinde-oss/kinde-auth-nextjs', () => ({
  useKindeBrowserClient: jest.fn().mockReturnValue({
    isLoading: false,
    isAuthenticated: false,
    user: null,
    login: jest.fn(),
    register: jest.fn(),
    logout: jest.fn()
  })
}))

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe = jest.fn()
  unobserve = jest.fn()
  disconnect = jest.fn()
}

global.IntersectionObserver = MockIntersectionObserver; 