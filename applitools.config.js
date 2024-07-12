//const { DeviceName } = require("@applitools/eyes-cypress/types/expose");

module.exports = {
    testConcurrency: 1,
    apiKey: '97JgY8AYCHYHV0dx4ywmMXlfw5A68Oj97iLrkiafExcgc110',
    batchName: 'TAU Todo App',
    browser: [
        { width: 800, height: 600, name: 'chrome' },
        { deviceName: 'Pixel 2', screenOrientation: 'portrait' }
    ]
}