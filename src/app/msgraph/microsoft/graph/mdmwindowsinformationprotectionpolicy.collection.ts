import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionCollection } from './windowsinformationprotection.collection';
import { MdmWindowsInformationProtectionPolicy } from './mdmwindowsinformationprotectionpolicy.entity';
import { MdmWindowsInformationProtectionPolicyModel } from './mdmwindowsinformationprotectionpolicy.model';
//#endregion

export class MdmWindowsInformationProtectionPolicyCollection<E extends MdmWindowsInformationProtectionPolicy, M extends MdmWindowsInformationProtectionPolicyModel<E>> extends WindowsInformationProtectionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}