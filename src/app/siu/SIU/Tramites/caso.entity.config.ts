import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Caso } from './caso.entity';
import { CasoModel } from './caso.model';
import { CasoCollection } from './caso.collection';
//#endregion

export const CasoConfig = {
  name: "Caso",
  model: CasoModel,
  collection: CasoCollection,
  annotations: [],
  fields: {
    subMateriaId: {type: 'Edm.Int32'},
    oficinaId: {type: 'Edm.Int32'},
    desde: {type: 'Edm.DateTimeOffset', nullable: false},
    modificacion: {type: 'Edm.DateTimeOffset'},
    hasta: {type: 'Edm.DateTimeOffset'},
    observaciones: {type: 'Edm.String'},
    responsableId: {type: 'Edm.Int32'},
    fechaResponsable: {type: 'Edm.DateTimeOffset'},
    referenteId: {type: 'Edm.Int32'},
    estado: {type: 'Edm.Int32'},
    etapaAvenimiento: {type: 'Edm.Boolean', nullable: false},
    archivado: {type: 'Edm.Boolean', nullable: false},
    reclamoAdministrativo: {type: 'Edm.Boolean'},
    enEspera: {type: 'Edm.Boolean', nullable: false},
    enAtencion: {type: 'Edm.Boolean', nullable: false},
    esNuevo: {type: 'Edm.Boolean', nullable: false},
    esEliminable: {type: 'Edm.Boolean', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    oficina: {type: 'SIU.Lugares.Oficina', navigation: true, field: 'oficinaId', ref: 'id'},
    subMateria: {type: 'SIU.Tramites.SubMateria', navigation: true, field: 'subMateriaId', ref: 'id'},
    historicoSubmaterias: {type: 'SIU.Tramites.HistoricoSubmateria', collection: true, navigation: true},
    etiquetas: {type: 'SIU.Metadatos.Etiqueta', collection: true, navigation: true},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    audiencias: {type: 'SIU.Tramites.Audiencia', collection: true, navigation: true},
    avenimientos: {type: 'SIU.Tramites.Avenimiento', collection: true, navigation: true},
    notaAvenimientos: {type: 'SIU.Tramites.NotaAvenimiento', collection: true, navigation: true},
    categorias: {type: 'SIU.Tramites.CategoriaCasoCaso', collection: true, navigation: true},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true},
    originantes: {type: 'SIU.Tramites.Caso', collection: true, navigation: true},
    originados: {type: 'SIU.Tramites.Caso', collection: true, navigation: true},
    expedientes: {type: 'SIU.Tramites.CasoJudiciable', collection: true, navigation: true},
    requirentes: {type: 'SIU.Tramites.RequirenteCaso', collection: true, navigation: true},
    requirentesEnEspera: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    referente: {type: 'SIU.Personas.Empleado', navigation: true},
    responsable: {type: 'SIU.Personas.Empleado', navigation: true},
    subResponsables: {type: 'SIU.Tramites.EmpleadoCaso', collection: true, navigation: true},
    historicoResponsables: {type: 'SIU.Tramites.HistoricoResponsable', collection: true, navigation: true},
    categoria: {type: 'SIU.Tramites.CategoriaCaso', navigation: true},
    esperasSinAtender: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    recursos: {type: 'SIU.Recursos.Recurso', collection: true, navigation: true},
    documentos: {type: 'SIU.Documentos.Documento', collection: true, navigation: true},
    archivo: {type: 'SIU.Documentos.Archivo', collection: true, navigation: true}
  }
} as EntityConfig<Caso>;