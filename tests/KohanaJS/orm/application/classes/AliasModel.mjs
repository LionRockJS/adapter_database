import {ORM} from '@lionrockjs/central';

export default class AliasModel extends ORM{
}

AliasModel.tableName = 'testmodels';
AliasModel.joinTablePrefix = 'testmodel';