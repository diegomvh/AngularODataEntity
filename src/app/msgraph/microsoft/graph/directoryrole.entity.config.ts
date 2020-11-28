import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryRole } from './directoryrole.entity';
import { DirectoryRoleModel } from './directoryrole.model';
import { DirectoryRoleCollection } from './directoryrole.collection';
//#endregion

export const DirectoryRoleConfig = {
  name: "directoryRole",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: DirectoryRoleModel,
  collection: DirectoryRoleCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    roleTemplateId: {type: 'Edm.String'},
    members: {type: 'graph.directoryObject', collection: true, navigation: true},
    scopedMembers: {type: 'graph.scopedRoleMembership', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DirectoryRole>;