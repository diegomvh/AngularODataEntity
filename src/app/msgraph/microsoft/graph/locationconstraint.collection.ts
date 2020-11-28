import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationConstraint } from './locationconstraint.complex';
import { LocationConstraintItem } from './locationconstraintitem.complex';
import { LocationConstraintModel } from './locationconstraint.model';
import { LocationConstraintItemModel } from './locationconstraintitem.model';
import { LocationConstraintItemCollection } from './locationconstraintitem.collection';
//#endregion

export class LocationConstraintCollection<E extends LocationConstraint, M extends LocationConstraintModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}