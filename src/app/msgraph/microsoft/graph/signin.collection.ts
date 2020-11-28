import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ConditionalAccessStatus } from './conditionalaccessstatus.enum';
import { RiskDetail } from './riskdetail.enum';
import { RiskEventType } from './riskeventtype.enum';
import { RiskLevel } from './risklevel.enum';
import { RiskState } from './riskstate.enum';
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.complex';
import { DeviceDetail } from './devicedetail.complex';
import { SignInLocation } from './signinlocation.complex';
import { SignInStatus } from './signinstatus.complex';
import { SignIn } from './signin.entity';
import { AppliedConditionalAccessPolicyModel } from './appliedconditionalaccesspolicy.model';
import { DeviceDetailModel } from './devicedetail.model';
import { SignInLocationModel } from './signinlocation.model';
import { SignInStatusModel } from './signinstatus.model';
import { SignInModel } from './signin.model';
import { AppliedConditionalAccessPolicyCollection } from './appliedconditionalaccesspolicy.collection';
import { DeviceDetailCollection } from './devicedetail.collection';
import { SignInLocationCollection } from './signinlocation.collection';
import { SignInStatusCollection } from './signinstatus.collection';
//#endregion

export class SignInCollection<E extends SignIn, M extends SignInModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}