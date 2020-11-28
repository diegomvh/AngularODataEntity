import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SubRolRequirenteExpediente } from './subrolrequirenteexpediente.entity';
import { SubRolRequirenteExpedienteModel } from './subrolrequirenteexpediente.model';
import { SubRolRequirenteExpedienteCollection } from './subrolrequirenteexpediente.collection';
//#endregion

export const SubRolRequirenteExpedienteConfig = {
  name: "SubRolRequirenteExpediente",
  model: SubRolRequirenteExpedienteModel,
  collection: SubRolRequirenteExpedienteCollection,
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
    rolesRequirentesEmpleadosExpedientes: {type: 'SIU.Tramites.RequirenteExpediente', collection: true, navigation: true}
  }
} as EntityConfig<SubRolRequirenteExpediente>;