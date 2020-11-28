import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { HistoricoResponsable } from './historicoresponsable.entity';
import { HistoricoResponsableModel } from './historicoresponsable.model';
import { HistoricoResponsableCollection } from './historicoresponsable.collection';
//#endregion

export const HistoricoResponsableConfig = {
  name: "HistoricoResponsable",
  model: HistoricoResponsableModel,
  collection: HistoricoResponsableCollection,
  annotations: [],
  fields: {
    empleadoId: {type: 'Edm.Int32', key: true, ref: 'empleadoId'},
    casoId: {type: 'Edm.Int32', key: true, ref: 'casoId'},
    hasta: {type: 'Edm.DateTimeOffset', key: true, ref: 'hasta', nullable: false},
    key: {type: 'Edm.String'},
    motivoCambioResponsableId: {type: 'Edm.Int32'},
    observaciones: {type: 'Edm.String', maxLength: 200},
    desde: {type: 'Edm.DateTimeOffset', nullable: false},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    motivoCambioResponsable: {type: 'SIU.Tramites.MotivoCambioResponsable', navigation: true, field: 'motivoCambioResponsableId', ref: 'id'}
  }
} as EntityConfig<HistoricoResponsable>;