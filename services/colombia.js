const MongoLib = require('../lib/mongo');

class ColombiaService {
  constructor() {
    this.collection = 'colombia';
    this.mongoDB = new MongoLib();
  }
  async getData({ date }) {
    const data = await this.mongoDB.get(this.collection, date);
    return data || {};
  }
  async createData(data) {
    const createData = await this.mongoDB.create(this.collection, data);
    return createData;
  }
}

module.exports = ColombiaService;
