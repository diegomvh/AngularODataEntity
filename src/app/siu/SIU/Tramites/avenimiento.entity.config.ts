import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Avenimiento } from './avenimiento.entity';
import { AvenimientoModel } from './avenimiento.model';
import { AvenimientoCollection } from './avenimiento.collection';
//#endregion

export const AvenimientoConfig = {
  name: "Avenimiento",
  model: AvenimientoModel,
  collection: AvenimientoCollection,
  annotations: [],
  fields: {
    oficinaId: {type: 'Edm.Int32'},
    casoId: {type: 'Edm.Int32'},
    subMateriaId: {type: 'Edm.Int32'},
    empleadoId: {type: 'Edm.Int32'},
    numero: {type: 'Edm.String', maxLength: 10},
    asunto: {type: 'Edm.String', maxLength: 200},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    observaciones: {type: 'Edm.String', maxLength: 300},
    aDistancia: {type: 'Edm.Boolean'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    subMateria: {type: 'SIU.Tramites.SubMateria', navigation: true, field: 'subMateriaId', ref: 'id'},
    audiencias: {type: 'SIU.Tramites.Audiencia', collection: true, navigation: true},
    requirentes: {type: 'SIU.Tramites.RequirenteAvenimiento', collection: true, navigation: true}
  }
} as EntityConfig<Avenimiento>;