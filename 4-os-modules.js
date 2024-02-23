const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// returns the system uptime in seconds
const uptime = os.uptime()
console.log(uptime);

// returns the system version
const ver = os.version();
console.log(ver);