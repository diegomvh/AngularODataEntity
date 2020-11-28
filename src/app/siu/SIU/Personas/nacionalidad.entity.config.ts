import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Nacionalidad } from './nacionalidad.entity';
import { NacionalidadModel } from './nacionalidad.model';
import { NacionalidadCollection } from './nacionalidad.collection';
//#endregion

export const NacionalidadConfig = {
  name: "Nacionalidad",
  model: NacionalidadModel,
  collection: NacionalidadCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 30},
    oculto: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    requirentes: {type: 'SIU.Personas.Requirente', collection: true, navigation: true}
  }
} as EntityConfig<Nacionalidad>;