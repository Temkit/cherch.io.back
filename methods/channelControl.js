const config = require("./../config");
const portfinder = require("portfinder");
const Algorithms = require("../algorithms");

module.exports = {
  open: () => {
    config.sonicChannelControl.connect({
      connected: function() {
        // Connected handler
        console.info("Sonic Channel succeeded to connect to host (control).");
      },

      disconnected: function() {
        // Disconnected handler
        console.error("Sonic Channel is now disconnected (control).");
      },

      timeout: function() {
        // Timeout handler
        console.error("Sonic Channel connection timed out (control).");
      },

      retrying: function() {
        // Retry handler
        console.error("Trying to reconnect to Sonic Channel (control)...");
      },

      error: function(error) {
        // Failure handler
        console.error(
          "Sonic Channel failed to connect to host (control).",
          error
        );
      }
    });
  },

  close: () => config.sonicChannelControl.close().then()
};
