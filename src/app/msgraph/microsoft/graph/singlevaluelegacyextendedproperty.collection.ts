import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
//#endregion

export class SingleValueLegacyExtendedPropertyCollection<E extends SingleValueLegacyExtendedProperty, M extends SingleValueLegacyExtendedPropertyModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}