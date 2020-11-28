import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { PlannerChecklistItems } from './plannerchecklistitems.entity';
import { PlannerExternalReferences } from './plannerexternalreferences.entity';
import { PlannerChecklistItemsModel } from './plannerchecklistitems.model';
import { PlannerExternalReferencesModel } from './plannerexternalreferences.model';
import { EntityModel } from './entity.model';
import { PlannerChecklistItemsCollection } from './plannerchecklistitems.collection';
import { PlannerExternalReferencesCollection } from './plannerexternalreferences.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface PlannerTaskDetails extends Entity {
  //#region ODataApi Properties
  checklist?: PlannerChecklistItems;
  description?: string;
  previewType?: PlannerPreviewType;
  references?: PlannerExternalReferences;
  //#endregion
}