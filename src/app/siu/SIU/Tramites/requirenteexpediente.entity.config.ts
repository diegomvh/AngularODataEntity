import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteExpediente } from './requirenteexpediente.entity';
import { RequirenteExpedienteModel } from './requirenteexpediente.model';
import { RequirenteExpedienteCollection } from './requirenteexpediente.collection';
//#endregion

export const RequirenteExpedienteConfig = {
  name: "RequirenteExpediente",
  model: RequirenteExpedienteModel,
  collection: RequirenteExpedienteCollection,
  annotations: [],
  fields: {
    expedienteId: {type: 'Edm.Int32', key: true, ref: 'expedienteId'},
    requirenteId: {type: 'Edm.Int32', key: true, ref: 'requirenteId'},
    oficinaId: {type: 'Edm.Int32', key: true, ref: 'oficinaId'},
    key: {type: 'Edm.String'},
    empleadoId: {type: 'Edm.Int32'},
    rolRequirenteId: {type: 'Edm.Int32', nullable: false},
    subRolRequirenteId: {type: 'Edm.Int32', nullable: false},
    ausente: {type: 'Edm.Boolean'},
    abogadoParticular: {type: 'Edm.Boolean'},
    empleadoRegId: {type: 'Edm.Int32'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    expediente: {type: 'SIU.Tramites.Expediente', navigation: true, field: 'expedienteId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    empleadoReg: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    rolRequirente: {type: 'SIU.Tramites.RolRequirenteExpediente', navigation: true},
    subRolRequirente: {type: 'SIU.Tramites.SubRolRequirenteExpediente', navigation: true}
  }
} as EntityConfig<RequirenteExpediente>;