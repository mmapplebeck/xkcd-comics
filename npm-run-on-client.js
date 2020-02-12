// Cross platform `cd client && npm ${args}`
const opts = { stdio: "inherit", cwd: "client", shell: true };
require("child_process").spawn("npm", process.argv.slice(2), opts);
