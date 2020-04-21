const MongoLib = require('../lib/mongo');

class DepartamentsService {
  constructor() {
    this.collection = 'departaments';
    this.mongoDB = new MongoLib();
  }
  async getDepartaments({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const departaments = await this.mongoDB.getAll(this.collection, query);
    return departaments || [];
  }
  async createDepartament(departament) {
    const createDepartamentId = await this.mongoDB.create(this.collection, departament);
    return createDepartamentId;
  }
}

module.exports = DepartamentsService;
