import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { AlertFeedback } from './alertfeedback.enum';
import { AlertSeverity } from './alertseverity.enum';
import { AlertStatus } from './alertstatus.enum';
import { AlertHistoryState } from './alerthistorystate.complex';
import { AlertTrigger } from './alerttrigger.complex';
import { CloudAppSecurityState } from './cloudappsecuritystate.complex';
import { FileSecurityState } from './filesecuritystate.complex';
import { HostSecurityState } from './hostsecuritystate.complex';
import { MalwareState } from './malwarestate.complex';
import { NetworkConnection } from './networkconnection.complex';
import { Process } from './process.complex';
import { RegistryKeyState } from './registrykeystate.complex';
import { SecurityResource } from './securityresource.complex';
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { UserSecurityState } from './usersecuritystate.complex';
import { VulnerabilityState } from './vulnerabilitystate.complex';
import { AlertHistoryStateModel } from './alerthistorystate.model';
import { AlertTriggerModel } from './alerttrigger.model';
import { CloudAppSecurityStateModel } from './cloudappsecuritystate.model';
import { FileSecurityStateModel } from './filesecuritystate.model';
import { HostSecurityStateModel } from './hostsecuritystate.model';
import { MalwareStateModel } from './malwarestate.model';
import { NetworkConnectionModel } from './networkconnection.model';
import { ProcessModel } from './process.model';
import { RegistryKeyStateModel } from './registrykeystate.model';
import { SecurityResourceModel } from './securityresource.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { UserSecurityStateModel } from './usersecuritystate.model';
import { VulnerabilityStateModel } from './vulnerabilitystate.model';
import { EntityModel } from './entity.model';
import { AlertHistoryStateCollection } from './alerthistorystate.collection';
import { AlertTriggerCollection } from './alerttrigger.collection';
import { CloudAppSecurityStateCollection } from './cloudappsecuritystate.collection';
import { FileSecurityStateCollection } from './filesecuritystate.collection';
import { HostSecurityStateCollection } from './hostsecuritystate.collection';
import { MalwareStateCollection } from './malwarestate.collection';
import { NetworkConnectionCollection } from './networkconnection.collection';
import { ProcessCollection } from './process.collection';
import { RegistryKeyStateCollection } from './registrykeystate.collection';
import { SecurityResourceCollection } from './securityresource.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
import { UserSecurityStateCollection } from './usersecuritystate.collection';
import { VulnerabilityStateCollection } from './vulnerabilitystate.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Alert extends Entity {
  //#region ODataApi Properties
  activityGroupName?: string;
  assignedTo?: string;
  azureSubscriptionId?: string;
  azureTenantId: string;
  category?: string;
  closedDateTime?: Date;
  cloudAppStates?: CloudAppSecurityState[];
  comments?: string[];
  confidence?: number;
  createdDateTime?: Date;
  description?: string;
  detectionIds?: string[];
  eventDateTime?: Date;
  feedback?: AlertFeedback;
  fileStates?: FileSecurityState[];
  historyStates?: AlertHistoryState[];
  hostStates?: HostSecurityState[];
  incidentIds?: string[];
  lastModifiedDateTime?: Date;
  malwareStates?: MalwareState[];
  networkConnections?: NetworkConnection[];
  processes?: Process[];
  recommendedActions?: string[];
  registryKeyStates?: RegistryKeyState[];
  securityResources?: SecurityResource[];
  severity: AlertSeverity;
  sourceMaterials?: string[];
  status: AlertStatus;
  tags?: string[];
  title?: string;
  triggers?: AlertTrigger[];
  userStates?: UserSecurityState[];
  vendorInformation?: SecurityVendorInformation;
  vulnerabilityStates?: VulnerabilityState[];
  //#endregion
}