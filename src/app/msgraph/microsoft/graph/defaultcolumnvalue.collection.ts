import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DefaultColumnValue } from './defaultcolumnvalue.entity';
import { DefaultColumnValueModel } from './defaultcolumnvalue.model';
//#endregion

export class DefaultColumnValueCollection<E extends DefaultColumnValue, M extends DefaultColumnValueModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}