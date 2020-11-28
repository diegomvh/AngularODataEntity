import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { ApplicationGuardBlockClipboardSharingType } from './applicationguardblockclipboardsharingtype.enum';
import { ApplicationGuardBlockFileTransferType } from './applicationguardblockfiletransfertype.enum';
import { AppLockerApplicationControlType } from './applockerapplicationcontroltype.enum';
import { FirewallCertificateRevocationListCheckMethodType } from './firewallcertificaterevocationlistcheckmethodtype.enum';
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
import { FirewallPreSharedKeyEncodingMethodType } from './firewallpresharedkeyencodingmethodtype.enum';
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.complex';
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.complex';
import { Windows10EndpointProtectionConfiguration } from './windows10endpointprotectionconfiguration.entity';
import { BitLockerRemovableDrivePolicyModel } from './bitlockerremovabledrivepolicy.model';
import { WindowsFirewallNetworkProfileModel } from './windowsfirewallnetworkprofile.model';
import { Windows10EndpointProtectionConfigurationModel } from './windows10endpointprotectionconfiguration.model';
import { BitLockerRemovableDrivePolicyCollection } from './bitlockerremovabledrivepolicy.collection';
import { WindowsFirewallNetworkProfileCollection } from './windowsfirewallnetworkprofile.collection';
//#endregion

export class Windows10EndpointProtectionConfigurationCollection<E extends Windows10EndpointProtectionConfiguration, M extends Windows10EndpointProtectionConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}