import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { PlannerChecklistItem } from './plannerchecklistitem.entity';
import { IdentitySetModel } from './identityset.model';
import { PlannerChecklistItemModel } from './plannerchecklistitem.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class PlannerChecklistItemCollection<E extends PlannerChecklistItem, M extends PlannerChecklistItemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}