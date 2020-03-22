const Algorithms = {
  phraseErrors: phrase => {
    let splitted = phrase.split(" ");
    let indexableSearch = "";

    splitted.map((word, i) => {
      let index = Algorithms.wordErrors(word);
      indexableSearch =
        indexableSearch +
        (indexableSearch.length > 0 ? " " : indexableSearch) +
        index;
    });

    return indexableSearch;
  },

  wordErrors: word => {
    let splitted = word.split("");
    let indexableSearch = "";
    let indexableSuggest = "";

    splitted.map((char, i) => {
      const indexword = word.substr(i);
      if (
        indexword.length > 1 ||
        (indexword.length === 1 && word).length === 1
      ) {
        indexableSearch =
          indexableSearch + (indexableSearch.length > 0 ? " " : "") + indexword;
      }
    });

    return indexableSearch;
  }
};

module.exports = Algorithms;
