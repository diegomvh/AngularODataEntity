import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ModifiedProperty } from './modifiedproperty.complex';
import { ModifiedPropertyCollection } from './modifiedproperty.collection';
//#endregion

export class ModifiedPropertyModel<E extends ModifiedProperty> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  newValue?: string;
  oldValue?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}