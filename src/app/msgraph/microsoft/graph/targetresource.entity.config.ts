import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetResource } from './targetresource.entity';
import { TargetResourceModel } from './targetresource.model';
import { TargetResourceCollection } from './targetresource.collection';
//#endregion

export const TargetResourceConfig = {
  name: "targetResource",
  model: TargetResourceModel,
  collection: TargetResourceCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    groupType: {type: 'graph.groupType'},
    id: {type: 'Edm.String'},
    modifiedProperties: {type: 'graph.modifiedProperty', collection: true},
    type: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<TargetResource>;