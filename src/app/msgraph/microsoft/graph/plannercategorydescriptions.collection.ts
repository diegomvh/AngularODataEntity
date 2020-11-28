import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.complex';
import { PlannerCategoryDescriptionsModel } from './plannercategorydescriptions.model';
//#endregion

export class PlannerCategoryDescriptionsCollection<E extends PlannerCategoryDescriptions, M extends PlannerCategoryDescriptionsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}