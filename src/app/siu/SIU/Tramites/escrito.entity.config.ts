import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Escrito } from './escrito.entity';
import { EscritoModel } from './escrito.model';
import { EscritoCollection } from './escrito.collection';
//#endregion

export const EscritoConfig = {
  name: "Escrito",
  model: EscritoModel,
  collection: EscritoCollection,
  annotations: [],
  fields: {
    empleadoId: {type: 'Edm.Int32'},
    expedienteId: {type: 'Edm.Int32'},
    extraprocesal: {type: 'Edm.Boolean'},
    contenido: {type: 'Edm.String', nullable: false, maxLength: 1000},
    fecha: {type: 'Edm.DateTimeOffset'},
    empleadoRegistroId: {type: 'Edm.Int32'},
    fechaRegistro: {type: 'Edm.DateTimeOffset'},
    oficinaId: {type: 'Edm.Int32'},
    esModificable: {type: 'Edm.Boolean', nullable: false},
    esEliminable: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    empleadoRegistro: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    expediente: {type: 'SIU.Tramites.Expediente', navigation: true, field: 'expedienteId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    recursos: {type: 'SIU.Recursos.Recurso', collection: true, navigation: true}
  }
} as EntityConfig<Escrito>;