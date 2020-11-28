import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { Phone } from './phone.entity';
import { PhysicalOfficeAddress } from './physicalofficeaddress.entity';
import { DirectoryObject } from './directoryobject.entity';
import { OrgContact } from './orgcontact.entity';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { PhoneModel } from './phone.model';
import { PhysicalOfficeAddressModel } from './physicalofficeaddress.model';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
import { PhoneCollection } from './phone.collection';
import { PhysicalOfficeAddressCollection } from './physicalofficeaddress.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { OrgContactCollection } from './orgcontact.collection';
//#endregion

export class OrgContactModel<E extends OrgContact> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  addresses?: PhysicalOfficeAddressCollection<PhysicalOfficeAddress, PhysicalOfficeAddressModel<PhysicalOfficeAddress>>;
  companyName?: string;
  department?: string;
  displayName?: string;
  givenName?: string;
  jobTitle?: string;
  mail?: string;
  mailNickname?: string;
  onPremisesLastSyncDateTime?: Date;
  onPremisesProvisioningErrors?: OnPremisesProvisioningErrorCollection<OnPremisesProvisioningError, OnPremisesProvisioningErrorModel<OnPremisesProvisioningError>>;
  onPremisesSyncEnabled?: boolean;
  phones?: PhoneCollection<Phone, PhoneModel<Phone>>;
  proxyAddresses: string[];
  surname?: string;
  directReports?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  manager?: DirectoryObjectModel<DirectoryObject>;
  memberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  transitiveMemberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}