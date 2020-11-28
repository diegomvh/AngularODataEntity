import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaStreamDirection } from './mediastreamdirection.enum';
//#endregion

export const MediaStreamDirectionConfig = {
  name: "mediaStreamDirection",
  members: MediaStreamDirection
} as EnumTypeConfig<MediaStreamDirection>;