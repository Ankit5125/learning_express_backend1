const os = require('os');

const freeMemory = os.freemem();
const homeDirectory = os.homedir();
const hostName = os.hostname()
const platformName = os.platform()
const osName = os.type()

module.exports = {freeMemory, homeDirectory, hostName, platformName, osName}