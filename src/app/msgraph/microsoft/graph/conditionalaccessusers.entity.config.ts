import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessUsers } from './conditionalaccessusers.entity';
import { ConditionalAccessUsersModel } from './conditionalaccessusers.model';
import { ConditionalAccessUsersCollection } from './conditionalaccessusers.collection';
//#endregion

export const ConditionalAccessUsersConfig = {
  name: "conditionalAccessUsers",
  model: ConditionalAccessUsersModel,
  collection: ConditionalAccessUsersCollection,
  annotations: [],
  fields: {
    excludeGroups: {type: 'Edm.String', nullable: false, collection: true},
    excludeRoles: {type: 'Edm.String', nullable: false, collection: true},
    excludeUsers: {type: 'Edm.String', nullable: false, collection: true},
    includeGroups: {type: 'Edm.String', nullable: false, collection: true},
    includeRoles: {type: 'Edm.String', nullable: false, collection: true},
    includeUsers: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessUsers>;