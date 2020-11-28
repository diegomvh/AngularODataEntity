import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ComplianceInformation } from './complianceinformation.complex';
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.complex';
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { ComplianceInformationModel } from './complianceinformation.model';
import { SecureScoreControlStateUpdateModel } from './securescorecontrolstateupdate.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { SecureScoreControlProfileModel } from './securescorecontrolprofile.model';
import { ComplianceInformationCollection } from './complianceinformation.collection';
import { SecureScoreControlStateUpdateCollection } from './securescorecontrolstateupdate.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
//#endregion

export class SecureScoreControlProfileCollection<E extends SecureScoreControlProfile, M extends SecureScoreControlProfileModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}