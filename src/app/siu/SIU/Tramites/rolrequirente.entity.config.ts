import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RolRequirente } from './rolrequirente.entity';
import { RolRequirenteModel } from './rolrequirente.model';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export const RolRequirenteConfig = {
  name: "RolRequirente",
  model: RolRequirenteModel,
  collection: RolRequirenteCollection,
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
    requirenteCasos: {type: 'SIU.Tramites.RequirenteCaso', collection: true, navigation: true},
    requirenteAvenimientos: {type: 'SIU.Tramites.RequirenteAvenimiento', collection: true, navigation: true},
    requirenteCitaciones: {type: 'SIU.Tramites.RequirenteCitacion', collection: true, navigation: true},
    requirenteNotasAvenimientos: {type: 'SIU.Tramites.RequirenteNotaAvenimiento', collection: true, navigation: true}
  }
} as EntityConfig<RolRequirente>;