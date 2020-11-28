import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { CloudAppSecuritySessionControlType } from './cloudappsecuritysessioncontroltype.enum';
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.complex';
import { CloudAppSecuritySessionControlCollection } from './cloudappsecuritysessioncontrol.collection';
//#endregion

export class CloudAppSecuritySessionControlModel<E extends CloudAppSecuritySessionControl> extends ConditionalAccessSessionControlModel<E> {
  //#region ODataApi Properties
  cloudAppSecurityType?: CloudAppSecuritySessionControlType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}