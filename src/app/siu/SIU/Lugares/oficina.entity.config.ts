import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from './oficina.entity';
import { OficinaModel } from './oficina.model';
import { OficinaCollection } from './oficina.collection';
//#endregion

export const OficinaConfig = {
  name: "Oficina",
  model: OficinaModel,
  collection: OficinaCollection,
  annotations: [],
  fields: {
    nombre: {type: 'Edm.String', nullable: false, maxLength: 50},
    abreviado: {type: 'Edm.String'},
    direccion: {type: 'Edm.String', maxLength: 60},
    telefono: {type: 'Edm.String', maxLength: 30},
    localidadId: {type: 'Edm.Int32'},
    guid: {type: 'Edm.Guid', nullable: false},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    localidad: {type: 'SIU.Lugares.Localidad', navigation: true, field: 'localidadId', ref: 'id'},
    recursos: {type: 'SIU.Recursos.RecursoOficina', collection: true, navigation: true},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true},
    casos: {type: 'SIU.Tramites.Caso', collection: true, navigation: true},
    empleados: {type: 'SIU.Personas.Empleado', collection: true, navigation: true},
    avenimientos: {type: 'SIU.Tramites.Avenimiento', collection: true, navigation: true},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true},
    declaracionesJuradas: {type: 'SIU.Personas.DeclaracionJurada', collection: true, navigation: true},
    escritos: {type: 'SIU.Tramites.Escrito', collection: true, navigation: true},
    requirenteEsperas: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    requirenteOficinas: {type: 'SIU.Personas.RequirenteOficina', collection: true, navigation: true},
    requirenteExpedientes: {type: 'SIU.Tramites.RequirenteExpediente', collection: true, navigation: true},
    materias: {type: 'SIU.Tramites.Materia', collection: true, navigation: true},
    temasCita: {type: 'SIU.Agenda.TemaCita', collection: true, navigation: true},
    autorizadas: {type: 'SIU.Lugares.Oficina', collection: true, navigation: true},
    autorizantes: {type: 'SIU.Lugares.Oficina', collection: true, navigation: true}
  }
} as EntityConfig<Oficina>;