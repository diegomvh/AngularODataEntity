import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NotaAvenimiento } from './notaavenimiento.entity';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
//#endregion

export const NotaAvenimientoConfig = {
  name: "NotaAvenimiento",
  model: NotaAvenimientoModel,
  collection: NotaAvenimientoCollection,
  annotations: [],
  fields: {
    casoId: {type: 'Edm.Int32'},
    subMateriaId: {type: 'Edm.Int32'},
    nroNota: {type: 'Edm.Int32', nullable: false},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    observaciones: {type: 'Edm.String', maxLength: 300},
    asunto: {type: 'Edm.String', maxLength: 300},
    referenteId: {type: 'Edm.Int32'},
    responsableId: {type: 'Edm.Int32', nullable: false},
    subResponsableId: {type: 'Edm.Int32'},
    empleadoAltaId: {type: 'Edm.Int32'},
    fechaAlta: {type: 'Edm.DateTimeOffset'},
    incluyePoder: {type: 'Edm.Boolean'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    responsable: {type: 'SIU.Personas.Empleado', navigation: true},
    empleadoAlta: {type: 'SIU.Personas.Empleado', navigation: true},
    referente: {type: 'SIU.Personas.Empleado', navigation: true},
    subResponsable: {type: 'SIU.Personas.Empleado', navigation: true},
    subMateria: {type: 'SIU.Tramites.SubMateria', navigation: true, field: 'subMateriaId', ref: 'id'},
    requirentes: {type: 'SIU.Tramites.RequirenteNotaAvenimiento', collection: true, navigation: true}
  }
} as EntityConfig<NotaAvenimiento>;