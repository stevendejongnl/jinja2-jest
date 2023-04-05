import { readFileSync } from 'fs';
import { join } from 'path';

const request = require("supertest");
const app = require("../index");


describe("Jinja templates", () => {
  test('Home', () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);

        const testexpect = readFileSync(join(__dirname, 'testexpect.html'), 'utf8');
        expect(response.text).toBe(testexpect)
      });
  });
});
