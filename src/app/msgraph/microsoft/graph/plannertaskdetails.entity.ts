import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { PlannerExternalReferences } from './plannerexternalreferences.entity';
import { PlannerChecklistItems } from './plannerchecklistitems.entity';
//#endregion

export interface PlannerTaskDetails extends Entity {
  //#region ODataApi Properties
  description?: string;
  previewType?: PlannerPreviewType;
  references?: PlannerExternalReferences;
  checklist?: PlannerChecklistItems;
  //#endregion
}