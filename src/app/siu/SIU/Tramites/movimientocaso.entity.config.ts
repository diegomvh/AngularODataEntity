import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MovimientoCaso } from './movimientocaso.entity';
import { MovimientoCasoModel } from './movimientocaso.model';
import { MovimientoCasoCollection } from './movimientocaso.collection';
//#endregion

export const MovimientoCasoConfig = {
  name: "MovimientoCaso",
  model: MovimientoCasoModel,
  collection: MovimientoCasoCollection,
  annotations: [],
  fields: {
    casoPenalId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32', nullable: false},
    estadoCasoId: {type: 'Edm.Int32', nullable: false},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    observaciones: {type: 'Edm.String', maxLength: 250},
    vencimiento1: {type: 'Edm.DateTimeOffset'},
    vencimiento2: {type: 'Edm.DateTimeOffset'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    casoPenal: {type: 'SIU.Tramites.CasoPenal', navigation: true, field: 'casoPenalId', ref: 'id'},
    estadoCaso: {type: 'SIU.Tramites.EstadoRequirenteCaso', navigation: true},
    requirenteCaso: {type: 'SIU.Tramites.RequirenteCaso', navigation: true},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true}
  }
} as EntityConfig<MovimientoCaso>;