const {ORM} = require('kohanajs');

class TestModel extends ORM{
  static tableName = "testmodels";
}

module.exports = TestModel;