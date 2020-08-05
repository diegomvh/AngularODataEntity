import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerPreviewType } from './plannerpreviewtype.enum';
//#endregion

export const PlannerPreviewTypeConfig = {
  name: "PlannerPreviewType",
  members: PlannerPreviewType
} as EnumConfig<PlannerPreviewType>;