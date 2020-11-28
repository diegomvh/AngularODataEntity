import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Provincia } from './provincia.entity';
import { ProvinciaModel } from './provincia.model';
import { ProvinciaCollection } from './provincia.collection';
//#endregion

export const ProvinciaConfig = {
  name: "Provincia",
  model: ProvinciaModel,
  collection: ProvinciaCollection,
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
    localidades: {type: 'SIU.Lugares.Localidad', collection: true, navigation: true}
  }
} as EntityConfig<Provincia>;