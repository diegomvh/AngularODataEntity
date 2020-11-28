import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationCollection } from './location.collection';
import { LocationConstraintItem } from './locationconstraintitem.entity';
import { LocationConstraintItemModel } from './locationconstraintitem.model';
//#endregion

export class LocationConstraintItemCollection<E extends LocationConstraintItem, M extends LocationConstraintItemModel<E>> extends LocationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}