import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MobileAppCategory } from './mobileappcategory.entity';
import { MobileAppCategoryCollection } from './mobileappcategory.collection';
//#endregion

export class MobileAppCategoryModel<E extends MobileAppCategory> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  lastModifiedDateTime: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}