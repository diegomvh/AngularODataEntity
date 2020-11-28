import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerAppliedCategories } from './plannerappliedcategories.complex';
import { PlannerAppliedCategoriesCollection } from './plannerappliedcategories.collection';
//#endregion

export class PlannerAppliedCategoriesModel<E extends PlannerAppliedCategories> extends ODataModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}