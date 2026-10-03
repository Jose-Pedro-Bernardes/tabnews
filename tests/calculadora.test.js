const calculadora = require("../models/calculadora.js");

test("Soma de 2 + 2 deve ser igual a 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});
