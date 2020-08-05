import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AudioConferencing } from './audioconferencing.entity';
//#endregion

export const AudioConferencingConfig = {
  name: "audioConferencing",
  annotations: [],
  fields: {
    conferenceId: {type: 'Edm.String'},
    tollNumber: {type: 'Edm.String'},
    tollFreeNumber: {type: 'Edm.String'},
    dialinUrl: {type: 'Edm.String'}
  }
} as EntityConfig<AudioConferencing>;