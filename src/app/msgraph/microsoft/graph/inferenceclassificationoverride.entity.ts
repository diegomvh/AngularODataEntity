import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { EmailAddress } from './emailaddress.complex';
import { EmailAddressModel } from './emailaddress.model';
import { EntityModel } from './entity.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface InferenceClassificationOverride extends Entity {
  //#region ODataApi Properties
  classifyAs?: InferenceClassificationType;
  senderEmailAddress?: EmailAddress;
  //#endregion
}