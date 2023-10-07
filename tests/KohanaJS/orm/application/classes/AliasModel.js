const {ORM} = require('kohanajs');

class AliasModel extends ORM{
}

AliasModel.tableName = 'testmodels';
AliasModel.joinTablePrefix = 'testmodel';

module.exports = AliasModel;