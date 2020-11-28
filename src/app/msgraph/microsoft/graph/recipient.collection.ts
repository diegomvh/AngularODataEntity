import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmailAddress } from './emailaddress.entity';
import { Recipient } from './recipient.entity';
import { EmailAddressModel } from './emailaddress.model';
import { RecipientModel } from './recipient.model';
import { EmailAddressCollection } from './emailaddress.collection';
//#endregion

export class RecipientCollection<E extends Recipient, M extends RecipientModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}