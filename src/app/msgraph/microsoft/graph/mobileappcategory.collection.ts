import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MobileAppCategory } from './mobileappcategory.entity';
import { MobileAppCategoryModel } from './mobileappcategory.model';
//#endregion

export class MobileAppCategoryCollection<E extends MobileAppCategory, M extends MobileAppCategoryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}