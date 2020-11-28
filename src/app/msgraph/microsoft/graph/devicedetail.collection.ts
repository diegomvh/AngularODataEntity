import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceDetail } from './devicedetail.entity';
import { DeviceDetailModel } from './devicedetail.model';
//#endregion

export class DeviceDetailCollection<E extends DeviceDetail, M extends DeviceDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}