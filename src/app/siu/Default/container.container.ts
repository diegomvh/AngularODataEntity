import { ContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditentriesServiceConfig } from './auditentries.service.config';
import { AuditpropertiesServiceConfig } from './auditproperties.service.config';
import { CategoriasServiceConfig } from './categorias.service.config';
import { EtiquetasServiceConfig } from './etiquetas.service.config';
import { RecursosServiceConfig } from './recursos.service.config';
import { PlantillasServiceConfig } from './plantillas.service.config';
import { DocumentosServiceConfig } from './documentos.service.config';
import { ArchivosServiceConfig } from './archivos.service.config';
import { RecursosUsuariosServiceConfig } from './recursosusuarios.service.config';
import { RecursosOficinasServiceConfig } from './recursosoficinas.service.config';
import { CircunscripcionesServiceConfig } from './circunscripciones.service.config';
import { FiscaliasServiceConfig } from './fiscalias.service.config';
import { OficinasServiceConfig } from './oficinas.service.config';
import { JuzgadosServiceConfig } from './juzgados.service.config';
import { SecretariasServiceConfig } from './secretarias.service.config';
import { InstitucionesServiceConfig } from './instituciones.service.config';
import { LugaresDetencionServiceConfig } from './lugaresdetencion.service.config';
import { LocalidadesServiceConfig } from './localidades.service.config';
import { ProvinciasServiceConfig } from './provincias.service.config';
import { TodosServiceConfig } from './todos.service.config';
import { TestsServiceConfig } from './tests.service.config';
import { RequirentesServiceConfig } from './requirentes.service.config';
import { EmpleadosServiceConfig } from './empleados.service.config';
import { UsuariosServiceConfig } from './usuarios.service.config';
import { AsesoresServiceConfig } from './asesores.service.config';
import { FiscalesServiceConfig } from './fiscales.service.config';
import { CasosServiceConfig } from './casos.service.config';
import { CalidadesRequirenteServiceConfig } from './calidadesrequirente.service.config';
import { DeclaracionesJuradasServiceConfig } from './declaracionesjuradas.service.config';
import { RequirentesEnEsperaServiceConfig } from './requirentesenespera.service.config';
import { RequirentesOficinasServiceConfig } from './requirentesoficinas.service.config';
import { RequirentesCasosServiceConfig } from './requirentescasos.service.config';
import { RequirentesNotasAvenimientoServiceConfig } from './requirentesnotasavenimiento.service.config';
import { EmpleadosCasosServiceConfig } from './empleadoscasos.service.config';
import { RequirentesExpedientesServiceConfig } from './requirentesexpedientes.service.config';
import { PadronServiceConfig } from './padron.service.config';
import { PadronLocalidadesServiceConfig } from './padronlocalidades.service.config';
import { PadronDepartamentosServiceConfig } from './padrondepartamentos.service.config';
import { EstadosCivilesServiceConfig } from './estadosciviles.service.config';
import { TiposIdentificacionServiceConfig } from './tiposidentificacion.service.config';
import { NacionalidadesServiceConfig } from './nacionalidades.service.config';
import { AcumulacionesCarpetaServiceConfig } from './acumulacionescarpeta.service.config';
import { IntervencionesServiceConfig } from './intervenciones.service.config';
import { CasosPenalesServiceConfig } from './casospenales.service.config';
import { ExpedientesServiceConfig } from './expedientes.service.config';
import { EscritosServiceConfig } from './escritos.service.config';
import { EstadosExpedienteServiceConfig } from './estadosexpediente.service.config';
import { CasosJudiciablesServiceConfig } from './casosjudiciables.service.config';
import { CategoriasCasoServiceConfig } from './categoriascaso.service.config';
import { CategoriasExpedienteServiceConfig } from './categoriasexpediente.service.config';
import { MovimientosCasoServiceConfig } from './movimientoscaso.service.config';
import { AudienciasServiceConfig } from './audiencias.service.config';
import { DetencionesServiceConfig } from './detenciones.service.config';
import { EstadosAudienciaServiceConfig } from './estadosaudiencia.service.config';
import { AvenimientosServiceConfig } from './avenimientos.service.config';
import { NotasAvenimientoServiceConfig } from './notasavenimiento.service.config';
import { CitasServiceConfig } from './citas.service.config';
import { TemasCitaServiceConfig } from './temascita.service.config';
import { CitacionesServiceConfig } from './citaciones.service.config';
import { MateriasServiceConfig } from './materias.service.config';
import { SubMateriasServiceConfig } from './submaterias.service.config';
import { EstadosRequirenteCasoServiceConfig } from './estadosrequirentecaso.service.config';
import { RolesRequirenteExpedienteServiceConfig } from './rolesrequirenteexpediente.service.config';
import { SubRolesRequirenteExpedienteServiceConfig } from './subrolesrequirenteexpediente.service.config';
import { MeServiceConfig } from './me.service.config';
//#endregion

export const ContainerContainer = {
  name: "Container",
  annotations: [],
  services: [
    AuditentriesServiceConfig,
    AuditpropertiesServiceConfig,
    CategoriasServiceConfig,
    EtiquetasServiceConfig,
    RecursosServiceConfig,
    PlantillasServiceConfig,
    DocumentosServiceConfig,
    ArchivosServiceConfig,
    RecursosUsuariosServiceConfig,
    RecursosOficinasServiceConfig,
    CircunscripcionesServiceConfig,
    FiscaliasServiceConfig,
    OficinasServiceConfig,
    JuzgadosServiceConfig,
    SecretariasServiceConfig,
    InstitucionesServiceConfig,
    LugaresDetencionServiceConfig,
    LocalidadesServiceConfig,
    ProvinciasServiceConfig,
    TodosServiceConfig,
    TestsServiceConfig,
    RequirentesServiceConfig,
    EmpleadosServiceConfig,
    UsuariosServiceConfig,
    AsesoresServiceConfig,
    FiscalesServiceConfig,
    CasosServiceConfig,
    CalidadesRequirenteServiceConfig,
    DeclaracionesJuradasServiceConfig,
    RequirentesEnEsperaServiceConfig,
    RequirentesOficinasServiceConfig,
    RequirentesCasosServiceConfig,
    RequirentesNotasAvenimientoServiceConfig,
    EmpleadosCasosServiceConfig,
    RequirentesExpedientesServiceConfig,
    PadronServiceConfig,
    PadronLocalidadesServiceConfig,
    PadronDepartamentosServiceConfig,
    EstadosCivilesServiceConfig,
    TiposIdentificacionServiceConfig,
    NacionalidadesServiceConfig,
    AcumulacionesCarpetaServiceConfig,
    IntervencionesServiceConfig,
    CasosPenalesServiceConfig,
    ExpedientesServiceConfig,
    EscritosServiceConfig,
    EstadosExpedienteServiceConfig,
    CasosJudiciablesServiceConfig,
    CategoriasCasoServiceConfig,
    CategoriasExpedienteServiceConfig,
    MovimientosCasoServiceConfig,
    AudienciasServiceConfig,
    DetencionesServiceConfig,
    EstadosAudienciaServiceConfig,
    AvenimientosServiceConfig,
    NotasAvenimientoServiceConfig,
    CitasServiceConfig,
    TemasCitaServiceConfig,
    CitacionesServiceConfig,
    MateriasServiceConfig,
    SubMateriasServiceConfig,
    EstadosRequirenteCasoServiceConfig,
    RolesRequirenteExpedienteServiceConfig,
    SubRolesRequirenteExpedienteServiceConfig,
    MeServiceConfig
  ]
} as ContainerConfig;