import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingStringXml } from './omasettingstringxml.complex';
import { OmaSettingStringXmlCollection } from './omasettingstringxml.collection';
//#endregion

export class OmaSettingStringXmlModel<E extends OmaSettingStringXml> extends OmaSettingModel<E> {
  //#region ODataApi Properties
  fileName?: string;
  value: ArrayBuffer;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}