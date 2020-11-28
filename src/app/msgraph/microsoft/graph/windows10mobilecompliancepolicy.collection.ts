import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { Windows10MobileCompliancePolicy } from './windows10mobilecompliancepolicy.entity';
import { Windows10MobileCompliancePolicyModel } from './windows10mobilecompliancepolicy.model';
//#endregion

export class Windows10MobileCompliancePolicyCollection<E extends Windows10MobileCompliancePolicy, M extends Windows10MobileCompliancePolicyModel<E>> extends DeviceCompliancePolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}