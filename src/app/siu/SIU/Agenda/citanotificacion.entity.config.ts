import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CitaNotificacion } from './citanotificacion.entity';
import { CitaNotificacionModel } from './citanotificacion.model';
import { CitaNotificacionCollection } from './citanotificacion.collection';
//#endregion

export const CitaNotificacionConfig = {
  name: "CitaNotificacion",
  model: CitaNotificacionModel,
  collection: CitaNotificacionCollection,
  annotations: [],
  fields: {
    desde: {type: 'Edm.DateTimeOffset', nullable: false},
    hasta: {type: 'Edm.DateTimeOffset', nullable: false},
    contenido: {type: 'Edm.String'},
    temaCitaId: {type: 'Edm.Int32', nullable: false},
    temaCita: {type: 'Edm.String'},
    nic: {type: 'Edm.String'},
    nuf: {type: 'Edm.String'},
    fiscalia: {type: 'Edm.String'},
    oficinaId: {type: 'Edm.Int32'}
  }
} as EntityConfig<CitaNotificacion>;