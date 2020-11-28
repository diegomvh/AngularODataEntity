import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { MacOSCompliancePolicy } from './macoscompliancepolicy.entity';
import { MacOSCompliancePolicyModel } from './macoscompliancepolicy.model';
//#endregion

export class MacOSCompliancePolicyCollection<E extends MacOSCompliancePolicy, M extends MacOSCompliancePolicyModel<E>> extends DeviceCompliancePolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}