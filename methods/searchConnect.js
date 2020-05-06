const config = require("./../config");
const portfinder = require("portfinder");

module.exports = {
  start: (collection, bucket, lang, term, limit) => {
    return config.sonicChannelSearch.query(collection, bucket, term, {
      lang,
      limit: limit,
    });
  },

  suggest: (collection, bucket, lang, term) => {
    return config.sonicChannelSearch.suggest(collection, bucket, term, [
      { lang },
      { limit: 8 },
    ]);
  },

  connect: () => {
    portfinder.getPort(
      {
        port: 1491,
      },
      (err, port) => {
        if (err) {
          return err;
        }

        config.sonicChannelSearch.connect({
          connected: function () {
            // Connected handler
            console.info(
              "Sonic Channel succeeded to connect to host (control)."
            );
          },

          disconnected: function () {
            // Disconnected handler
            console.error("Sonic Channel is now disconnected (control).");
          },

          timeout: function () {
            // Timeout handler
            console.error("Sonic Channel connection timed out (control).");
          },

          retrying: function () {
            // Retry handler
            console.error("Trying to reconnect to Sonic Channel (control)...");
          },

          error: function (error) {
            // Failure handler
            console.error(
              "Sonic Channel failed to connect to host (control).",
              error
            );
          },
        });
      }
    );
  },

  close: () => config.sonicChannelSearch.close().then(),
};
