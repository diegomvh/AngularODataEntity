import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { FieldValueSet } from './fieldvalueset.entity';
import { FieldValueSetModel } from './fieldvalueset.model';
//#endregion

export class FieldValueSetCollection<E extends FieldValueSet, M extends FieldValueSetModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}