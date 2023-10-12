// import "@testing-library/jest-dom/extend-expect";
// import { fn } from "jest";
// import { matchMedia } from "@testing-library/jest-dom/";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  // addEventListener: fn(),
  // removeEventListener: fn(),
  // dispatchEvent: fn(),
  // addListener: fn(),
  // removeListener: fn(),
});

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  // value: fn(),
});
