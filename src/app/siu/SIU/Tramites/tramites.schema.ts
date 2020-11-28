import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { IntervencionTiposConfig } from './intervenciontipos.enum.config';
import { CasoPenalReporteConfig } from './casopenalreporte.entity.config';
import { MovimientoCasoConAgendadoConfig } from './movimientocasoconagendado.entity.config';
import { VencimientosDestinatariosConfig } from './vencimientosdestinatarios.entity.config';
import { AudienciaConAgendadoConfig } from './audienciaconagendado.entity.config';
import { CitaDestinatariosConfig } from './citadestinatarios.entity.config';
import { CitacionConParticipanteConfig } from './citacionconparticipante.entity.config';
import { VencimientoDestinatarioConfig } from './vencimientodestinatario.entity.config';
import { CasoConfig } from './caso.entity.config';
import { RequirenteCasoConfig } from './requirentecaso.entity.config';
import { RequirenteNotaAvenimientoConfig } from './requirentenotaavenimiento.entity.config';
import { EmpleadoCasoConfig } from './empleadocaso.entity.config';
import { RequirenteExpedienteConfig } from './requirenteexpediente.entity.config';
import { AcumulacionCarpetaConfig } from './acumulacioncarpeta.entity.config';
import { IntervencionConfig } from './intervencion.entity.config';
import { CasoPenalConfig } from './casopenal.entity.config';
import { ExpedienteConfig } from './expediente.entity.config';
import { EscritoConfig } from './escrito.entity.config';
import { EstadoExpedienteConfig } from './estadoexpediente.entity.config';
import { CasoJudiciableConfig } from './casojudiciable.entity.config';
import { CategoriaCasoConfig } from './categoriacaso.entity.config';
import { CategoriaExpedienteConfig } from './categoriaexpediente.entity.config';
import { MovimientoCasoConfig } from './movimientocaso.entity.config';
import { AudienciaConfig } from './audiencia.entity.config';
import { DetencionConfig } from './detencion.entity.config';
import { EstadoAudienciaConfig } from './estadoaudiencia.entity.config';
import { AvenimientoConfig } from './avenimiento.entity.config';
import { RequirenteAvenimientoConfig } from './requirenteavenimiento.entity.config';
import { NotaAvenimientoConfig } from './notaavenimiento.entity.config';
import { CitacionConfig } from './citacion.entity.config';
import { RequirenteCitacionConfig } from './requirentecitacion.entity.config';
import { MateriaConfig } from './materia.entity.config';
import { SubMateriaConfig } from './submateria.entity.config';
import { EstadoRequirenteCasoConfig } from './estadorequirentecaso.entity.config';
import { RolRequirenteExpedienteConfig } from './rolrequirenteexpediente.entity.config';
import { SubRolRequirenteExpedienteConfig } from './subrolrequirenteexpediente.entity.config';
import { MovimientoExpedienteConfig } from './movimientoexpediente.entity.config';
import { RolRequirenteConfig } from './rolrequirente.entity.config';
import { HistoricoSubmateriaConfig } from './historicosubmateria.entity.config';
import { CategoriaCasoCasoConfig } from './categoriacasocaso.entity.config';
import { MotivoCambioCategoriaConfig } from './motivocambiocategoria.entity.config';
import { MotivoCambioResponsableConfig } from './motivocambioresponsable.entity.config';
import { HistoricoResponsableConfig } from './historicoresponsable.entity.config';
import { HistoricoAbogadoPersonaConfig } from './historicoabogadopersona.entity.config';
import { DestinatarioCitaConfig } from './destinatariocita.entity.config';
//#endregion

export const TramitesSchema = {
  namespace: "SIU.Tramites",
  enums: [IntervencionTiposConfig],
  entities: [CasoPenalReporteConfig,
    MovimientoCasoConAgendadoConfig,
    VencimientosDestinatariosConfig,
    AudienciaConAgendadoConfig,
    CitaDestinatariosConfig,
    CitacionConParticipanteConfig,
    VencimientoDestinatarioConfig,
    CasoConfig,
    RequirenteCasoConfig,
    RequirenteNotaAvenimientoConfig,
    EmpleadoCasoConfig,
    RequirenteExpedienteConfig,
    AcumulacionCarpetaConfig,
    IntervencionConfig,
    CasoPenalConfig,
    ExpedienteConfig,
    EscritoConfig,
    EstadoExpedienteConfig,
    CasoJudiciableConfig,
    CategoriaCasoConfig,
    CategoriaExpedienteConfig,
    MovimientoCasoConfig,
    AudienciaConfig,
    DetencionConfig,
    EstadoAudienciaConfig,
    AvenimientoConfig,
    RequirenteAvenimientoConfig,
    NotaAvenimientoConfig,
    CitacionConfig,
    RequirenteCitacionConfig,
    MateriaConfig,
    SubMateriaConfig,
    EstadoRequirenteCasoConfig,
    RolRequirenteExpedienteConfig,
    SubRolRequirenteExpedienteConfig,
    MovimientoExpedienteConfig,
    RolRequirenteConfig,
    HistoricoSubmateriaConfig,
    CategoriaCasoCasoConfig,
    MotivoCambioCategoriaConfig,
    MotivoCambioResponsableConfig,
    HistoricoResponsableConfig,
    HistoricoAbogadoPersonaConfig,
    DestinatarioCitaConfig],
  callables: [],
  containers: []
} as SchemaConfig;