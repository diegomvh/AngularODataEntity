import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { PlusSchema } from './SIU/Plus/plus.schema';
import { MetadatosSchema } from './SIU/Metadatos/metadatos.schema';
import { RecursosSchema } from './SIU/Recursos/recursos.schema';
import { DocumentosSchema } from './SIU/Documentos/documentos.schema';
import { BackendSchema } from './SIU/Api/Infrastructure/Storage/Backend/backend.schema';
import { LugaresSchema } from './SIU/Lugares/lugares.schema';
import { GestionSchema } from './SIU/Gestion/gestion.schema';
import { PersonasSchema } from './SIU/Personas/personas.schema';
import { TramitesSchema } from './SIU/Tramites/tramites.schema';
import { PadronSchema } from './SIU/Padron/padron.schema';
import { AgendaSchema } from './SIU/Agenda/agenda.schema';
import { SecuritySchema } from './SIU/Security/security.schema';
import { OnlyofficeSchema } from './SIU/Onlyoffice/onlyoffice.schema';
import { InfrastructureSchema } from './SIU/Api/Infrastructure/infrastructure.schema';
import { TypesSchema } from './SIU/Utilities/Types/types.schema';
import { HelpersSchema } from './SIU/OpenXml/Helpers/helpers.schema';
import { SIUSchema } from './SIU/siu.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

export const SiuConfig = {
  name: 'Siu',
  serviceRootUrl: 'http://nb-mdp-dev01:57970/',
  version: '4.0',
  creation: new Date('2020-09-10T09:19:03.9439550-03:00'),
  schemas: [
    PlusSchema,
    MetadatosSchema,
    RecursosSchema,
    DocumentosSchema,
    BackendSchema,
    LugaresSchema,
    GestionSchema,
    PersonasSchema,
    TramitesSchema,
    PadronSchema,
    AgendaSchema,
    SecuritySchema,
    OnlyofficeSchema,
    InfrastructureSchema,
    TypesSchema,
    HelpersSchema,
    SIUSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;