import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemVersionModel } from './baseitemversion.model';
import { FieldValueSet } from './fieldvalueset.entity';
import { ListItemVersion } from './listitemversion.entity';
import { FieldValueSetModel } from './fieldvalueset.model';
import { FieldValueSetCollection } from './fieldvalueset.collection';
import { ListItemVersionCollection } from './listitemversion.collection';
//#endregion

export class ListItemVersionModel<E extends ListItemVersion> extends BaseItemVersionModel<E> {
  //#region ODataApi Properties
  fields?: FieldValueSetModel<FieldValueSet>;
  //#endregion
  //#region ODataApi Actions
  public restoreVersion(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.restoreVersion');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}