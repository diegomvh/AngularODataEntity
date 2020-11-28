import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Secretaria } from './secretaria.entity';
import { SecretariaModel } from './secretaria.model';
import { SecretariaCollection } from './secretaria.collection';
//#endregion

export const SecretariaConfig = {
  name: "Secretaria",
  model: SecretariaModel,
  collection: SecretariaCollection,
  annotations: [],
  fields: {
    juzgadoId: {type: 'Edm.Int32'},
    nombre: {type: 'Edm.String', nullable: false, maxLength: 5},
    nombresSecretario: {type: 'Edm.String', nullable: false, maxLength: 35},
    apellidosSecretario: {type: 'Edm.String', nullable: false, maxLength: 35},
    telefono: {type: 'Edm.String', nullable: false, maxLength: 20},
    secreatariaSigdoId: {type: 'Edm.Int32'},
    guid: {type: 'Edm.Guid', nullable: false},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true},
    juzgado: {type: 'SIU.Lugares.Juzgado', navigation: true, field: 'juzgadoId', ref: 'id'}
  }
} as EntityConfig<Secretaria>;