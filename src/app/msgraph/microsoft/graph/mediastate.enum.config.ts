import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaState } from './mediastate.enum';
//#endregion

export const MediaStateConfig = {
  name: "MediaState",
  members: MediaState
} as EnumConfig<MediaState>;