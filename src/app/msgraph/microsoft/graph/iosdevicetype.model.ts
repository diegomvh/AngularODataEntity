import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosDeviceType } from './iosdevicetype.entity';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
//#endregion

export class IosDeviceTypeModel<E extends IosDeviceType> extends ODataModel<E> {
  //#region ODataApi Properties
  iPad: boolean;
  iPhoneAndIPod: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}