import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StateManagementSetting } from './statemanagementsetting.enum';
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.entity';
import { WindowsFirewallNetworkProfileModel } from './windowsfirewallnetworkprofile.model';
//#endregion

export class WindowsFirewallNetworkProfileCollection<E extends WindowsFirewallNetworkProfile, M extends WindowsFirewallNetworkProfileModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}