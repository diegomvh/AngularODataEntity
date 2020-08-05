import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Video } from './video.entity';
//#endregion

export const VideoConfig = {
  name: "Video",
  annotations: [],
  fields: {
    audioBitsPerSample: {type: 'Edm.Int32'},
    audioChannels: {type: 'Edm.Int32'},
    audioFormat: {type: 'Edm.String'},
    audioSamplesPerSecond: {type: 'Edm.Int32'},
    bitrate: {type: 'Edm.Int32'},
    duration: {type: 'Edm.Int64'},
    fourCC: {type: 'Edm.String'},
    frameRate: {type: 'Edm.Double'},
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as EntityConfig<Video>;