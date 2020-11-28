import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Categoria } from './categoria.entity';
import { CategoriaModel } from './categoria.model';
import { CategoriaCollection } from './categoria.collection';
//#endregion

export const CategoriaConfig = {
  name: "Categoria",
  model: CategoriaModel,
  collection: CategoriaCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false},
    slug: {type: 'Edm.String', nullable: false},
    descripcion: {type: 'Edm.String'},
    opciones: {type: 'SIU.Metadatos.CategoriaOpciones', nullable: false},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    lft: {type: 'Edm.Int32'},
    rgt: {type: 'Edm.Int32'},
    level: {type: 'Edm.Int32'},
    parentId: {type: 'Edm.Int32'},
    treeId: {type: 'Edm.Int32'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    documentos: {type: 'SIU.Documentos.Documento', collection: true, navigation: true},
    plantillas: {type: 'SIU.Documentos.Plantilla', collection: true, navigation: true},
    archivos: {type: 'SIU.Documentos.Archivo', collection: true, navigation: true},
    etiquetas: {type: 'SIU.Metadatos.Etiqueta', collection: true, navigation: true},
    descendientes: {type: 'SIU.Metadatos.Categoria', collection: true, navigation: true},
    ancestros: {type: 'SIU.Metadatos.Categoria', collection: true, navigation: true},
    familia: {type: 'SIU.Metadatos.Categoria', collection: true, navigation: true},
    parent: {type: 'SIU.Metadatos.Categoria', navigation: true},
    children: {type: 'SIU.Metadatos.Categoria', collection: true, navigation: true}
  }
} as EntityConfig<Categoria>;