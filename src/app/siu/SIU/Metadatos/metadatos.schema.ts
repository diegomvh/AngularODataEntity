import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaOpcionesConfig } from './categoriaopciones.enum.config';
import { EtiquetaOpcionesConfig } from './etiquetaopciones.enum.config';
import { CategoriaConfig } from './categoria.entity.config';
import { EtiquetaConfig } from './etiqueta.entity.config';
//#endregion

export const MetadatosSchema = {
  namespace: "SIU.Metadatos",
  enums: [CategoriaOpcionesConfig,
    EtiquetaOpcionesConfig],
  entities: [CategoriaConfig,
    EtiquetaConfig],
  callables: [],
  containers: []
} as SchemaConfig;