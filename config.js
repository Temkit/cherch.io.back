SonicChannelControl = require("sonic-channel").Control;
SonicChannelIngest = require("sonic-channel").Ingest;
SonicChannelSearch = require("sonic-channel").Search;

var schControl, schInjest, schSearch;
var credential = {
  host: "::1",
  port: 1491,
  auth: "SecretPassword",
};

const Config = {
  sonicChannelControl: schControl
    ? schControl
    : new SonicChannelControl(credential),
  sonicChannelIngest: schInjest
    ? schInjest
    : new SonicChannelIngest(credential),
  sonicChannelSearch: schSearch
    ? schSearch
    : new SonicChannelSearch(credential),
};

module.exports = Config;
