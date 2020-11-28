import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Etiqueta } from './etiqueta.entity';
import { EtiquetaModel } from './etiqueta.model';
import { EtiquetaCollection } from './etiqueta.collection';
//#endregion

export const EtiquetaConfig = {
  name: "Etiqueta",
  model: EtiquetaModel,
  collection: EtiquetaCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false},
    slug: {type: 'Edm.String', nullable: false, maxLength: 450},
    descripcion: {type: 'Edm.String'},
    opciones: {type: 'SIU.Metadatos.EtiquetaOpciones', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    categorias: {type: 'SIU.Metadatos.Categoria', collection: true, navigation: true},
    casos: {type: 'SIU.Tramites.Caso', collection: true, navigation: true},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true}
  }
} as EntityConfig<Etiqueta>;