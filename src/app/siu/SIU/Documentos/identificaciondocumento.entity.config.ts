import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentificacionDocumento } from './identificaciondocumento.entity';
import { IdentificacionDocumentoModel } from './identificaciondocumento.model';
import { IdentificacionDocumentoCollection } from './identificaciondocumento.collection';
//#endregion

export const IdentificacionDocumentoConfig = {
  name: "IdentificacionDocumento",
  model: IdentificacionDocumentoModel,
  collection: IdentificacionDocumentoCollection,
  annotations: [],
  fields: {
    numero: {type: 'Edm.Int32', nullable: false},
    anio: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<IdentificacionDocumento>;