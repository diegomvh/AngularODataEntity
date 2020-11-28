import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentificacionDocumentoConfig } from './identificaciondocumento.entity.config';
import { PlantillaConfig } from './plantilla.entity.config';
import { DocumentoConfig } from './documento.entity.config';
import { ArchivoConfig } from './archivo.entity.config';
//#endregion

export const DocumentosSchema = {
  namespace: "SIU.Documentos",
  enums: [],
  entities: [IdentificacionDocumentoConfig,
    PlantillaConfig,
    DocumentoConfig,
    ArchivoConfig],
  callables: [],
  containers: []
} as SchemaConfig;