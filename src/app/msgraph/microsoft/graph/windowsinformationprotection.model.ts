import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { WindowsInformationProtectionEnforcementLevel } from './windowsinformationprotectionenforcementlevel.enum';
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.complex';
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.complex';
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.complex';
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.complex';
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.complex';
import { WindowsInformationProtection } from './windowsinformationprotection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
import { WindowsInformationProtectionAppModel } from './windowsinformationprotectionapp.model';
import { WindowsInformationProtectionDataRecoveryCertificateModel } from './windowsinformationprotectiondatarecoverycertificate.model';
import { WindowsInformationProtectionIPRangeCollectionModel } from './windowsinformationprotectioniprangecollection.model';
import { WindowsInformationProtectionProxiedDomainCollectionModel } from './windowsinformationprotectionproxieddomaincollection.model';
import { WindowsInformationProtectionResourceCollectionModel } from './windowsinformationprotectionresourcecollection.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { WindowsInformationProtectionAppLockerFileModel } from './windowsinformationprotectionapplockerfile.model';
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
import { WindowsInformationProtectionDataRecoveryCertificateCollection } from './windowsinformationprotectiondatarecoverycertificate.collection';
import { WindowsInformationProtectionIPRangeCollectionCollection } from './windowsinformationprotectioniprangecollection.collection';
import { WindowsInformationProtectionProxiedDomainCollectionCollection } from './windowsinformationprotectionproxieddomaincollection.collection';
import { WindowsInformationProtectionResourceCollectionCollection } from './windowsinformationprotectionresourcecollection.collection';
import { WindowsInformationProtectionCollection } from './windowsinformationprotection.collection';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
import { WindowsInformationProtectionAppLockerFileCollection } from './windowsinformationprotectionapplockerfile.collection';
//#endregion

export class WindowsInformationProtectionModel<E extends WindowsInformationProtection> extends ManagedAppPolicyModel<E> {
  //#region ODataApi Properties
  azureRightsManagementServicesAllowed: boolean;
  dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificateModel<WindowsInformationProtectionDataRecoveryCertificate>;
  enforcementLevel: WindowsInformationProtectionEnforcementLevel;
  enterpriseDomain?: string;
  enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollectionCollection<WindowsInformationProtectionResourceCollection, WindowsInformationProtectionResourceCollectionModel<WindowsInformationProtectionResourceCollection>>;
  enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollectionCollection<WindowsInformationProtectionIPRangeCollection, WindowsInformationProtectionIPRangeCollectionModel<WindowsInformationProtectionIPRangeCollection>>;
  enterpriseIPRangesAreAuthoritative: boolean;
  enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollectionCollection<WindowsInformationProtectionResourceCollection, WindowsInformationProtectionResourceCollectionModel<WindowsInformationProtectionResourceCollection>>;
  enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollectionCollection<WindowsInformationProtectionResourceCollection, WindowsInformationProtectionResourceCollectionModel<WindowsInformationProtectionResourceCollection>>;
  enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollectionCollection<WindowsInformationProtectionProxiedDomainCollection, WindowsInformationProtectionProxiedDomainCollectionModel<WindowsInformationProtectionProxiedDomainCollection>>;
  enterpriseProxyServers?: WindowsInformationProtectionResourceCollectionCollection<WindowsInformationProtectionResourceCollection, WindowsInformationProtectionResourceCollectionModel<WindowsInformationProtectionResourceCollection>>;
  enterpriseProxyServersAreAuthoritative: boolean;
  exemptApps?: WindowsInformationProtectionAppCollection<WindowsInformationProtectionApp, WindowsInformationProtectionAppModel<WindowsInformationProtectionApp>>;
  iconsVisible: boolean;
  indexingEncryptedStoresOrItemsBlocked: boolean;
  isAssigned: boolean;
  neutralDomainResources?: WindowsInformationProtectionResourceCollectionCollection<WindowsInformationProtectionResourceCollection, WindowsInformationProtectionResourceCollectionModel<WindowsInformationProtectionResourceCollection>>;
  protectedApps?: WindowsInformationProtectionAppCollection<WindowsInformationProtectionApp, WindowsInformationProtectionAppModel<WindowsInformationProtectionApp>>;
  protectionUnderLockConfigRequired: boolean;
  revokeOnUnenrollDisabled: boolean;
  rightsManagementServicesTemplateId?: string;
  smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollectionCollection<WindowsInformationProtectionResourceCollection, WindowsInformationProtectionResourceCollectionModel<WindowsInformationProtectionResourceCollection>>;
  assignments?: TargetedManagedAppPolicyAssignmentCollection<TargetedManagedAppPolicyAssignment, TargetedManagedAppPolicyAssignmentModel<TargetedManagedAppPolicyAssignment>>;
  exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFileCollection<WindowsInformationProtectionAppLockerFile, WindowsInformationProtectionAppLockerFileModel<WindowsInformationProtectionAppLockerFile>>;
  protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFileCollection<WindowsInformationProtectionAppLockerFile, WindowsInformationProtectionAppLockerFileModel<WindowsInformationProtectionAppLockerFile>>;
  //#endregion
  //#region ODataApi Actions
  public assign(assignments: TargetedManagedAppPolicyAssignment[], options?: HttpOptions): Observable<any> {
    var res = this._action<{assignments: TargetedManagedAppPolicyAssignment[]}, any>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({assignments}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}