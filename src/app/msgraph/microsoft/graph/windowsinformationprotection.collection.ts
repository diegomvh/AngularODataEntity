import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { WindowsInformationProtectionEnforcementLevel } from './windowsinformationprotectionenforcementlevel.enum';
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.entity';
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.entity';
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.entity';
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.entity';
import { WindowsInformationProtection } from './windowsinformationprotection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
import { WindowsInformationProtectionAppModel } from './windowsinformationprotectionapp.model';
import { WindowsInformationProtectionDataRecoveryCertificateModel } from './windowsinformationprotectiondatarecoverycertificate.model';
import { WindowsInformationProtectionIPRangeCollectionModel } from './windowsinformationprotectioniprangecollection.model';
import { WindowsInformationProtectionProxiedDomainCollectionModel } from './windowsinformationprotectionproxieddomaincollection.model';
import { WindowsInformationProtectionResourceCollectionModel } from './windowsinformationprotectionresourcecollection.model';
import { WindowsInformationProtectionModel } from './windowsinformationprotection.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { WindowsInformationProtectionAppLockerFileModel } from './windowsinformationprotectionapplockerfile.model';
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
import { WindowsInformationProtectionDataRecoveryCertificateCollection } from './windowsinformationprotectiondatarecoverycertificate.collection';
import { WindowsInformationProtectionIPRangeCollectionCollection } from './windowsinformationprotectioniprangecollection.collection';
import { WindowsInformationProtectionProxiedDomainCollectionCollection } from './windowsinformationprotectionproxieddomaincollection.collection';
import { WindowsInformationProtectionResourceCollectionCollection } from './windowsinformationprotectionresourcecollection.collection';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
import { WindowsInformationProtectionAppLockerFileCollection } from './windowsinformationprotectionapplockerfile.collection';
//#endregion

export class WindowsInformationProtectionCollection<E extends WindowsInformationProtection, M extends WindowsInformationProtectionModel<E>> extends ManagedAppPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}