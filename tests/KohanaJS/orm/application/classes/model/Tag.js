const {ORM} = require('kohanajs');

class Tag extends ORM{
  name;

  static joinTablePrefix = 'tag';
  static tableName = 'tags';

  static fields = new Map([
    ['name', 'String']
  ]);
}

module.exports = Tag;
