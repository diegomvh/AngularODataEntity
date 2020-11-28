import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallMediaState } from './callmediastate.entity';
import { CallMediaStateModel } from './callmediastate.model';
import { CallMediaStateCollection } from './callmediastate.collection';
//#endregion

export const CallMediaStateConfig = {
  name: "callMediaState",
  model: CallMediaStateModel,
  collection: CallMediaStateCollection,
  annotations: [],
  fields: {
    audio: {type: 'graph.mediaState'}
  }
} as EntityConfig<CallMediaState>;