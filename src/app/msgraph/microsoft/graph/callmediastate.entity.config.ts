import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallMediaState } from './callmediastate.entity';
//#endregion

export const CallMediaStateConfig = {
  name: "CallMediaState",
  annotations: [],
  fields: {
    audio: {type: 'graph.mediaState'}
  }
} as EntityConfig<CallMediaState>;