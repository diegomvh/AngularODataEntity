import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { VencimientosDestinatarios } from './vencimientosdestinatarios.entity';
import { VencimientosDestinatariosModel } from './vencimientosdestinatarios.model';
import { VencimientosDestinatariosCollection } from './vencimientosdestinatarios.collection';
//#endregion

export const VencimientosDestinatariosConfig = {
  name: "VencimientosDestinatarios",
  model: VencimientosDestinatariosModel,
  collection: VencimientosDestinatariosCollection,
  annotations: [],
  fields: {
    vencimientos: {type: 'SIU.Tramites.VencimientoDestinatario', collection: true}
  }
} as EntityConfig<VencimientosDestinatarios>;