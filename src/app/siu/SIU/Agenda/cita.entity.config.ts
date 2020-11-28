import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Cita } from './cita.entity';
import { CitaModel } from './cita.model';
import { CitaCollection } from './cita.collection';
//#endregion

export const CitaConfig = {
  name: "Cita",
  model: CitaModel,
  collection: CitaCollection,
  annotations: [],
  fields: {
    empleadoId: {type: 'Edm.Int32'},
    oficinaId: {type: 'Edm.Int32'},
    temaCitaId: {type: 'Edm.Int32'},
    expedienteId: {type: 'Edm.Int32'},
    casoId: {type: 'Edm.Int32'},
    requirenteId: {type: 'Edm.Int32'},
    audienciaId: {type: 'Edm.Int32'},
    movimientoId: {type: 'Edm.Int32'},
    desde: {type: 'Edm.DateTimeOffset', nullable: false},
    hasta: {type: 'Edm.DateTimeOffset', nullable: false},
    contenido: {type: 'Edm.String', nullable: false, maxLength: 300},
    privado: {type: 'Edm.Boolean', nullable: false},
    empleadoModificacionId: {type: 'Edm.Int32'},
    fechaModificacion: {type: 'Edm.DateTimeOffset'},
    numeroNotificacion: {type: 'Edm.Int32'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    audiencia: {type: 'SIU.Tramites.Audiencia', navigation: true, field: 'audienciaId', ref: 'id'},
    movimiento: {type: 'SIU.Tramites.MovimientoCaso', navigation: true},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    expediente: {type: 'SIU.Tramites.Expediente', navigation: true, field: 'expedienteId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    requirente: {type: 'SIU.Personas.Requirente', navigation: true, field: 'requirenteId', ref: 'id'},
    temaCita: {type: 'SIU.Agenda.TemaCita', navigation: true, field: 'temaCitaId', ref: 'id'}
  }
} as EntityConfig<Cita>;