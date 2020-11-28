import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessDevicePlatform } from './conditionalaccessdeviceplatform.enum';
import { ConditionalAccessPlatforms } from './conditionalaccessplatforms.complex';
import { ConditionalAccessPlatformsCollection } from './conditionalaccessplatforms.collection';
//#endregion

export class ConditionalAccessPlatformsModel<E extends ConditionalAccessPlatforms> extends ODataModel<E> {
  //#region ODataApi Properties
  excludePlatforms: ConditionalAccessDevicePlatform;
  includePlatforms: ConditionalAccessDevicePlatform;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}