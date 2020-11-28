import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaInfo } from './mediainfo.complex';
import { MediaInfoModel } from './mediainfo.model';
import { MediaInfoCollection } from './mediainfo.collection';
//#endregion

export const MediaInfoConfig = {
  name: "mediaInfo",
  model: MediaInfoModel,
  collection: MediaInfoCollection,
  annotations: [],
  fields: {
    resourceId: {type: 'Edm.String'},
    uri: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<MediaInfo>;