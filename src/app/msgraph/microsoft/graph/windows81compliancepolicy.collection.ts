import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { Windows81CompliancePolicy } from './windows81compliancepolicy.entity';
import { Windows81CompliancePolicyModel } from './windows81compliancepolicy.model';
//#endregion

export class Windows81CompliancePolicyCollection<E extends Windows81CompliancePolicy, M extends Windows81CompliancePolicyModel<E>> extends DeviceCompliancePolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}