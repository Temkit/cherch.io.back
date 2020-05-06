const Control = require("./methods/channelControl");
const Search = require("./methods/searchConnect");
const Injest = require("./methods/ingestControl");

module.exports = {
  sonicChannelControl: () => Control.open(),
  searchConnect: () => Search.connect(),
  searchClose: () => Search.close(),
  ingestConnect: () => Injest.connect(),
  ingestClose: () => Injest.close(),
  ingest: (collection, bucket, lang, id, text) =>
    Injest.add(collection, bucket, lang, id, text),
  remove: (collection, bucket, id) => Injest.remove(collection, bucket, id),
  search: (collection, bucket, lang, term, limit) =>
    Search.start(collection, bucket, lang, term, limit),
  suggest: (collection, bucket, lang, term) =>
    Search.suggest(collection, bucket, lang, term),
};
