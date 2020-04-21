const MongoLib = require('../lib/mongo');

class ColombiaService {
  constructor() {
    this.collection = 'colombia';
    this.mongoDB = new MongoLib();
  }
  async getData({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const data = await this.mongoDB.getAll(this.collection, query);
    return data || [];
  }
  async createData(data) {
    const createData = await this.mongoDB.create(this.collection, data);
    return createData;
  }
}

module.exports = ColombiaService;
