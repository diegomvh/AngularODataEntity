import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.complex';
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
//#endregion

export class ConditionalAccessSessionControlModel<E extends ConditionalAccessSessionControl> extends ODataModel<E> {
  //#region ODataApi Properties
  isEnabled?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}