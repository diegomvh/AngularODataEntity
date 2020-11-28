import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.complex';
import { PlannerCategoryDescriptionsCollection } from './plannercategorydescriptions.collection';
//#endregion

export class PlannerCategoryDescriptionsModel<E extends PlannerCategoryDescriptions> extends ODataModel<E> {
  //#region ODataApi Properties
  category1?: string;
  category2?: string;
  category3?: string;
  category4?: string;
  category5?: string;
  category6?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}