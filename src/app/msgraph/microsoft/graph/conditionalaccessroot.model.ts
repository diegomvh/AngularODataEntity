import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { NamedLocation } from './namedlocation.entity';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { NamedLocationModel } from './namedlocation.model';
import { ConditionalAccessRootCollection } from './conditionalaccessroot.collection';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
import { NamedLocationCollection } from './namedlocation.collection';
//#endregion

export class ConditionalAccessRootModel<E extends ConditionalAccessRoot> extends EntityModel<E> {
  //#region ODataApi Properties
  namedLocations?: NamedLocationCollection<NamedLocation, NamedLocationModel<NamedLocation>>;
  policies?: ConditionalAccessPolicyCollection<ConditionalAccessPolicy, ConditionalAccessPolicyModel<ConditionalAccessPolicy>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}