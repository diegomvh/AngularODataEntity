import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { RequirenteModel } from './requirente.model';
import { RequirenteCollection } from './requirente.collection';
//#endregion

export const RequirenteConfig = {
  name: "Requirente",
  model: RequirenteModel,
  collection: RequirenteCollection,
  annotations: [],
  fields: {
    nacionalidadId: {type: 'Edm.Int32'},
    estadoCivilId: {type: 'Edm.Int32'},
    tipoIdentificacionId: {type: 'Edm.Int32'},
    documento: {type: 'Edm.String', maxLength: 13},
    nombres: {type: 'Edm.String', nullable: false, maxLength: 40},
    apellidos: {type: 'Edm.String', maxLength: 40},
    alias: {type: 'Edm.String'},
    sexo: {type: 'Edm.String', nullable: false, maxLength: 1},
    nacimiento: {type: 'Edm.DateTimeOffset'},
    ocupacion: {type: 'Edm.String', maxLength: 30},
    cuil: {type: 'Edm.String', maxLength: 13},
    hijos: {type: 'Edm.String', maxLength: 400},
    involucrados: {type: 'Edm.String', maxLength: 400},
    temporal: {type: 'Edm.Boolean', nullable: false},
    email: {type: 'Edm.String', maxLength: 50},
    puebloOriginario: {type: 'Edm.Boolean', nullable: false},
    guid: {type: 'Edm.Guid', nullable: false},
    fisica: {type: 'Edm.Boolean', nullable: false},
    longname: {type: 'Edm.String'},
    denominacion: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    tipoIdentificacion: {type: 'SIU.Personas.TipoIdentificacion', navigation: true, field: 'tipoIdentificacionId', ref: 'id'},
    nacionalidad: {type: 'SIU.Personas.Nacionalidad', navigation: true, field: 'nacionalidadId', ref: 'id'},
    estadoCivil: {type: 'SIU.Personas.EstadoCivil', navigation: true, field: 'estadoCivilId', ref: 'id'},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true},
    declaracionesJuradas: {type: 'SIU.Personas.DeclaracionJurada', collection: true, navigation: true},
    detenciones: {type: 'SIU.Tramites.Detencion', collection: true, navigation: true},
    historicoAbogadoPersonas: {type: 'SIU.Tramites.HistoricoAbogadoPersona', collection: true, navigation: true},
    historicoSubmaterias: {type: 'SIU.Tramites.HistoricoSubmateria', collection: true, navigation: true},
    citaciones: {type: 'SIU.Tramites.RequirenteCitacion', collection: true, navigation: true},
    recursos: {type: 'SIU.Recursos.Recurso', collection: true, navigation: true},
    esperas: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    oficinas: {type: 'SIU.Personas.RequirenteOficina', collection: true, navigation: true},
    expedientes: {type: 'SIU.Tramites.RequirenteExpediente', collection: true, navigation: true},
    casos: {type: 'SIU.Tramites.RequirenteCaso', collection: true, navigation: true},
    avenimientos: {type: 'SIU.Tramites.RequirenteAvenimiento', collection: true, navigation: true},
    notasAvenimiento: {type: 'SIU.Tramites.RequirenteNotaAvenimiento', collection: true, navigation: true},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    documentos: {type: 'SIU.Documentos.Documento', collection: true, navigation: true},
    archivos: {type: 'SIU.Documentos.Archivo', collection: true, navigation: true}
  }
} as EntityConfig<Requirente>;