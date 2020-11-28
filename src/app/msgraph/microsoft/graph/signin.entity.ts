import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConditionalAccessStatus } from './conditionalaccessstatus.enum';
import { RiskDetail } from './riskdetail.enum';
import { RiskEventType } from './riskeventtype.enum';
import { RiskLevel } from './risklevel.enum';
import { RiskState } from './riskstate.enum';
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.entity';
import { DeviceDetail } from './devicedetail.entity';
import { SignInLocation } from './signinlocation.entity';
import { SignInStatus } from './signinstatus.entity';
import { AppliedConditionalAccessPolicyModel } from './appliedconditionalaccesspolicy.model';
import { DeviceDetailModel } from './devicedetail.model';
import { SignInLocationModel } from './signinlocation.model';
import { SignInStatusModel } from './signinstatus.model';
import { EntityModel } from './entity.model';
import { AppliedConditionalAccessPolicyCollection } from './appliedconditionalaccesspolicy.collection';
import { DeviceDetailCollection } from './devicedetail.collection';
import { SignInLocationCollection } from './signinlocation.collection';
import { SignInStatusCollection } from './signinstatus.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SignIn extends Entity {
  //#region ODataApi Properties
  appDisplayName?: string;
  appId?: string;
  appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy[];
  clientAppUsed?: string;
  conditionalAccessStatus?: ConditionalAccessStatus;
  correlationId?: string;
  createdDateTime: Date;
  deviceDetail?: DeviceDetail;
  ipAddress?: string;
  isInteractive?: boolean;
  location?: SignInLocation;
  resourceDisplayName?: string;
  resourceId?: string;
  riskDetail?: RiskDetail;
  riskEventTypes?: RiskEventType;
  riskEventTypes_v2?: string[];
  riskLevelAggregated?: RiskLevel;
  riskLevelDuringSignIn?: RiskLevel;
  riskState?: RiskState;
  status?: SignInStatus;
  userDisplayName?: string;
  userId: string;
  userPrincipalName?: string;
  //#endregion
}