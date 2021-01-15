import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaType } from './mediatype.enum';
//#endregion

//#region ODataApi EnumTypeConfig
export const MediaTypeConfig = {
  name: "MediaType",
  members: MediaType,
  annotations: [],
  fields: {
    Any: {value: 0},
    Video: {value: 1},
    Chart: {value: 2},
    Image: {value: 3},
    Table: {value: 4},
    Unknown: {value: -1}
  }
} as EnumTypeConfig<MediaType>;
//#endregion