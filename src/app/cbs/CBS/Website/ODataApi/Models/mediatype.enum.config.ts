import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaType } from './mediatype.enum';
//#endregion

export const MediaTypeConfig = {
  name: "MediaType",
  members: MediaType
} as EnumConfig<MediaType>;