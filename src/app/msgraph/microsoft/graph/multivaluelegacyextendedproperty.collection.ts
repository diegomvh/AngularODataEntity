import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
//#endregion

export class MultiValueLegacyExtendedPropertyCollection<E extends MultiValueLegacyExtendedProperty, M extends MultiValueLegacyExtendedPropertyModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}