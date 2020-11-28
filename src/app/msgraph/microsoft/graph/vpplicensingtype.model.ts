import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { VppLicensingType } from './vpplicensingtype.complex';
import { VppLicensingTypeCollection } from './vpplicensingtype.collection';
//#endregion

export class VppLicensingTypeModel<E extends VppLicensingType> extends ODataModel<E> {
  //#region ODataApi Properties
  supportsDeviceLicensing: boolean;
  supportsUserLicensing: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}