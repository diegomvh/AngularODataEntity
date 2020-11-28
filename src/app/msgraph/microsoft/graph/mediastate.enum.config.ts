import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaState } from './mediastate.enum';
//#endregion

export const MediaStateConfig = {
  name: "mediaState",
  members: MediaState
} as EnumTypeConfig<MediaState>;