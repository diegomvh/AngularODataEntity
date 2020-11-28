import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { EmailAddress } from './emailaddress.entity';
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
import { EmailAddressModel } from './emailaddress.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { InferenceClassificationOverrideCollection } from './inferenceclassificationoverride.collection';
//#endregion

export class InferenceClassificationOverrideModel<E extends InferenceClassificationOverride> extends EntityModel<E> {
  //#region ODataApi Properties
  classifyAs?: InferenceClassificationType;
  senderEmailAddress?: EmailAddressModel<EmailAddress>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}