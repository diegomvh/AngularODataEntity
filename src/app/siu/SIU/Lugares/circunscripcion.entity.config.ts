import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Circunscripcion } from './circunscripcion.entity';
import { CircunscripcionModel } from './circunscripcion.model';
import { CircunscripcionCollection } from './circunscripcion.collection';
//#endregion

export const CircunscripcionConfig = {
  name: "Circunscripcion",
  model: CircunscripcionModel,
  collection: CircunscripcionCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    localidades: {type: 'SIU.Lugares.Localidad', collection: true, navigation: true}
  }
} as EntityConfig<Circunscripcion>;