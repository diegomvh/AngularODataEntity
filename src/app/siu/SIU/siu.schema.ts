import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const SIUSchema = {
  namespace: "SIU",
  enums: [],
  entities: [],
  callables: [{
    name: 'Navegar',
    bound: true,
    composable: false,
    parameters: { chunks: {type: 'Edm.String'} },
    return: "SIU.Metadatos.Categoria"
  }, {
    name: 'NavegarOficina',
    bound: true,
    composable: false,
    parameters: { oficinaId: {type: 'Edm.Int32', nullable: false}, chunks: {type: 'Edm.String'} },
    return: "SIU.Metadatos.Categoria"
  }, {
    name: 'CategoriaDeCircunscripcion',
    bound: true,
    composable: false,
    parameters: { circunscripcionId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Metadatos.Categoria"
  }, {
    name: 'CategoriaDeOficina',
    bound: true,
    composable: false,
    parameters: { oficinaId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Metadatos.Categoria"
  }, {
    name: 'Directory',
    bound: true,
    composable: false,
    parameters: { stopId: {type: 'Edm.Int32', nullable: false}, withStop: {type: 'Edm.Boolean', nullable: false} },
    return: "Edm.String"
  }, {
    name: 'GetByKey',
    bound: true,
    composable: false,
    parameters: { key: {type: 'Edm.String'} },
    return: "SIU.Recursos.Recurso"
  }, {
    name: 'SearchEntries',
    bound: true,
    composable: false,
    parameters: { text: {type: 'Edm.String'}, directory: {type: 'Edm.String'} },
    return: "SIU.Recursos.RecursoEntry"
  }, {
    name: 'SearchEntries',
    bound: true,
    composable: false,
    parameters: { text: {type: 'Edm.String'}, directory: {type: 'Edm.String'}, opciones: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Recursos.RecursoEntry"
  }, {
    name: 'ListEntries',
    bound: true,
    composable: false,
    parameters: { directory: {type: 'Edm.String'} },
    return: "SIU.Recursos.RecursoEntry"
  }, {
    name: 'ListEntries',
    bound: true,
    composable: false,
    parameters: { directory: {type: 'Edm.String'}, onlyDir: {type: 'Edm.Boolean', nullable: false} },
    return: "SIU.Recursos.RecursoEntry"
  }, {
    name: 'ListEntries',
    bound: true,
    composable: false,
    parameters: { directory: {type: 'Edm.String'}, onlyDir: {type: 'Edm.Boolean', nullable: false}, opciones: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Recursos.RecursoEntry"
  }, {
    name: 'ResolveUrls',
    bound: true,
    composable: false,
    return: "SIU.Api.Infrastructure.Storage.Backend.SourceUrls"
  }, {
    name: 'BuildEntry',
    bound: true,
    composable: false,
    parameters: { url: {type: 'Edm.String'} },
    return: "SIU.Recursos.RecursoEntry"
  }, {
    name: 'SharedLink',
    bound: true,
    composable: false,
    parameters: { perms: {type: 'SIU.Recursos.RecursoPermisos', nullable: false}, hours: {type: 'Edm.Int32', nullable: false} },
    return: "Edm.String"
  }, {
    name: 'CrearIdentificacion',
    bound: true,
    composable: false,
    parameters: { tipoId: {type: 'Edm.Int32', nullable: false}, anio: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Documentos.IdentificacionDocumento"
  }, {
    name: 'CrearIdentificacion',
    bound: true,
    composable: false,
    parameters: { tipoId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Documentos.IdentificacionDocumento"
  }, {
    name: 'ExisteIdentificacion',
    bound: true,
    composable: false,
    parameters: { tipoId: {type: 'Edm.Int32', nullable: false}, numero: {type: 'Edm.Int32', nullable: false}, anio: {type: 'Edm.Int32', nullable: false} },
    return: "Edm.Boolean"
  }, {
    name: 'VisiblesPorUsuario',
    bound: true,
    composable: false,
    return: "SIU.Documentos.Documento"
  }, {
    name: 'TestString',
    bound: true,
    composable: false,
    return: "Edm.String"
  }, {
    name: 'TestDate',
    bound: false,
    composable: false,
    return: "Edm.DateTimeOffset"
  }, {
    name: 'TestRequirente1',
    bound: false,
    composable: false,
    return: "SIU.Personas.Requirente"
  }, {
    name: 'TestRequirente2',
    bound: false,
    composable: false,
    return: "SIU.Personas.Requirente"
  }, {
    name: 'TestRequirente3',
    path: "requirentes",
    bound: false,
    composable: false,
    return: "SIU.Personas.Requirente"
  }, {
    name: 'TestRequirente4',
    path: "requirentes",
    bound: false,
    composable: false,
    return: "SIU.Personas.Requirente"
  }, {
    name: 'CasosComo',
    bound: true,
    composable: false,
    parameters: { rol: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Tramites.Caso"
  }, {
    name: 'GetCausas',
    bound: true,
    composable: false,
    parameters: { principalId: {type: 'Edm.Int32', nullable: false}, alternativoId: {type: 'Edm.Int32', nullable: false}, desde: {type: 'Edm.DateTimeOffset', nullable: false}, hasta: {type: 'Edm.DateTimeOffset', nullable: false}, submaterias: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "SIU.Tramites.CasoPenalReporte"
  }, {
    name: 'PrintCausas',
    bound: true,
    composable: false,
    parameters: { principalId: {type: 'Edm.Int32', nullable: false}, alternativoId: {type: 'Edm.Int32', nullable: false}, desde: {type: 'Edm.DateTimeOffset', nullable: false}, hasta: {type: 'Edm.DateTimeOffset', nullable: false}, submaterias: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "Edm.Binary"
  }, {
    name: 'GetMovimientosPersonaCaso',
    bound: true,
    composable: false,
    parameters: { casoId: {type: 'Edm.Int32', nullable: false}, personaId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Tramites.MovimientoCasoConAgendado"
  }, {
    name: 'GetAudienciasCaso',
    bound: true,
    composable: false,
    parameters: { casoId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Tramites.AudienciaConAgendado"
  }, {
    name: 'GetAudienciasAvenimiento',
    bound: true,
    composable: false,
    parameters: { avenimientoId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Tramites.AudienciaConAgendado"
  }, {
    name: 'AudienciasDelRequirentePorEmpleado',
    bound: true,
    composable: false,
    parameters: { requirenteId: {type: 'Edm.Int32', nullable: false}, desde: {type: 'Edm.DateTimeOffset', nullable: false}, hasta: {type: 'Edm.DateTimeOffset', nullable: false} },
    return: "SIU.Tramites.Audiencia"
  }, {
    name: 'GetProximas',
    bound: true,
    composable: false,
    return: "SIU.Agenda.CitaNotificacion"
  }, {
    name: 'CitasDelRequirente',
    bound: true,
    composable: false,
    parameters: { requirenteId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Agenda.Cita"
  }, {
    name: 'CitasDelRequirente',
    bound: true,
    composable: false,
    parameters: { requirenteId: {type: 'Edm.Int32', nullable: false}, desde: {type: 'Edm.DateTimeOffset', nullable: false} },
    return: "SIU.Agenda.Cita"
  }, {
    name: 'CitasDelRequirente',
    bound: true,
    composable: false,
    parameters: { requirenteId: {type: 'Edm.Int32', nullable: false}, hasta: {type: 'Edm.DateTimeOffset', nullable: false} },
    return: "SIU.Agenda.Cita"
  }, {
    name: 'CitasDelRequirente',
    bound: true,
    composable: false,
    parameters: { requirenteId: {type: 'Edm.Int32', nullable: false}, desde: {type: 'Edm.DateTimeOffset', nullable: false}, hasta: {type: 'Edm.DateTimeOffset', nullable: false} },
    return: "SIU.Agenda.Cita"
  }, {
    name: 'CitasDelCaso',
    bound: true,
    composable: false,
    parameters: { casoId: {type: 'Edm.Int32', nullable: false}, desde: {type: 'Edm.DateTimeOffset', nullable: false} },
    return: "SIU.Agenda.Cita"
  }, {
    name: 'ComunesEntreOficinas',
    bound: true,
    composable: false,
    parameters: { ids: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "SIU.Agenda.TemaCita"
  }, {
    name: 'ComunesEntreEmpleados',
    bound: true,
    composable: false,
    parameters: { ids: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "SIU.Agenda.TemaCita"
  }, {
    name: 'GetCitacionesAudiencia',
    bound: true,
    composable: false,
    parameters: { audienciaId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Tramites.CitacionConParticipante"
  }, {
    name: 'Rebuild',
    bound: true,
    composable: false,
  }, {
    name: 'HttpLink',
    bound: true,
    composable: false,
    parameters: { url: {type: 'Edm.String'}, nombre: {type: 'Edm.String'}, opciones: {type: 'Edm.Int32', nullable: false}, ubicacion: {type: 'Edm.String'} },
    return: "SIU.Recursos.Recurso"
  }, {
    name: 'SkuaLink',
    bound: true,
    composable: false,
    parameters: { url: {type: 'Edm.String'}, nombre: {type: 'Edm.String'}, descripcion: {type: 'Edm.String'}, fecha: {type: 'Edm.DateTimeOffset', nullable: false}, opciones: {type: 'Edm.Int32', nullable: false}, tipo: {type: 'Edm.String'}, ubicacion: {type: 'Edm.String'} },
    return: "SIU.Recursos.Recurso"
  }, {
    name: 'SerconexPenalLink',
    bound: true,
    composable: false,
    parameters: { url: {type: 'Edm.String'}, nombre: {type: 'Edm.String'}, descripcion: {type: 'Edm.String'}, fecha: {type: 'Edm.Double', nullable: false}, opciones: {type: 'Edm.Int32', nullable: false}, ubicacion: {type: 'Edm.String'}, contentType: {type: 'Edm.String'} },
    return: "SIU.Recursos.Recurso"
  }, {
    name: 'Publicar',
    bound: true,
    composable: false,
    return: "SIU.Recursos.Recurso"
  }, {
    name: 'Despublicar',
    bound: true,
    composable: false,
    return: "SIU.Recursos.Recurso"
  }, {
    name: 'ToPlantilla',
    bound: true,
    composable: false,
    parameters: { nombre: {type: 'Edm.String'}, tipo: {type: 'Edm.Int32', nullable: false}, opciones: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Documentos.Plantilla"
  }, {
    name: 'ToDocumento',
    bound: true,
    composable: false,
    parameters: { tipo: {type: 'Edm.Int32', nullable: false}, numero: {type: 'Edm.Int32', nullable: false}, anio: {type: 'Edm.Int32', nullable: false}, opciones: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Documentos.Documento"
  }, {
    name: 'ToArchivo',
    bound: true,
    composable: false,
    parameters: { tipo: {type: 'Edm.Int32', nullable: false}, opciones: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Documentos.Archivo"
  }, {
    name: 'Finalizar',
    bound: true,
    composable: false,
    parameters: { observacion: {type: 'Edm.String'} },
    return: "SIU.Documentos.Documento"
  }, {
    name: 'Firmar',
    bound: true,
    composable: false,
    parameters: { firmanteId: {type: 'Edm.Int32', nullable: false}, firmante: {type: 'Edm.String'}, observacion: {type: 'Edm.String'} },
    return: "SIU.Documentos.Documento"
  }, {
    name: 'Presentar',
    bound: true,
    composable: false,
    parameters: { fecha: {type: 'Edm.DateTimeOffset', nullable: false}, destinatarioId: {type: 'Edm.Int32', nullable: false}, destinatario: {type: 'Edm.String'}, seguimiento: {type: 'Edm.String'}, observacion: {type: 'Edm.String'} },
    return: "SIU.Documentos.Documento"
  }, {
    name: 'Retirar',
    bound: true,
    composable: false,
    parameters: { fecha: {type: 'Edm.DateTimeOffset', nullable: false}, identificador: {type: 'Edm.String'}, observacion: {type: 'Edm.String'} },
    return: "SIU.Documentos.Documento"
  }, {
    name: 'Corregir',
    bound: true,
    composable: false,
    parameters: { observacion: {type: 'Edm.String'} },
    return: "SIU.Documentos.Documento"
  }, {
    name: 'Diligenciar',
    bound: true,
    composable: false,
    parameters: { fecha: {type: 'Edm.DateTimeOffset', nullable: false}, observacion: {type: 'Edm.String'} },
    return: "SIU.Documentos.Documento"
  }, {
    name: 'CrearIntervencionConRecursos',
    bound: true,
    composable: false,
    parameters: { info: {type: 'Edm.String'}, recursoIds: {type: 'Edm.Int32', collection: true, nullable: false}, requirenteId: {type: 'Edm.Int32'}, expedienteId: {type: 'Edm.Int32'} },
    return: "SIU.Tramites.Intervencion"
  }, {
    name: 'IdentificarRequirentes',
    bound: true,
    composable: false,
    parameters: { requirentesIds: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "Edm.Boolean"
  }, {
    name: 'CrearCaso',
    bound: true,
    composable: false,
    parameters: { oficinaId: {type: 'Edm.Int32', nullable: false}, requirenteId: {type: 'Edm.Int32', nullable: false}, expedienteId: {type: 'Edm.Int32'}, subMateriaId: {type: 'Edm.Int32'}, infoPublica: {type: 'Edm.String'}, infoOficina: {type: 'Edm.String'}, fechaInicioForm: {type: 'Edm.DateTimeOffset', nullable: false}, empleadosIds: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "SIU.Tramites.Caso"
  }, {
    name: 'CrearCasoConEspera',
    bound: true,
    composable: false,
    parameters: { oficinaId: {type: 'Edm.Int32', nullable: false}, requirenteId: {type: 'Edm.Int32', nullable: false}, infoPublica: {type: 'Edm.String'}, infoOficina: {type: 'Edm.String'}, fechaInicioForm: {type: 'Edm.DateTimeOffset', nullable: false}, empleadosIds: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "SIU.Tramites.Caso"
  }, {
    name: 'CrearCasoRelacionado',
    bound: true,
    composable: false,
    parameters: { categoriaCasoId: {type: 'Edm.Int32', nullable: false}, subMateriaId: {type: 'Edm.Int32', nullable: false}, observaciones: {type: 'Edm.String'}, empleadosIds: {type: 'Edm.Int32', collection: true, nullable: false}, etiquetasIds: {type: 'Edm.Int32', collection: true, nullable: false} },
    return: "SIU.Tramites.Caso"
  }, {
    name: 'CancelarAtencion',
    bound: true,
    composable: false,
  }, {
    name: 'FinalizarAtencion',
    bound: true,
    composable: false,
  }, {
    name: 'ModificarCategoria',
    bound: true,
    composable: false,
    parameters: { categoriaCasoId: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'ModificarEmpleados',
    bound: true,
    composable: false,
    parameters: { referenteId: {type: 'Edm.Int32'}, responsableId: {type: 'Edm.Int32'}, subResponsableId: {type: 'Edm.Int32'} },
  }, {
    name: 'CrearEscritoConDocumento',
    bound: true,
    composable: false,
    parameters: { firmanteId: {type: 'Edm.Int32', nullable: false}, recursoId: {type: 'Edm.Int32', nullable: false} },
    return: "SIU.Tramites.Escrito"
  }, {
    name: 'Insertar',
    bound: true,
    composable: false,
    parameters: { movimientoCaso: {type: 'SIU.Tramites.MovimientoCaso'}, vencimientosDestinatarios: {type: 'SIU.Tramites.VencimientosDestinatarios'} },
    return: "SIU.Tramites.MovimientoCaso"
  }, {
    name: 'Actualizar',
    bound: true,
    composable: false,
    parameters: { movimientoCaso: {type: 'SIU.Tramites.MovimientoCaso'}, vencimientosDestinatarios: {type: 'SIU.Tramites.VencimientosDestinatarios'} },
    return: "SIU.Tramites.MovimientoCaso"
  }, {
    name: 'Insertar',
    bound: true,
    composable: false,
    parameters: { audiencia: {type: 'SIU.Tramites.Audiencia'}, citaDestinatarios: {type: 'SIU.Tramites.CitaDestinatarios'} },
    return: "SIU.Tramites.Audiencia"
  }, {
    name: 'Actualizar',
    bound: true,
    composable: false,
    parameters: { audiencia: {type: 'SIU.Tramites.Audiencia'}, citaDestinatarios: {type: 'SIU.Tramites.CitaDestinatarios'} },
    return: "SIU.Tramites.Audiencia"
  }, {
    name: 'Insertar',
    bound: true,
    composable: false,
    parameters: { avenimiento: {type: 'SIU.Tramites.Avenimiento'}, destinatarios: {type: 'SIU.Tramites.RequirenteAvenimiento', collection: true} },
    return: "SIU.Tramites.Avenimiento"
  }, {
    name: 'Actualizar',
    bound: true,
    composable: false,
    parameters: { avenimiento: {type: 'SIU.Tramites.Avenimiento'}, destinatarios: {type: 'SIU.Tramites.RequirenteAvenimiento', collection: true} },
    return: "SIU.Tramites.Avenimiento"
  }, {
    name: 'Insertar',
    bound: true,
    composable: false,
    parameters: { citacion: {type: 'SIU.Tramites.Citacion'}, destinatarios: {type: 'SIU.Tramites.RequirenteCitacion', collection: true} },
    return: "SIU.Tramites.Citacion"
  }],
  containers: []
} as SchemaConfig;