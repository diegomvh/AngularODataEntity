import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Audiencia } from './audiencia.entity';
import { AudienciaModel } from './audiencia.model';
import { AudienciaCollection } from './audiencia.collection';
//#endregion

export const AudienciaConfig = {
  name: "Audiencia",
  model: AudienciaModel,
  collection: AudienciaCollection,
  annotations: [],
  fields: {
    casoId: {type: 'Edm.Int32'},
    avenimientoId: {type: 'Edm.Int32'},
    estadoId: {type: 'Edm.Int32', nullable: false},
    temaCitaId: {type: 'Edm.Int32'},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    alta: {type: 'Edm.DateTimeOffset', nullable: false},
    modificacion: {type: 'Edm.DateTimeOffset', nullable: false},
    observaciones: {type: 'Edm.String', maxLength: 300},
    empleadoAltaId: {type: 'Edm.Int32', nullable: false},
    empleadoModificacionId: {type: 'Edm.Int32', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    avenimiento: {type: 'SIU.Tramites.Avenimiento', navigation: true, field: 'avenimientoId', ref: 'id'},
    caso: {type: 'SIU.Tramites.Caso', navigation: true, field: 'casoId', ref: 'id'},
    empleadoAlta: {type: 'SIU.Personas.Empleado', navigation: true},
    empleadoModificacion: {type: 'SIU.Personas.Empleado', navigation: true},
    estado: {type: 'SIU.Tramites.EstadoAudiencia', navigation: true},
    temaCita: {type: 'SIU.Agenda.TemaCita', navigation: true, field: 'temaCitaId', ref: 'id'},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true},
    citaciones: {type: 'SIU.Tramites.Citacion', collection: true, navigation: true}
  }
} as EntityConfig<Audiencia>;