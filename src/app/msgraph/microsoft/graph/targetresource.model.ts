import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GroupType } from './grouptype.enum';
import { ModifiedProperty } from './modifiedproperty.complex';
import { TargetResource } from './targetresource.complex';
import { ModifiedPropertyModel } from './modifiedproperty.model';
import { ModifiedPropertyCollection } from './modifiedproperty.collection';
import { TargetResourceCollection } from './targetresource.collection';
//#endregion

export class TargetResourceModel<E extends TargetResource> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  groupType?: GroupType;
  id?: string;
  modifiedProperties?: ModifiedPropertyCollection<ModifiedProperty, ModifiedPropertyModel<ModifiedProperty>>;
  type?: string;
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}