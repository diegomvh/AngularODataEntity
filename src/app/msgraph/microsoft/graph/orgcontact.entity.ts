import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { PhysicalOfficeAddress } from './physicalofficeaddress.entity';
import { Phone } from './phone.entity';
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
  onPremisesSyncEnabled?: boolean;
  onPremisesLastSyncDateTime?: Date;
  onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
  phones?: Phone[];
  proxyAddresses: string[];
  surname?: string;
  manager?: DirectoryObject;
  directReports?: DirectoryObject[];
  memberOf?: DirectoryObject[];
  transitiveMemberOf?: DirectoryObject[];
  //#endregion
}