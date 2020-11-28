import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OutlookItem } from './outlookitem.entity';
import { OutlookItemCollection } from './outlookitem.collection';
//#endregion

export class OutlookItemModel<E extends OutlookItem> extends EntityModel<E> {
  //#region ODataApi Properties
  categories?: string[];
  changeKey?: string;
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}