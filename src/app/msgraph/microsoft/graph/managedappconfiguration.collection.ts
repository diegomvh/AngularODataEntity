import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { KeyValuePair } from './keyvaluepair.complex';
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
import { KeyValuePairModel } from './keyvaluepair.model';
import { ManagedAppConfigurationModel } from './managedappconfiguration.model';
import { KeyValuePairCollection } from './keyvaluepair.collection';
//#endregion

export class ManagedAppConfigurationCollection<E extends ManagedAppConfiguration, M extends ManagedAppConfigurationModel<E>> extends ManagedAppPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}