import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GroupType } from './grouptype.enum';
import { ModifiedProperty } from './modifiedproperty.complex';
import { TargetResource } from './targetresource.complex';
import { ModifiedPropertyModel } from './modifiedproperty.model';
import { TargetResourceModel } from './targetresource.model';
import { ModifiedPropertyCollection } from './modifiedproperty.collection';
//#endregion

export class TargetResourceCollection<E extends TargetResource, M extends TargetResourceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}