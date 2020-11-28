import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerPreviewType } from './plannerpreviewtype.enum';
//#endregion

export const PlannerPreviewTypeConfig = {
  name: "plannerPreviewType",
  members: PlannerPreviewType
} as EnumTypeConfig<PlannerPreviewType>;