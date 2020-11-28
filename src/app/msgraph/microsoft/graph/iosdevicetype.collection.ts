import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosDeviceType } from './iosdevicetype.complex';
import { IosDeviceTypeModel } from './iosdevicetype.model';
//#endregion

export class IosDeviceTypeCollection<E extends IosDeviceType, M extends IosDeviceTypeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}