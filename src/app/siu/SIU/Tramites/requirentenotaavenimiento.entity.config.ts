import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteNotaAvenimiento } from './requirentenotaavenimiento.entity';
import { RequirenteNotaAvenimientoModel } from './requirentenotaavenimiento.model';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
//#endregion

export const RequirenteNotaAvenimientoConfig = {
  name: "RequirenteNotaAvenimiento",
  model: RequirenteNotaAvenimientoModel,
  collection: RequirenteNotaAvenimientoCollection,
  annotations: [],
  fields: {
    requirenteId: {type: 'Edm.Int32', key: true, ref: 'requirenteId'},
    notaAvenimientoId: {type: 'Edm.Int32', key: true, ref: 'notaAvenimientoId'},
    key: {type: 'Edm.String'},
    rolRequirenteId: {type: 'Edm.Int32'},
    estadoCivilId: {type: 'Edm.Int32'},
    domicilio: {type: 'Edm.String', maxLength: 270},
    hijos: {type: 'Edm.String', maxLength: 400},
    abogadoPatrocinante: {type: 'Edm.String', maxLength: 60},
    observaciones: {type: 'Edm.String', maxLength: 200},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    notaAvenimiento: {type: 'SIU.Tramites.NotaAvenimiento', navigation: true, field: 'notaAvenimientoId', ref: 'id'},
    estadoCivil: {type: 'SIU.Personas.EstadoCivil', navigation: true, field: 'estadoCivilId', ref: 'id'},
    rolRequirente: {type: 'SIU.Tramites.RolRequirente', navigation: true, field: 'rolRequirenteId', ref: 'id'}
  }
} as EntityConfig<RequirenteNotaAvenimiento>;