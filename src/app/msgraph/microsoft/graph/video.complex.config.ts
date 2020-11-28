import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Video } from './video.complex';
import { VideoModel } from './video.model';
import { VideoCollection } from './video.collection';
//#endregion

export const VideoConfig = {
  name: "video",
  model: VideoModel,
  collection: VideoCollection,
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
} as StructuredTypeConfig<Video>;