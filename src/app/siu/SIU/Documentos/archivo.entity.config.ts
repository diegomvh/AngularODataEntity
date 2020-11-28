import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Archivo } from './archivo.entity';
import { ArchivoModel } from './archivo.model';
import { ArchivoCollection } from './archivo.collection';
//#endregion

export const ArchivoConfig = {
  name: "Archivo",
  base: "SIU.Recursos.Recurso",
  model: ArchivoModel,
  collection: ArchivoCollection,
  annotations: [],
  fields: {
    tipoId: {type: 'Edm.Int32', nullable: false},
    autorId: {type: 'Edm.Int32', nullable: false},
    oficinaId: {type: 'Edm.Int32'},
    tipo: {type: 'SIU.Metadatos.Categoria', navigation: true},
    autor: {type: 'SIU.Personas.Empleado', navigation: true},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'}
  }
} as EntityConfig<Archivo>;