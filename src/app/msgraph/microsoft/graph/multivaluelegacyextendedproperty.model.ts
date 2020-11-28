import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
//#endregion

export class MultiValueLegacyExtendedPropertyModel<E extends MultiValueLegacyExtendedProperty> extends EntityModel<E> {
  //#region ODataApi Properties
  value?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}