import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { VencimientoDestinatario } from './vencimientodestinatario.entity';
import { VencimientoDestinatarioModel } from './vencimientodestinatario.model';
import { VencimientoDestinatarioCollection } from './vencimientodestinatario.collection';
//#endregion

export const VencimientoDestinatarioConfig = {
  name: "VencimientoDestinatario",
  base: "SIU.Tramites.CitaDestinatarios",
  model: VencimientoDestinatarioModel,
  collection: VencimientoDestinatarioCollection,
  annotations: [],
  fields: {
    descripcion: {type: 'Edm.String'}
  }
} as EntityConfig<VencimientoDestinatario>;