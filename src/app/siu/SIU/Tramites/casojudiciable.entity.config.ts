import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CasoJudiciable } from './casojudiciable.entity';
import { CasoJudiciableModel } from './casojudiciable.model';
import { CasoJudiciableCollection } from './casojudiciable.collection';
//#endregion

export const CasoJudiciableConfig = {
  name: "CasoJudiciable",
  model: CasoJudiciableModel,
  collection: CasoJudiciableCollection,
  annotations: [],
  fields: {
    casoId: {type: 'Edm.Int32', key: true, ref: 'casoId'},
    expedienteId: {type: 'Edm.Int32', key: true, ref: 'expedienteId'},
    key: {type: 'Edm.String'},
    envio: {type: 'Edm.DateTimeOffset', nullable: false},
    recepcion: {type: 'Edm.DateTimeOffset'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    expediente: {type: 'SIU.Tramites.Expediente', navigation: true, field: 'expedienteId', ref: 'id'}
  }
} as EntityConfig<CasoJudiciable>;