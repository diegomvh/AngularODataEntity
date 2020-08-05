import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetResource } from './targetresource.entity';
//#endregion

export const TargetResourceConfig = {
  name: "targetResource",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    groupType: {type: 'graph.groupType'},
    modifiedProperties: {type: 'graph.modifiedProperty', collection: true}
  }
} as EntityConfig<TargetResource>;