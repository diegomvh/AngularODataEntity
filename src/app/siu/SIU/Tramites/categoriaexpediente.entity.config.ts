import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaExpediente } from './categoriaexpediente.entity';
import { CategoriaExpedienteModel } from './categoriaexpediente.model';
import { CategoriaExpedienteCollection } from './categoriaexpediente.collection';
//#endregion

export const CategoriaExpedienteConfig = {
  name: "CategoriaExpediente",
  model: CategoriaExpedienteModel,
  collection: CategoriaExpedienteCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 70},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true}
  }
} as EntityConfig<CategoriaExpediente>;