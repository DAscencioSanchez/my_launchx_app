const { TestWatcher } = require("jest");
const MissionComander = require("../app/missionComander");

describe("Esto es una suite de pruebas", () => {
    test('1) Create mission commander object', () => {
        const myMissionCommander = new MissionComander("Woopa") 
        expect(myMissionCommander.name).toBe("Woopa");
    })
})