import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalidadRequirente } from './calidadrequirente.entity';
import { CalidadRequirenteModel } from './calidadrequirente.model';
import { CalidadRequirenteCollection } from './calidadrequirente.collection';
//#endregion

export const CalidadRequirenteConfig = {
  name: "CalidadRequirente",
  model: CalidadRequirenteModel,
  collection: CalidadRequirenteCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 11},
    criterioOrden: {type: 'Edm.Int32', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    rolRequirenteCasos: {type: 'SIU.Tramites.RequirenteCaso', collection: true, navigation: true}
  }
} as EntityConfig<CalidadRequirente>;