import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ConditionalAccessPolicyState } from './conditionalaccesspolicystate.enum';
import { ConditionalAccessConditionSet } from './conditionalaccessconditionset.entity';
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.entity';
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { ConditionalAccessConditionSetModel } from './conditionalaccessconditionset.model';
import { ConditionalAccessGrantControlsModel } from './conditionalaccessgrantcontrols.model';
import { ConditionalAccessSessionControlsModel } from './conditionalaccesssessioncontrols.model';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { ConditionalAccessConditionSetCollection } from './conditionalaccessconditionset.collection';
import { ConditionalAccessGrantControlsCollection } from './conditionalaccessgrantcontrols.collection';
import { ConditionalAccessSessionControlsCollection } from './conditionalaccesssessioncontrols.collection';
//#endregion

export class ConditionalAccessPolicyCollection<E extends ConditionalAccessPolicy, M extends ConditionalAccessPolicyModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}