import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { Windows10CompliancePolicy } from './windows10compliancepolicy.entity';
import { Windows10CompliancePolicyModel } from './windows10compliancepolicy.model';
//#endregion

export class Windows10CompliancePolicyCollection<E extends Windows10CompliancePolicy, M extends Windows10CompliancePolicyModel<E>> extends DeviceCompliancePolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}