import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaStreamDirection } from './mediastreamdirection.enum';
//#endregion

export const MediaStreamDirectionConfig = {
  name: "MediaStreamDirection",
  members: MediaStreamDirection
} as EnumConfig<MediaStreamDirection>;