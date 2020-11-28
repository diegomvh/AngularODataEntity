import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ConditionalAccessStatus } from './conditionalaccessstatus.enum';
import { RiskDetail } from './riskdetail.enum';
import { RiskEventType } from './riskeventtype.enum';
import { RiskLevel } from './risklevel.enum';
import { RiskState } from './riskstate.enum';
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.entity';
import { DeviceDetail } from './devicedetail.entity';
import { SignInLocation } from './signinlocation.entity';
import { SignInStatus } from './signinstatus.entity';
import { SignIn } from './signin.entity';
import { AppliedConditionalAccessPolicyModel } from './appliedconditionalaccesspolicy.model';
import { DeviceDetailModel } from './devicedetail.model';
import { SignInLocationModel } from './signinlocation.model';
import { SignInStatusModel } from './signinstatus.model';
import { AppliedConditionalAccessPolicyCollection } from './appliedconditionalaccesspolicy.collection';
import { DeviceDetailCollection } from './devicedetail.collection';
import { SignInLocationCollection } from './signinlocation.collection';
import { SignInStatusCollection } from './signinstatus.collection';
import { SignInCollection } from './signin.collection';
//#endregion

export class SignInModel<E extends SignIn> extends EntityModel<E> {
  //#region ODataApi Properties
  appDisplayName?: string;
  appId?: string;
  appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicyCollection<AppliedConditionalAccessPolicy, AppliedConditionalAccessPolicyModel<AppliedConditionalAccessPolicy>>;
  clientAppUsed?: string;
  conditionalAccessStatus?: ConditionalAccessStatus;
  correlationId?: string;
  createdDateTime: Date;
  deviceDetail?: DeviceDetailModel<DeviceDetail>;
  ipAddress?: string;
  isInteractive?: boolean;
  location?: SignInLocationModel<SignInLocation>;
  resourceDisplayName?: string;
  resourceId?: string;
  riskDetail?: RiskDetail;
  riskEventTypes?: RiskEventType;
  riskEventTypes_v2?: string[];
  riskLevelAggregated?: RiskLevel;
  riskLevelDuringSignIn?: RiskLevel;
  riskState?: RiskState;
  status?: SignInStatusModel<SignInStatus>;
  userDisplayName?: string;
  userId: string;
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}