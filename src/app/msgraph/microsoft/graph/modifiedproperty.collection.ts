import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ModifiedProperty } from './modifiedproperty.entity';
import { ModifiedPropertyModel } from './modifiedproperty.model';
//#endregion

export class ModifiedPropertyCollection<E extends ModifiedProperty, M extends ModifiedPropertyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}