import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteCitacion } from './requirentecitacion.entity';
import { RequirenteCitacionModel } from './requirentecitacion.model';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
//#endregion

export const RequirenteCitacionConfig = {
  name: "RequirenteCitacion",
  model: RequirenteCitacionModel,
  collection: RequirenteCitacionCollection,
  annotations: [],
  fields: {
    requirenteId: {type: 'Edm.Int32', key: true, ref: 'requirenteId'},
    citacionId: {type: 'Edm.Int32', key: true, ref: 'citacionId'},
    key: {type: 'Edm.String'},
    rolRequirenteId: {type: 'Edm.Int32'},
    domicilio: {type: 'Edm.String', maxLength: 270},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    citacion: {type: 'SIU.Tramites.Citacion', navigation: true, field: 'citacionId', ref: 'id'},
    rolRequirente: {type: 'SIU.Tramites.RolRequirente', navigation: true, field: 'rolRequirenteId', ref: 'id'}
  }
} as EntityConfig<RequirenteCitacion>;