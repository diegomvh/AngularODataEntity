import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MotivoCambioCategoria } from './motivocambiocategoria.entity';
import { MotivoCambioCategoriaModel } from './motivocambiocategoria.model';
import { MotivoCambioCategoriaCollection } from './motivocambiocategoria.collection';
//#endregion

export const MotivoCambioCategoriaConfig = {
  name: "MotivoCambioCategoria",
  model: MotivoCambioCategoriaModel,
  collection: MotivoCambioCategoriaCollection,
  annotations: [],
  fields: {
    motivo: {type: 'Edm.String', nullable: false, maxLength: 40},
    descripcion: {type: 'Edm.String', maxLength: 150},
    oculto: {type: 'Edm.Boolean'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    categoriaCasoCasos: {type: 'SIU.Tramites.CategoriaCasoCaso', collection: true, navigation: true}
  }
} as EntityConfig<MotivoCambioCategoria>;