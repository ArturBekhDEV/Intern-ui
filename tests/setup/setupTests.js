import "@testing-library/jest-dom"
import { jest } from '@jest/globals'

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: jest.fn(),
});
