import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TableInfo } from './tableinfo.entity';
import { TableInfoModel } from './tableinfo.model';
//#endregion

export class TableInfoCollection<E extends TableInfo, M extends TableInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}