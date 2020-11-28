import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Plantilla } from './plantilla.entity';
import { PlantillaModel } from './plantilla.model';
import { PlantillaCollection } from './plantilla.collection';
//#endregion

export const PlantillaConfig = {
  name: "Plantilla",
  base: "SIU.Recursos.Recurso",
  model: PlantillaModel,
  collection: PlantillaCollection,
  annotations: [],
  fields: {
    tipoId: {type: 'Edm.Int32', nullable: false},
    autorId: {type: 'Edm.Int32', nullable: false},
    oficinaId: {type: 'Edm.Int32'},
    tipo: {type: 'SIU.Metadatos.Categoria', navigation: true},
    autor: {type: 'SIU.Personas.Empleado', navigation: true},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'}
  }
} as EntityConfig<Plantilla>;