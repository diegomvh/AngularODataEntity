import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionCollection } from './windowsinformationprotection.collection';
import { WindowsInformationProtectionPinCharacterRequirements } from './windowsinformationprotectionpincharacterrequirements.enum';
import { WindowsInformationProtectionPolicy } from './windowsinformationprotectionpolicy.entity';
import { WindowsInformationProtectionPolicyModel } from './windowsinformationprotectionpolicy.model';
//#endregion

export class WindowsInformationProtectionPolicyCollection<E extends WindowsInformationProtectionPolicy, M extends WindowsInformationProtectionPolicyModel<E>> extends WindowsInformationProtectionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}