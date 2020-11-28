import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { NamedLocation } from './namedlocation.entity';
import { ConditionalAccessRootModel } from './conditionalaccessroot.model';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { NamedLocationModel } from './namedlocation.model';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
import { NamedLocationCollection } from './namedlocation.collection';
//#endregion

export class ConditionalAccessRootCollection<E extends ConditionalAccessRoot, M extends ConditionalAccessRootModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}