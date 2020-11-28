import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.entity';
import { EmailAddressCollection } from './emailaddress.collection';
//#endregion

export class EmailAddressModel<E extends EmailAddress> extends ODataModel<E> {
  //#region ODataApi Properties
  address?: string;
  name?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}