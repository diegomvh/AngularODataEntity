import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceCategory } from './devicecategory.entity';
import { DeviceCategoryCollection } from './devicecategory.collection';
//#endregion

export class DeviceCategoryModel<E extends DeviceCategory> extends EntityModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}