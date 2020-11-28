import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerAppliedCategories } from './plannerappliedcategories.entity';
import { PlannerAppliedCategoriesModel } from './plannerappliedcategories.model';
//#endregion

export class PlannerAppliedCategoriesCollection<E extends PlannerAppliedCategories, M extends PlannerAppliedCategoriesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}