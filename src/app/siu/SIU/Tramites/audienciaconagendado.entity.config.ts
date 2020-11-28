import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AudienciaConAgendado } from './audienciaconagendado.entity';
import { AudienciaConAgendadoModel } from './audienciaconagendado.model';
import { AudienciaConAgendadoCollection } from './audienciaconagendado.collection';
//#endregion

export const AudienciaConAgendadoConfig = {
  name: "AudienciaConAgendado",
  model: AudienciaConAgendadoModel,
  collection: AudienciaConAgendadoCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Int32', nullable: false},
    avenimientoId: {type: 'Edm.Int32'},
    empleadoAltaId: {type: 'Edm.Int32', nullable: false},
    empleadoAlta: {type: 'Edm.String'},
    empleadoModificacionId: {type: 'Edm.Int32', nullable: false},
    empleadoModificacion: {type: 'Edm.String'},
    agendados: {type: 'Edm.String'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    observaciones: {type: 'Edm.String'},
    temaCita: {type: 'Edm.String'},
    estadoAudiencia: {type: 'Edm.String'},
    alta: {type: 'Edm.DateTimeOffset', nullable: false},
    modificacion: {type: 'Edm.DateTimeOffset', nullable: false},
    rev: {type: 'Edm.Binary'}
  }
} as EntityConfig<AudienciaConAgendado>;