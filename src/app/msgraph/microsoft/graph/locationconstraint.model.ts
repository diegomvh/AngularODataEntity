import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationConstraint } from './locationconstraint.complex';
import { LocationConstraintItem } from './locationconstraintitem.complex';
import { LocationConstraintItemModel } from './locationconstraintitem.model';
import { LocationConstraintCollection } from './locationconstraint.collection';
import { LocationConstraintItemCollection } from './locationconstraintitem.collection';
//#endregion

export class LocationConstraintModel<E extends LocationConstraint> extends ODataModel<E> {
  //#region ODataApi Properties
  isRequired?: boolean;
  locations?: LocationConstraintItemCollection<LocationConstraintItem, LocationConstraintItemModel<LocationConstraintItem>>;
  suggestLocation?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}