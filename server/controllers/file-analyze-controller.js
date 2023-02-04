const fileAnalyzeService = require("../services/file-analyze-services");
const fileAnalyzerServiceObj = new fileAnalyzeService();
module.exports = class fileAnalyzeController {
  async analyzeFile(req, res, next) {
    // Logic here
    if (req.file === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const result = await fileAnalyzerServiceObj.fileAnalyzerService(req);
    console.log(result);
    if (!result) {
      res.status(500).json({ msg: "Something went wrong" });
    }
    res.status(200).json({ ...result });
  }
};
