import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { AndroidWorkProfileCompliancePolicy } from './androidworkprofilecompliancepolicy.entity';
import { AndroidWorkProfileCompliancePolicyModel } from './androidworkprofilecompliancepolicy.model';
//#endregion

export class AndroidWorkProfileCompliancePolicyCollection<E extends AndroidWorkProfileCompliancePolicy, M extends AndroidWorkProfileCompliancePolicyModel<E>> extends DeviceCompliancePolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}