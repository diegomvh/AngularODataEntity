import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { PlannerChecklistItems } from './plannerchecklistitems.complex';
import { PlannerExternalReferences } from './plannerexternalreferences.complex';
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { PlannerChecklistItemsModel } from './plannerchecklistitems.model';
import { PlannerExternalReferencesModel } from './plannerexternalreferences.model';
import { PlannerChecklistItemsCollection } from './plannerchecklistitems.collection';
import { PlannerExternalReferencesCollection } from './plannerexternalreferences.collection';
import { PlannerTaskDetailsCollection } from './plannertaskdetails.collection';
//#endregion

export class PlannerTaskDetailsModel<E extends PlannerTaskDetails> extends EntityModel<E> {
  //#region ODataApi Properties
  checklist?: PlannerChecklistItemsModel<PlannerChecklistItems>;
  description?: string;
  previewType?: PlannerPreviewType;
  references?: PlannerExternalReferencesModel<PlannerExternalReferences>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}