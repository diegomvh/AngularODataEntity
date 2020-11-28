import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.entity';
import { EmailAddressModel } from './emailaddress.model';
//#endregion

export class EmailAddressCollection<E extends EmailAddress, M extends EmailAddressModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}