import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { SharedPCAllowedAccountType } from './sharedpcallowedaccounttype.enum';
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.entity';
import { SharedPCConfiguration } from './sharedpcconfiguration.entity';
import { SharedPCAccountManagerPolicyModel } from './sharedpcaccountmanagerpolicy.model';
import { SharedPCConfigurationModel } from './sharedpcconfiguration.model';
import { SharedPCAccountManagerPolicyCollection } from './sharedpcaccountmanagerpolicy.collection';
//#endregion

export class SharedPCConfigurationCollection<E extends SharedPCConfiguration, M extends SharedPCConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}