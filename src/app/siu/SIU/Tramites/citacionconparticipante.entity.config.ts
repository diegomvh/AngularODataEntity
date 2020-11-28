import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CitacionConParticipante } from './citacionconparticipante.entity';
import { CitacionConParticipanteModel } from './citacionconparticipante.model';
import { CitacionConParticipanteCollection } from './citacionconparticipante.collection';
//#endregion

export const CitacionConParticipanteConfig = {
  name: "CitacionConParticipante",
  model: CitacionConParticipanteModel,
  collection: CitacionConParticipanteCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Int32', nullable: false},
    fechaImpresion: {type: 'Edm.DateTimeOffset', nullable: false},
    requirentes: {type: 'Edm.String'},
    involucrados: {type: 'Edm.String'},
    tipo: {type: 'Edm.String'},
    rev: {type: 'Edm.Binary'}
  }
} as EntityConfig<CitacionConParticipante>;