import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BodyType } from './bodytype.enum';
import { ItemBody } from './itembody.entity';
import { ItemBodyCollection } from './itembody.collection';
//#endregion

export class ItemBodyModel<E extends ItemBody> extends ODataModel<E> {
  //#region ODataApi Properties
  content?: string;
  contentType?: BodyType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}