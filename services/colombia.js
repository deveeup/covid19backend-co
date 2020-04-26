const MongoLib = require("../lib/mongo");
const moment = require("moment");

class ColombiaService {
  constructor() {
    this.collection = "colombia";
    this.mongoDB = new MongoLib();
  }
  async getData({ date }) {
    const data = await this.mongoDB.get(this.collection, date);
    const length = data.length;
    const returnDate = data[length - 1];

    return returnDate || {};
  }
  async createData(data) {
    const createData = await this.mongoDB.create(this.collection, data);
    return createData;
  }
}

module.exports = ColombiaService;
