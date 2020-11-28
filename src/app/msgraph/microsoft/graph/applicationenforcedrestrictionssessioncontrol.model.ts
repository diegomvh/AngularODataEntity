import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.entity';
import { ApplicationEnforcedRestrictionsSessionControlCollection } from './applicationenforcedrestrictionssessioncontrol.collection';
//#endregion

export class ApplicationEnforcedRestrictionsSessionControlModel<E extends ApplicationEnforcedRestrictionsSessionControl> extends ConditionalAccessSessionControlModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}