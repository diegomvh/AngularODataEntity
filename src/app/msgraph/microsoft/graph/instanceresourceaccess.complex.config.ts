import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InstanceResourceAccess } from './instanceresourceaccess.complex';
import { InstanceResourceAccessModel } from './instanceresourceaccess.model';
import { InstanceResourceAccessCollection } from './instanceresourceaccess.collection';
//#endregion

export const InstanceResourceAccessConfig = {
  name: "instanceResourceAccess",
  model: InstanceResourceAccessModel,
  collection: InstanceResourceAccessCollection,
  annotations: [],
  fields: {
    permissions: {type: 'graph.resourcePermission', nullable: false, collection: true},
    resourceAppId: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<InstanceResourceAccess>;