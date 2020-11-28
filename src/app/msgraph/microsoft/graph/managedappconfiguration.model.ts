import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { KeyValuePair } from './keyvaluepair.complex';
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
import { KeyValuePairModel } from './keyvaluepair.model';
import { KeyValuePairCollection } from './keyvaluepair.collection';
import { ManagedAppConfigurationCollection } from './managedappconfiguration.collection';
//#endregion

export class ManagedAppConfigurationModel<E extends ManagedAppConfiguration> extends ManagedAppPolicyModel<E> {
  //#region ODataApi Properties
  customSettings: KeyValuePairCollection<KeyValuePair, KeyValuePairModel<KeyValuePair>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}