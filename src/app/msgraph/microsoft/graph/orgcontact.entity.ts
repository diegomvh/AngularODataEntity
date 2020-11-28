import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { Phone } from './phone.complex';
import { PhysicalOfficeAddress } from './physicalofficeaddress.complex';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { PhoneModel } from './phone.model';
import { PhysicalOfficeAddressModel } from './physicalofficeaddress.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
import { PhoneCollection } from './phone.collection';
import { PhysicalOfficeAddressCollection } from './physicalofficeaddress.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export interface OrgContact extends DirectoryObject {
  //#region ODataApi Properties
  addresses?: PhysicalOfficeAddress[];
  companyName?: string;
  department?: string;
  displayName?: string;
  givenName?: string;
  jobTitle?: string;
  mail?: string;
  mailNickname?: string;
  onPremisesLastSyncDateTime?: Date;
  onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
  onPremisesSyncEnabled?: boolean;
  phones?: Phone[];
  proxyAddresses: string[];
  surname?: string;
  directReports?: DirectoryObject[];
  manager?: DirectoryObject;
  memberOf?: DirectoryObject[];
  transitiveMemberOf?: DirectoryObject[];
  //#endregion
}