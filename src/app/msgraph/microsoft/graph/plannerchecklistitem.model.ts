import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { PlannerChecklistItem } from './plannerchecklistitem.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerChecklistItemCollection } from './plannerchecklistitem.collection';
//#endregion

export class PlannerChecklistItemModel<E extends PlannerChecklistItem> extends ODataModel<E> {
  //#region ODataApi Properties
  isChecked?: boolean;
  lastModifiedBy?: IdentitySetModel<IdentitySet>;
  lastModifiedDateTime?: Date;
  orderHint?: string;
  title?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}