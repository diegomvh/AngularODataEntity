import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AdministrativeUnit } from './administrativeunit.entity';
import { AdministrativeUnitModel } from './administrativeunit.model';
import { AdministrativeUnitCollection } from './administrativeunit.collection';
//#endregion

export const AdministrativeUnitConfig = {
  name: "administrativeUnit",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: AdministrativeUnitModel,
  collection: AdministrativeUnitCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    visibility: {type: 'Edm.String'},
    members: {type: 'graph.directoryObject', collection: true, navigation: true},
    scopedRoleMembers: {type: 'graph.scopedRoleMembership', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true}
  }
} as StructuredTypeConfig<AdministrativeUnit>;