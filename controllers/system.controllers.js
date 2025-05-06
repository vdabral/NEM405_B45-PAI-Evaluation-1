const dns = require("node:dns");
const os = require("node:os");
const getIpDetails = (req, res) => {
  dns.lookup("", options, (err, address, family) =>
    console.log("address: %j family: IPv%s", address, family)
  );
};
const getsysteminfo = (req, res) => {
  let arch = os.arch();
  let freeMem = os.freemem();
};
