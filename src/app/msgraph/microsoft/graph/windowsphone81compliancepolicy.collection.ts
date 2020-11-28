import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { WindowsPhone81CompliancePolicy } from './windowsphone81compliancepolicy.entity';
import { WindowsPhone81CompliancePolicyModel } from './windowsphone81compliancepolicy.model';
//#endregion

export class WindowsPhone81CompliancePolicyCollection<E extends WindowsPhone81CompliancePolicy, M extends WindowsPhone81CompliancePolicyModel<E>> extends DeviceCompliancePolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}