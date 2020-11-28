import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteAvenimiento } from './requirenteavenimiento.entity';
import { RequirenteAvenimientoModel } from './requirenteavenimiento.model';
import { RequirenteAvenimientoCollection } from './requirenteavenimiento.collection';
//#endregion

export const RequirenteAvenimientoConfig = {
  name: "RequirenteAvenimiento",
  model: RequirenteAvenimientoModel,
  collection: RequirenteAvenimientoCollection,
  annotations: [],
  fields: {
    requirenteId: {type: 'Edm.Int32', key: true, ref: 'requirenteId'},
    avenimientoId: {type: 'Edm.Int32', key: true, ref: 'avenimientoId'},
    key: {type: 'Edm.String'},
    rolRequirenteId: {type: 'Edm.Int32'},
    domicilio: {type: 'Edm.String', maxLength: 270},
    patrocinanteParticular: {type: 'Edm.String', maxLength: 100},
    patrocinanteId: {type: 'Edm.Int32'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    avenimiento: {type: 'SIU.Tramites.Avenimiento', navigation: true, field: 'avenimientoId', ref: 'id'},
    patrocinante: {type: 'SIU.Personas.Empleado', navigation: true},
    rolRequirente: {type: 'SIU.Tramites.RolRequirente', navigation: true, field: 'rolRequirenteId', ref: 'id'}
  }
} as EntityConfig<RequirenteAvenimiento>;