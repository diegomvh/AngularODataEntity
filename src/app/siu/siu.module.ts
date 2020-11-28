import { NgModule } from '@angular/core';

//#region ODataApi Imports
import { ContainerService } from './Default/container.service';
import { AuditentriesService } from './Default/auditentries.service';
import { AuditpropertiesService } from './Default/auditproperties.service';
import { CategoriasService } from './Default/categorias.service';
import { EtiquetasService } from './Default/etiquetas.service';
import { RecursosService } from './Default/recursos.service';
import { PlantillasService } from './Default/plantillas.service';
import { DocumentosService } from './Default/documentos.service';
import { ArchivosService } from './Default/archivos.service';
import { RecursosUsuariosService } from './Default/recursosusuarios.service';
import { RecursosOficinasService } from './Default/recursosoficinas.service';
import { CircunscripcionesService } from './Default/circunscripciones.service';
import { FiscaliasService } from './Default/fiscalias.service';
import { OficinasService } from './Default/oficinas.service';
import { JuzgadosService } from './Default/juzgados.service';
import { SecretariasService } from './Default/secretarias.service';
import { InstitucionesService } from './Default/instituciones.service';
import { LugaresDetencionService } from './Default/lugaresdetencion.service';
import { LocalidadesService } from './Default/localidades.service';
import { ProvinciasService } from './Default/provincias.service';
import { TodosService } from './Default/todos.service';
import { TestsService } from './Default/tests.service';
import { RequirentesService } from './Default/requirentes.service';
import { EmpleadosService } from './Default/empleados.service';
import { UsuariosService } from './Default/usuarios.service';
import { AsesoresService } from './Default/asesores.service';
import { FiscalesService } from './Default/fiscales.service';
import { CasosService } from './Default/casos.service';
import { CalidadesRequirenteService } from './Default/calidadesrequirente.service';
import { DeclaracionesJuradasService } from './Default/declaracionesjuradas.service';
import { RequirentesEnEsperaService } from './Default/requirentesenespera.service';
import { RequirentesOficinasService } from './Default/requirentesoficinas.service';
import { RequirentesCasosService } from './Default/requirentescasos.service';
import { RequirentesNotasAvenimientoService } from './Default/requirentesnotasavenimiento.service';
import { EmpleadosCasosService } from './Default/empleadoscasos.service';
import { RequirentesExpedientesService } from './Default/requirentesexpedientes.service';
import { PadronService } from './Default/padron.service';
import { PadronLocalidadesService } from './Default/padronlocalidades.service';
import { PadronDepartamentosService } from './Default/padrondepartamentos.service';
import { EstadosCivilesService } from './Default/estadosciviles.service';
import { TiposIdentificacionService } from './Default/tiposidentificacion.service';
import { NacionalidadesService } from './Default/nacionalidades.service';
import { AcumulacionesCarpetaService } from './Default/acumulacionescarpeta.service';
import { IntervencionesService } from './Default/intervenciones.service';
import { CasosPenalesService } from './Default/casospenales.service';
import { ExpedientesService } from './Default/expedientes.service';
import { EscritosService } from './Default/escritos.service';
import { EstadosExpedienteService } from './Default/estadosexpediente.service';
import { CasosJudiciablesService } from './Default/casosjudiciables.service';
import { CategoriasCasoService } from './Default/categoriascaso.service';
import { CategoriasExpedienteService } from './Default/categoriasexpediente.service';
import { MovimientosCasoService } from './Default/movimientoscaso.service';
import { AudienciasService } from './Default/audiencias.service';
import { DetencionesService } from './Default/detenciones.service';
import { EstadosAudienciaService } from './Default/estadosaudiencia.service';
import { AvenimientosService } from './Default/avenimientos.service';
import { NotasAvenimientoService } from './Default/notasavenimiento.service';
import { CitasService } from './Default/citas.service';
import { TemasCitaService } from './Default/temascita.service';
import { CitacionesService } from './Default/citaciones.service';
import { MateriasService } from './Default/materias.service';
import { SubMateriasService } from './Default/submaterias.service';
import { EstadosRequirenteCasoService } from './Default/estadosrequirentecaso.service';
import { RolesRequirenteExpedienteService } from './Default/rolesrequirenteexpediente.service';
import { SubRolesRequirenteExpedienteService } from './Default/subrolesrequirenteexpediente.service';
import { MeService } from './Default/me.service';
//#endregion

@NgModule({
  providers: [
    ContainerService,
    AuditentriesService,
    AuditpropertiesService,
    CategoriasService,
    EtiquetasService,
    RecursosService,
    PlantillasService,
    DocumentosService,
    ArchivosService,
    RecursosUsuariosService,
    RecursosOficinasService,
    CircunscripcionesService,
    FiscaliasService,
    OficinasService,
    JuzgadosService,
    SecretariasService,
    InstitucionesService,
    LugaresDetencionService,
    LocalidadesService,
    ProvinciasService,
    TodosService,
    TestsService,
    RequirentesService,
    EmpleadosService,
    UsuariosService,
    AsesoresService,
    FiscalesService,
    CasosService,
    CalidadesRequirenteService,
    DeclaracionesJuradasService,
    RequirentesEnEsperaService,
    RequirentesOficinasService,
    RequirentesCasosService,
    RequirentesNotasAvenimientoService,
    EmpleadosCasosService,
    RequirentesExpedientesService,
    PadronService,
    PadronLocalidadesService,
    PadronDepartamentosService,
    EstadosCivilesService,
    TiposIdentificacionService,
    NacionalidadesService,
    AcumulacionesCarpetaService,
    IntervencionesService,
    CasosPenalesService,
    ExpedientesService,
    EscritosService,
    EstadosExpedienteService,
    CasosJudiciablesService,
    CategoriasCasoService,
    CategoriasExpedienteService,
    MovimientosCasoService,
    AudienciasService,
    DetencionesService,
    EstadosAudienciaService,
    AvenimientosService,
    NotasAvenimientoService,
    CitasService,
    TemasCitaService,
    CitacionesService,
    MateriasService,
    SubMateriasService,
    EstadosRequirenteCasoService,
    RolesRequirenteExpedienteService,
    SubRolesRequirenteExpedienteService,
    MeService
  ]
})
export class SiuModule { }