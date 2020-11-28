import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaStream } from './mediastream.complex';
import { MediaStreamModel } from './mediastream.model';
import { MediaStreamCollection } from './mediastream.collection';
//#endregion

export const MediaStreamConfig = {
  name: "mediaStream",
  model: MediaStreamModel,
  collection: MediaStreamCollection,
  annotations: [],
  fields: {
    direction: {type: 'graph.mediaDirection', nullable: false},
    label: {type: 'Edm.String'},
    mediaType: {type: 'graph.modality', nullable: false},
    serverMuted: {type: 'Edm.Boolean', nullable: false},
    sourceId: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<MediaStream>;