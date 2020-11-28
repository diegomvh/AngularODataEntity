import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceDetail } from './devicedetail.entity';
import { DeviceDetailCollection } from './devicedetail.collection';
//#endregion

export class DeviceDetailModel<E extends DeviceDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  browser?: string;
  deviceId?: string;
  displayName?: string;
  isCompliant?: boolean;
  isManaged?: boolean;
  operatingSystem?: string;
  trustType?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}