import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ColumnLink } from './columnlink.entity';
import { ColumnLinkCollection } from './columnlink.collection';
//#endregion

export class ColumnLinkModel<E extends ColumnLink> extends EntityModel<E> {
  //#region ODataApi Properties
  name?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}