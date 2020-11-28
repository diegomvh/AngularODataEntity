import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemVersionCollection } from './baseitemversion.collection';
import { FieldValueSet } from './fieldvalueset.entity';
import { ListItemVersion } from './listitemversion.entity';
import { FieldValueSetModel } from './fieldvalueset.model';
import { ListItemVersionModel } from './listitemversion.model';
import { FieldValueSetCollection } from './fieldvalueset.collection';
//#endregion

export class ListItemVersionCollection<E extends ListItemVersion, M extends ListItemVersionModel<E>> extends BaseItemVersionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}