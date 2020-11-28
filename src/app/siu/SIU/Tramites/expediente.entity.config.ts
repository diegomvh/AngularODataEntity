import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Expediente } from './expediente.entity';
import { ExpedienteModel } from './expediente.model';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export const ExpedienteConfig = {
  name: "Expediente",
  model: ExpedienteModel,
  collection: ExpedienteCollection,
  annotations: [],
  fields: {
    estadoId: {type: 'Edm.Int32', nullable: false},
    juzgadoId: {type: 'Edm.Int32'},
    secretariaId: {type: 'Edm.Int32'},
    fiscalId: {type: 'Edm.Int32'},
    asesorId: {type: 'Edm.Int32'},
    categoriaId: {type: 'Edm.Int32', nullable: false},
    oficinaId: {type: 'Edm.Int32'},
    empleadoId: {type: 'Edm.Int32'},
    numero: {type: 'Edm.Int32', nullable: false},
    anio: {type: 'Edm.Int32', nullable: false},
    folio: {type: 'Edm.String', maxLength: 10},
    letra: {type: 'Edm.String', maxLength: 10},
    caratula: {type: 'Edm.String'},
    prueba: {type: 'Edm.String'},
    recepcion: {type: 'Edm.DateTimeOffset', nullable: false},
    externo: {type: 'Edm.Boolean', nullable: false},
    observaciones: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    categoria: {type: 'SIU.Tramites.CategoriaExpediente', navigation: true},
    asesor: {type: 'SIU.Personas.Asesor', navigation: true, field: 'asesorId', ref: 'id'},
    fiscal: {type: 'SIU.Personas.Fiscal', navigation: true, field: 'fiscalId', ref: 'id'},
    juzgado: {type: 'SIU.Lugares.Juzgado', navigation: true, field: 'juzgadoId', ref: 'id'},
    secretaria: {type: 'SIU.Lugares.Secretaria', navigation: true, field: 'secretariaId', ref: 'id'},
    estado: {type: 'SIU.Tramites.EstadoExpediente', navigation: true},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true},
    escritos: {type: 'SIU.Tramites.Escrito', collection: true, navigation: true},
    movimientos: {type: 'SIU.Tramites.MovimientoExpediente', collection: true, navigation: true},
    casos: {type: 'SIU.Tramites.CasoJudiciable', collection: true, navigation: true},
    requirentes: {type: 'SIU.Tramites.RequirenteExpediente', collection: true, navigation: true},
    recursos: {type: 'SIU.Recursos.Recurso', collection: true, navigation: true},
    documentos: {type: 'SIU.Documentos.Documento', collection: true, navigation: true}
  }
} as EntityConfig<Expediente>;