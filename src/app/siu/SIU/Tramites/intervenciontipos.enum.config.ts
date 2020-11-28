import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { IntervencionTipos } from './intervenciontipos.enum';
//#endregion

export const IntervencionTiposConfig = {
  name: "IntervencionTipos",
  flags: true,
  members: IntervencionTipos
} as EnumConfig<IntervencionTipos>;