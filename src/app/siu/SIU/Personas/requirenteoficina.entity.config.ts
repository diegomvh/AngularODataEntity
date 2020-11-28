import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteOficina } from './requirenteoficina.entity';
import { RequirenteOficinaModel } from './requirenteoficina.model';
import { RequirenteOficinaCollection } from './requirenteoficina.collection';
//#endregion

export const RequirenteOficinaConfig = {
  name: "RequirenteOficina",
  model: RequirenteOficinaModel,
  collection: RequirenteOficinaCollection,
  annotations: [],
  fields: {
    requirenteId: {type: 'Edm.Int32', key: true, ref: 'requirenteId'},
    oficinaId: {type: 'Edm.Int32', key: true, ref: 'oficinaId'},
    key: {type: 'Edm.String'},
    empleadoId: {type: 'Edm.Int32'},
    localidadId: {type: 'Edm.Int32'},
    direccion: {type: 'Edm.String', maxLength: 120},
    barrio: {type: 'Edm.String', maxLength: 70},
    telefono: {type: 'Edm.String', maxLength: 30},
    observaciones: {type: 'Edm.String', maxLength: 300},
    fechaUltimaActualizacion: {type: 'Edm.DateTimeOffset', nullable: false},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    localidad: {type: 'SIU.Lugares.Localidad', navigation: true, field: 'localidadId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'}
  }
} as EntityConfig<RequirenteOficina>;