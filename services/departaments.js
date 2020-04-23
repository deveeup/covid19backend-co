const MongoLib = require('../lib/mongo');

class DepartamentsService {
  constructor() {
    this.collection = 'departaments';
    this.mongoDB = new MongoLib();
  }
  async getDepartaments({ date }) {
    const departaments = await this.mongoDB.get(this.collection, date);
    return departaments || [];
  }
  async createDepartament(departament) {
    const createDepartamentId = await this.mongoDB.create(this.collection, departament);
    return createDepartamentId;
  }
}

module.exports = DepartamentsService;
