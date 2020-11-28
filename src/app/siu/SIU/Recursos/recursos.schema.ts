import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoOpcionesConfig } from './recursoopciones.enum.config';
import { RecursoPermisosConfig } from './recursopermisos.enum.config';
import { RecursoTipoEstadoConfig } from './recursotipoestado.enum.config';
import { RecursoTipoAccionConfig } from './recursotipoaccion.enum.config';
import { RecursoEntryConfig } from './recursoentry.entity.config';
import { RecursoEstadoMetadataConfig } from './recursoestadometadata.entity.config';
import { RecursoPreparadoMetadataConfig } from './recursopreparadometadata.entity.config';
import { RecursoCanceladoMetadataConfig } from './recursocanceladometadata.entity.config';
import { RecursoPresentadoMetadataConfig } from './recursopresentadometadata.entity.config';
import { RecursoChangeConfig } from './recursochange.entity.config';
import { RecursoDiligenciadoMetadataConfig } from './recursodiligenciadometadata.entity.config';
import { RecursoModificadoMetadataConfig } from './recursomodificadometadata.entity.config';
import { RecursoEditadoMetadataConfig } from './recursoeditadometadata.entity.config';
import { RecursoCreadoMetadataConfig } from './recursocreadometadata.entity.config';
import { RecursoMetadataConfig } from './recursometadata.entity.config';
import { RecursoSourceConfig } from './recursosource.entity.config';
import { RecursoConfig } from './recurso.entity.config';
import { RecursoUsuarioConfig } from './recursousuario.entity.config';
import { RecursoOficinaConfig } from './recursooficina.entity.config';
import { RecursoEstadoConfig } from './recursoestado.entity.config';
import { RecursoUserConfig } from './recursouser.entity.config';
//#endregion

export const RecursosSchema = {
  namespace: "SIU.Recursos",
  enums: [RecursoOpcionesConfig,
    RecursoPermisosConfig,
    RecursoTipoEstadoConfig,
    RecursoTipoAccionConfig],
  entities: [RecursoEntryConfig,
    RecursoEstadoMetadataConfig,
    RecursoPreparadoMetadataConfig,
    RecursoCanceladoMetadataConfig,
    RecursoPresentadoMetadataConfig,
    RecursoChangeConfig,
    RecursoDiligenciadoMetadataConfig,
    RecursoModificadoMetadataConfig,
    RecursoEditadoMetadataConfig,
    RecursoCreadoMetadataConfig,
    RecursoMetadataConfig,
    RecursoSourceConfig,
    RecursoConfig,
    RecursoUsuarioConfig,
    RecursoOficinaConfig,
    RecursoEstadoConfig,
    RecursoUserConfig],
  callables: [],
  containers: []
} as SchemaConfig;