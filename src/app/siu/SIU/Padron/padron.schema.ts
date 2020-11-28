import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { PadronConfig } from './padron.entity.config';
import { PadronLocalidadConfig } from './padronlocalidad.entity.config';
import { PadronDepartamentoConfig } from './padrondepartamento.entity.config';
//#endregion

export const PadronSchema = {
  namespace: "SIU.Padron",
  enums: [],
  entities: [PadronConfig,
    PadronLocalidadConfig,
    PadronDepartamentoConfig],
  callables: [],
  containers: []
} as SchemaConfig;