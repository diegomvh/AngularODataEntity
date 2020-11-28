import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Institucion } from './institucion.entity';
import { InstitucionModel } from './institucion.model';
import { InstitucionCollection } from './institucion.collection';
//#endregion

export const InstitucionConfig = {
  name: "Institucion",
  model: InstitucionModel,
  collection: InstitucionCollection,
  annotations: [],
  fields: {
    guid: {type: 'Edm.Guid'},
    localidadId: {type: 'Edm.Int32'},
    nombre: {type: 'Edm.String', maxLength: 50},
    direccion: {type: 'Edm.String', maxLength: 120},
    telefono: {type: 'Edm.String', maxLength: 30},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    localidad: {type: 'SIU.Lugares.Localidad', navigation: true, field: 'localidadId', ref: 'id'}
  }
} as EntityConfig<Institucion>;