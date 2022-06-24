const { SeedStatus } = require("./seed_status")


const Seeds = async () => {
    await SeedStatus();
}

module.exports = {Seeds}