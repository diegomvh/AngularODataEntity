import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.entity';
import { Recipient } from './recipient.entity';
import { EmailAddressModel } from './emailaddress.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { RecipientCollection } from './recipient.collection';
//#endregion

export class RecipientModel<E extends Recipient> extends ODataModel<E> {
  //#region ODataApi Properties
  emailAddress?: EmailAddressModel<EmailAddress>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}