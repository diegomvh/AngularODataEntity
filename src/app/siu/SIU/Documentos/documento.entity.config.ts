import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Documento } from './documento.entity';
import { DocumentoModel } from './documento.model';
import { DocumentoCollection } from './documento.collection';
//#endregion

export const DocumentoConfig = {
  name: "Documento",
  base: "SIU.Recursos.Recurso",
  model: DocumentoModel,
  collection: DocumentoCollection,
  annotations: [],
  fields: {
    numero: {type: 'Edm.Int32', nullable: false},
    anio: {type: 'Edm.Int32', nullable: false},
    tipoId: {type: 'Edm.Int32', nullable: false},
    autorId: {type: 'Edm.Int32', nullable: false},
    oficinaId: {type: 'Edm.Int32'},
    tipo: {type: 'SIU.Metadatos.Categoria', navigation: true},
    autor: {type: 'SIU.Personas.Empleado', navigation: true},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'}
  }
} as EntityConfig<Documento>;