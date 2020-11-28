import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RolRequirenteExpediente } from './rolrequirenteexpediente.entity';
import { RolRequirenteExpedienteModel } from './rolrequirenteexpediente.model';
import { RolRequirenteExpedienteCollection } from './rolrequirenteexpediente.collection';
//#endregion

export const RolRequirenteExpedienteConfig = {
  name: "RolRequirenteExpediente",
  model: RolRequirenteExpedienteModel,
  collection: RolRequirenteExpedienteCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 30},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    requirenteExpedientes: {type: 'SIU.Tramites.RequirenteExpediente', collection: true, navigation: true}
  }
} as EntityConfig<RolRequirenteExpediente>;