import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.entity';
import { ApplicationEnforcedRestrictionsSessionControlModel } from './applicationenforcedrestrictionssessioncontrol.model';
//#endregion

export class ApplicationEnforcedRestrictionsSessionControlCollection<E extends ApplicationEnforcedRestrictionsSessionControl, M extends ApplicationEnforcedRestrictionsSessionControlModel<E>> extends ConditionalAccessSessionControlCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}