import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallRoute } from './callroute.entity';
import { CallRouteModel } from './callroute.model';
import { CallRouteCollection } from './callroute.collection';
//#endregion

export const CallRouteConfig = {
  name: "callRoute",
  model: CallRouteModel,
  collection: CallRouteCollection,
  annotations: [],
  fields: {
    final: {type: 'graph.identitySet', nullable: false},
    original: {type: 'graph.identitySet', nullable: false},
    routingType: {type: 'graph.routingType', nullable: false}
  }
} as EntityConfig<CallRoute>;