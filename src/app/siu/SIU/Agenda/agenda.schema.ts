import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { CitaNotificacionConfig } from './citanotificacion.entity.config';
import { CitaConfig } from './cita.entity.config';
import { TemaCitaConfig } from './temacita.entity.config';
//#endregion

export const AgendaSchema = {
  namespace: "SIU.Agenda",
  enums: [],
  entities: [CitaNotificacionConfig,
    CitaConfig,
    TemaCitaConfig],
  callables: [],
  containers: []
} as SchemaConfig;