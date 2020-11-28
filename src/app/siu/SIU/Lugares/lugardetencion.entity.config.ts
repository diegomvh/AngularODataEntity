import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LugarDetencion } from './lugardetencion.entity';
import { LugarDetencionModel } from './lugardetencion.model';
import { LugarDetencionCollection } from './lugardetencion.collection';
//#endregion

export const LugarDetencionConfig = {
  name: "LugarDetencion",
  model: LugarDetencionModel,
  collection: LugarDetencionCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 80},
    localidadId: {type: 'Edm.Int32'},
    guid: {type: 'Edm.Guid', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    localidad: {type: 'SIU.Lugares.Localidad', navigation: true, field: 'localidadId', ref: 'id'}
  }
} as EntityConfig<LugarDetencion>;