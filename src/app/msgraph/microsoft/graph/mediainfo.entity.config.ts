import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaInfo } from './mediainfo.entity';
//#endregion

export const MediaInfoConfig = {
  name: "mediaInfo",
  annotations: [],
  fields: {
    uri: {type: 'Edm.String', nullable: false},
    resourceId: {type: 'Edm.String'}
  }
} as EntityConfig<MediaInfo>;