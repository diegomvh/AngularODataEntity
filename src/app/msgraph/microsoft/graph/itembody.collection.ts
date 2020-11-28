import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BodyType } from './bodytype.enum';
import { ItemBody } from './itembody.complex';
import { ItemBodyModel } from './itembody.model';
//#endregion

export class ItemBodyCollection<E extends ItemBody, M extends ItemBodyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}