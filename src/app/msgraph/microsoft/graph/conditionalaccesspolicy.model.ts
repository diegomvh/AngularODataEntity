import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ConditionalAccessPolicyState } from './conditionalaccesspolicystate.enum';
import { ConditionalAccessConditionSet } from './conditionalaccessconditionset.complex';
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.complex';
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.complex';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { ConditionalAccessConditionSetModel } from './conditionalaccessconditionset.model';
import { ConditionalAccessGrantControlsModel } from './conditionalaccessgrantcontrols.model';
import { ConditionalAccessSessionControlsModel } from './conditionalaccesssessioncontrols.model';
import { ConditionalAccessConditionSetCollection } from './conditionalaccessconditionset.collection';
import { ConditionalAccessGrantControlsCollection } from './conditionalaccessgrantcontrols.collection';
import { ConditionalAccessSessionControlsCollection } from './conditionalaccesssessioncontrols.collection';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
//#endregion

export class ConditionalAccessPolicyModel<E extends ConditionalAccessPolicy> extends EntityModel<E> {
  //#region ODataApi Properties
  conditions: ConditionalAccessConditionSetModel<ConditionalAccessConditionSet>;
  createdDateTime?: Date;
  description?: string;
  displayName: string;
  grantControls?: ConditionalAccessGrantControlsModel<ConditionalAccessGrantControls>;
  modifiedDateTime?: Date;
  sessionControls?: ConditionalAccessSessionControlsModel<ConditionalAccessSessionControls>;
  state: ConditionalAccessPolicyState;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}