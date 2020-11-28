import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { SigninFrequencyType } from './signinfrequencytype.enum';
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.complex';
import { SignInFrequencySessionControlCollection } from './signinfrequencysessioncontrol.collection';
//#endregion

export class SignInFrequencySessionControlModel<E extends SignInFrequencySessionControl> extends ConditionalAccessSessionControlModel<E> {
  //#region ODataApi Properties
  type?: SigninFrequencyType;
  value?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}