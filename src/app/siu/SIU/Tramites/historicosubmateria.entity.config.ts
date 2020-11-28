import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { HistoricoSubmateria } from './historicosubmateria.entity';
import { HistoricoSubmateriaModel } from './historicosubmateria.model';
import { HistoricoSubmateriaCollection } from './historicosubmateria.collection';
//#endregion

export const HistoricoSubmateriaConfig = {
  name: "HistoricoSubmateria",
  model: HistoricoSubmateriaModel,
  collection: HistoricoSubmateriaCollection,
  annotations: [],
  fields: {
    casoId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32'},
    subMateriaId: {type: 'Edm.Int32'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    requirenteCaso: {type: 'SIU.Tramites.RequirenteCaso', navigation: true},
    subMateria: {type: 'SIU.Tramites.SubMateria', navigation: true, field: 'subMateriaId', ref: 'id'}
  }
} as EntityConfig<HistoricoSubmateria>;