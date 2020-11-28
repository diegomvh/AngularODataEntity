import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MovimientoCasoConAgendado } from './movimientocasoconagendado.entity';
import { MovimientoCasoConAgendadoModel } from './movimientocasoconagendado.model';
import { MovimientoCasoConAgendadoCollection } from './movimientocasoconagendado.collection';
//#endregion

export const MovimientoCasoConAgendadoConfig = {
  name: "MovimientoCasoConAgendado",
  model: MovimientoCasoConAgendadoModel,
  collection: MovimientoCasoConAgendadoCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Int32', nullable: false},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    estadoCasoId: {type: 'Edm.Int32', nullable: false},
    estadoCaso: {type: 'Edm.String'},
    observaciones: {type: 'Edm.String'},
    vencimiento1: {type: 'Edm.DateTimeOffset'},
    vencimiento2: {type: 'Edm.DateTimeOffset'},
    agendados: {type: 'Edm.String'},
    rev: {type: 'Edm.Binary'}
  }
} as EntityConfig<MovimientoCasoConAgendado>;