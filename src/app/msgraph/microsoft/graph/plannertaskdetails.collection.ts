import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { PlannerChecklistItems } from './plannerchecklistitems.complex';
import { PlannerExternalReferences } from './plannerexternalreferences.complex';
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { PlannerChecklistItemsModel } from './plannerchecklistitems.model';
import { PlannerExternalReferencesModel } from './plannerexternalreferences.model';
import { PlannerTaskDetailsModel } from './plannertaskdetails.model';
import { PlannerChecklistItemsCollection } from './plannerchecklistitems.collection';
import { PlannerExternalReferencesCollection } from './plannerexternalreferences.collection';
//#endregion

export class PlannerTaskDetailsCollection<E extends PlannerTaskDetails, M extends PlannerTaskDetailsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}