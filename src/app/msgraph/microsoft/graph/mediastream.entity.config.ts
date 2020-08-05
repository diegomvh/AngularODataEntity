import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaStream } from './mediastream.entity';
//#endregion

export const MediaStreamConfig = {
  name: "mediaStream",
  annotations: [],
  fields: {
    mediaType: {type: 'graph.modality', nullable: false},
    label: {type: 'Edm.String'},
    sourceId: {type: 'Edm.String', nullable: false},
    direction: {type: 'graph.mediaDirection', nullable: false},
    serverMuted: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<MediaStream>;