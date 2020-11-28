import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { NamedLocation } from './namedlocation.entity';
import { NamedLocationCollection } from './namedlocation.collection';
//#endregion

export class NamedLocationModel<E extends NamedLocation> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime?: Date;
  displayName: string;
  modifiedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}