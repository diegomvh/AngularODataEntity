import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
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
import { Alert } from './alert.entity';
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
import { AlertCollection } from './alert.collection';
//#endregion

export class AlertModel<E extends Alert> extends EntityModel<E> {
  //#region ODataApi Properties
  activityGroupName?: string;
  assignedTo?: string;
  azureSubscriptionId?: string;
  azureTenantId: string;
  category?: string;
  closedDateTime?: Date;
  cloudAppStates?: CloudAppSecurityStateCollection<CloudAppSecurityState, CloudAppSecurityStateModel<CloudAppSecurityState>>;
  comments?: string[];
  confidence?: number;
  createdDateTime?: Date;
  description?: string;
  detectionIds?: string[];
  eventDateTime?: Date;
  feedback?: AlertFeedback;
  fileStates?: FileSecurityStateCollection<FileSecurityState, FileSecurityStateModel<FileSecurityState>>;
  historyStates?: AlertHistoryStateCollection<AlertHistoryState, AlertHistoryStateModel<AlertHistoryState>>;
  hostStates?: HostSecurityStateCollection<HostSecurityState, HostSecurityStateModel<HostSecurityState>>;
  incidentIds?: string[];
  lastModifiedDateTime?: Date;
  malwareStates?: MalwareStateCollection<MalwareState, MalwareStateModel<MalwareState>>;
  networkConnections?: NetworkConnectionCollection<NetworkConnection, NetworkConnectionModel<NetworkConnection>>;
  processes?: ProcessCollection<Process, ProcessModel<Process>>;
  recommendedActions?: string[];
  registryKeyStates?: RegistryKeyStateCollection<RegistryKeyState, RegistryKeyStateModel<RegistryKeyState>>;
  securityResources?: SecurityResourceCollection<SecurityResource, SecurityResourceModel<SecurityResource>>;
  severity: AlertSeverity;
  sourceMaterials?: string[];
  status: AlertStatus;
  tags?: string[];
  title?: string;
  triggers?: AlertTriggerCollection<AlertTrigger, AlertTriggerModel<AlertTrigger>>;
  userStates?: UserSecurityStateCollection<UserSecurityState, UserSecurityStateModel<UserSecurityState>>;
  vendorInformation?: SecurityVendorInformationModel<SecurityVendorInformation>;
  vulnerabilityStates?: VulnerabilityStateCollection<VulnerabilityState, VulnerabilityStateModel<VulnerabilityState>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}