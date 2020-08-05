import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessUsers } from './conditionalaccessusers.entity';
//#endregion

export const ConditionalAccessUsersConfig = {
  name: "conditionalAccessUsers",
  annotations: [],
  fields: {
    includeUsers: {type: 'Edm.String', nullable: false, collection: true},
    excludeUsers: {type: 'Edm.String', nullable: false, collection: true},
    includeGroups: {type: 'Edm.String', nullable: false, collection: true},
    excludeGroups: {type: 'Edm.String', nullable: false, collection: true},
    includeRoles: {type: 'Edm.String', nullable: false, collection: true},
    excludeRoles: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessUsers>;