const { TestWatcher } = require("jest")

describe("Esto es una suite de pruebas", () => {
    TestWatcher('Caso prueba1', () => {
        const result = 1 + 2 
        expect(result).toBe(10);
    })
})