import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Audio } from './audio.complex';
import { AudioModel } from './audio.model';
import { AudioCollection } from './audio.collection';
//#endregion

export const AudioConfig = {
  name: "audio",
  model: AudioModel,
  collection: AudioCollection,
  annotations: [],
  fields: {
    album: {type: 'Edm.String'},
    albumArtist: {type: 'Edm.String'},
    artist: {type: 'Edm.String'},
    bitrate: {type: 'Edm.Int64'},
    composers: {type: 'Edm.String'},
    copyright: {type: 'Edm.String'},
    disc: {type: 'Edm.Int16'},
    discCount: {type: 'Edm.Int16'},
    duration: {type: 'Edm.Int64'},
    genre: {type: 'Edm.String'},
    hasDrm: {type: 'Edm.Boolean'},
    isVariableBitrate: {type: 'Edm.Boolean'},
    title: {type: 'Edm.String'},
    track: {type: 'Edm.Int32'},
    trackCount: {type: 'Edm.Int32'},
    year: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Audio>;