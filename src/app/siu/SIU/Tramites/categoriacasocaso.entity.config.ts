import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
//#endregion

export const CategoriaCasoCasoConfig = {
  name: "CategoriaCasoCaso",
  model: CategoriaCasoCasoModel,
  collection: CategoriaCasoCasoCollection,
  annotations: [],
  fields: {
    categoriaCasoId: {type: 'Edm.Int32', key: true, ref: 'categoriaCasoId'},
    casoId: {type: 'Edm.Int32', key: true, ref: 'casoId'},
    desde: {type: 'Edm.DateTimeOffset', key: true, ref: 'desde', nullable: false},
    key: {type: 'Edm.String'},
    motivoCambioCategoriaId: {type: 'Edm.Int32'},
    hasta: {type: 'Edm.DateTimeOffset'},
    observaciones: {type: 'Edm.String', maxLength: 200},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    categoriaCaso: {type: 'SIU.Tramites.CategoriaCaso', navigation: true, field: 'categoriaCasoId', ref: 'id'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    motivoCambioCategoria: {type: 'SIU.Tramites.MotivoCambioCategoria', navigation: true, field: 'motivoCambioCategoriaId', ref: 'id'}
  }
} as EntityConfig<CategoriaCasoCaso>;