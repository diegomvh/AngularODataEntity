import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
import { SigninFrequencyType } from './signinfrequencytype.enum';
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.entity';
import { SignInFrequencySessionControlModel } from './signinfrequencysessioncontrol.model';
//#endregion

export class SignInFrequencySessionControlCollection<E extends SignInFrequencySessionControl, M extends SignInFrequencySessionControlModel<E>> extends ConditionalAccessSessionControlCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}