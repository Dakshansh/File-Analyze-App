const fs = require("fs/promises");
const path = require("path");
const wordpos = require("wordpos"),
  wordposInstance = new wordpos();

module.exports = class FileAnalyzerServices {
  async fileAnalyzerService(req) {
    const uniqueFileName = req.file.filename;

    const txtFile = await fs.readFile(path.join(`${__dirname}/../uploads/`, `${uniqueFileName}`), { encoding: "utf8" });

    const sentences = txtFile.split("\n");
    let nounCount = 0;
    let adverbCount = 0;
    let adjectiveCount = 0;
    let verbCount = 0;
    let restofWordsCount = 0;

    for await (let sentence of sentences) {
      const posResult = await wordposInstance.getPOS(sentence, async (result) => {
        return result;
      });
      for await (let word of Object.keys(posResult)) {
        let numToAdd = 0;
        numToAdd = posResult[word].length;
        switch (word) {
          case "nouns":
            nounCount += numToAdd;
            break;
          case "verbs":
            verbCount += numToAdd;
            break;
          case "adjectives":
            adjectiveCount += numToAdd;
            break;
          case "adverbs":
            adverbCount += numToAdd;
            break;
          case "rest":
            restofWordsCount += numToAdd;
            break;
        }
      }
    }
    const totalCount = nounCount + verbCount + adjectiveCount + adverbCount;
    const nounPercentage = (nounCount / totalCount) * 100;
    const verbPercentage = (verbCount / totalCount) * 100;
    const adjectivePercentage = (adjectiveCount / totalCount) * 100;
    const adverbPercentage = (adverbCount / totalCount) * 100;
    const restWordsPercentage = (restofWordsCount / totalCount) * 100;

    return { nounPercentage, verbPercentage, adjectivePercentage, adverbPercentage, restWordsPercentage };
  }
};
