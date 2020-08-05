import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallMediaState } from './callmediastate.entity';
//#endregion

export const CallMediaStateConfig = {
  name: "callMediaState",
  annotations: [],
  fields: {
    audio: {type: 'graph.mediaState'}
  }
} as EntityConfig<CallMediaState>;