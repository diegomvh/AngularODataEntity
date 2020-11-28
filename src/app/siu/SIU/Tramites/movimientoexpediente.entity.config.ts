import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MovimientoExpediente } from './movimientoexpediente.entity';
import { MovimientoExpedienteModel } from './movimientoexpediente.model';
import { MovimientoExpedienteCollection } from './movimientoexpediente.collection';
//#endregion

export const MovimientoExpedienteConfig = {
  name: "MovimientoExpediente",
  model: MovimientoExpedienteModel,
  collection: MovimientoExpedienteCollection,
  annotations: [],
  fields: {
    expedienteId: {type: 'Edm.Int32'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    descripcion: {type: 'Edm.String', nullable: false, maxLength: 1000},
    empleadoId: {type: 'Edm.Int32'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    expediente: {type: 'SIU.Tramites.Expediente', navigation: true, field: 'expedienteId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'}
  }
} as EntityConfig<MovimientoExpediente>;