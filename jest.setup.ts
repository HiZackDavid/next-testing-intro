import "@testing-library/jest-dom";
import "whatwg-fetch";
import { server } from "@/mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
