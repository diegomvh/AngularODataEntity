import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { MdmAuthority } from './mdmauthority.enum';
import { AssignedPlan } from './assignedplan.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { PrivacyProfile } from './privacyprofile.complex';
import { VerifiedDomain } from './verifieddomain.complex';
import { Extension } from './extension.entity';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { Organization } from './organization.entity';
import { AssignedPlanModel } from './assignedplan.model';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { PrivacyProfileModel } from './privacyprofile.model';
import { VerifiedDomainModel } from './verifieddomain.model';
import { ExtensionModel } from './extension.model';
import { CertificateBasedAuthConfigurationModel } from './certificatebasedauthconfiguration.model';
import { OrganizationModel } from './organization.model';
import { AssignedPlanCollection } from './assignedplan.collection';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
import { PrivacyProfileCollection } from './privacyprofile.collection';
import { VerifiedDomainCollection } from './verifieddomain.collection';
import { ExtensionCollection } from './extension.collection';
import { CertificateBasedAuthConfigurationCollection } from './certificatebasedauthconfiguration.collection';
//#endregion

export class OrganizationCollection<E extends Organization, M extends OrganizationModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}