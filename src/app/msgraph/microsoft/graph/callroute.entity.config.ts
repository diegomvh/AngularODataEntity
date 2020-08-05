import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallRoute } from './callroute.entity';
//#endregion

export const CallRouteConfig = {
  name: "callRoute",
  annotations: [],
  fields: {
    routingType: {type: 'graph.routingType', nullable: false},
    original: {type: 'graph.identitySet', nullable: false},
    final: {type: 'graph.identitySet', nullable: false}
  }
} as EntityConfig<CallRoute>;