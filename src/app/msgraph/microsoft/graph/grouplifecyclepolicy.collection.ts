import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
import { GroupLifecyclePolicyModel } from './grouplifecyclepolicy.model';
//#endregion

export class GroupLifecyclePolicyCollection<E extends GroupLifecyclePolicy, M extends GroupLifecyclePolicyModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}