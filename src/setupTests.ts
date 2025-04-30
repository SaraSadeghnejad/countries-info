// src/setupTests.js
import "@testing-library/jest-dom"; // Use extend-expect for older versions
import { TextEncoder } from "node:util";

global.TextEncoder = TextEncoder;