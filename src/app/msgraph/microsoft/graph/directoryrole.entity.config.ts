import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryRole } from './directoryrole.entity';
//#endregion

export const DirectoryRoleConfig = {
  name: "DirectoryRole",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    roleTemplateId: {type: 'Edm.String'},
    members: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as EntityConfig<DirectoryRole>;