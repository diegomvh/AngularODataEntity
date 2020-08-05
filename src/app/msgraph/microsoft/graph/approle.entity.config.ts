import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppRole } from './approle.entity';
//#endregion

export const AppRoleConfig = {
  name: "appRole",
  annotations: [],
  fields: {
    allowedMemberTypes: {type: 'Edm.String', nullable: false, collection: true},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.Guid', nullable: false},
    isEnabled: {type: 'Edm.Boolean', nullable: false},
    origin: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<AppRole>;