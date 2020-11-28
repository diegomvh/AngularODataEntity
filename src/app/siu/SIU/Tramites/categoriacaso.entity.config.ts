import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaCaso } from './categoriacaso.entity';
import { CategoriaCasoModel } from './categoriacaso.model';
import { CategoriaCasoCollection } from './categoriacaso.collection';
//#endregion

export const CategoriaCasoConfig = {
  name: "CategoriaCaso",
  model: CategoriaCasoModel,
  collection: CategoriaCasoCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 30},
    oculto: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    categoriaCasoCasos: {type: 'SIU.Tramites.CategoriaCasoCaso', collection: true, navigation: true},
    requirentesEnEspera: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true}
  }
} as EntityConfig<CategoriaCaso>;