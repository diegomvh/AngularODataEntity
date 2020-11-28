import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ComplexExtensionValue } from './complexextensionvalue.complex';
import { ComplexExtensionValueModel } from './complexextensionvalue.model';
//#endregion

export class ComplexExtensionValueCollection<E extends ComplexExtensionValue, M extends ComplexExtensionValueModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}