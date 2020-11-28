import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EstadoCivil } from './estadocivil.entity';
import { EstadoCivilModel } from './estadocivil.model';
import { EstadoCivilCollection } from './estadocivil.collection';
//#endregion

export const EstadoCivilConfig = {
  name: "EstadoCivil",
  model: EstadoCivilModel,
  collection: EstadoCivilCollection,
  annotations: [],
  fields: {
    descripcion: {type: 'Edm.String', nullable: false, maxLength: 30},
    oculto: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    declaracionesJuradas: {type: 'SIU.Personas.DeclaracionJurada', collection: true, navigation: true},
    requirentesNotasAvenimientos: {type: 'SIU.Tramites.RequirenteNotaAvenimiento', collection: true, navigation: true},
    requirentes: {type: 'SIU.Personas.Requirente', collection: true, navigation: true}
  }
} as EntityConfig<EstadoCivil>;