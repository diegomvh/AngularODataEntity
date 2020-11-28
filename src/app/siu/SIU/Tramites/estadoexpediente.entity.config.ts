import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EstadoExpediente } from './estadoexpediente.entity';
import { EstadoExpedienteModel } from './estadoexpediente.model';
import { EstadoExpedienteCollection } from './estadoexpediente.collection';
//#endregion

export const EstadoExpedienteConfig = {
  name: "EstadoExpediente",
  model: EstadoExpedienteModel,
  collection: EstadoExpedienteCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 60},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true}
  }
} as EntityConfig<EstadoExpediente>;