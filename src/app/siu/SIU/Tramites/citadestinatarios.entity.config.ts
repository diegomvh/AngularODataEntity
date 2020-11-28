import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CitaDestinatarios } from './citadestinatarios.entity';
import { CitaDestinatariosModel } from './citadestinatarios.model';
import { CitaDestinatariosCollection } from './citadestinatarios.collection';
//#endregion

export const CitaDestinatariosConfig = {
  name: "CitaDestinatarios",
  model: CitaDestinatariosModel,
  collection: CitaDestinatariosCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<CitaDestinatarios>;