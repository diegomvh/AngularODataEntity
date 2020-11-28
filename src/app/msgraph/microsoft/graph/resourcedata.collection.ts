import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceData } from './resourcedata.entity';
import { ResourceDataModel } from './resourcedata.model';
//#endregion

export class ResourceDataCollection<E extends ResourceData, M extends ResourceDataModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}