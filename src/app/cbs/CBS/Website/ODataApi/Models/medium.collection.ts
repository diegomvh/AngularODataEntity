import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaType } from './mediatype.enum';
import { Medium } from './medium.entity';
import { MediumModel } from './medium.model';
//#endregion

export class MediumCollection<E extends Medium, M extends MediumModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}