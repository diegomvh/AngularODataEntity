import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { EmailAddress } from './emailaddress.entity';
//#endregion

export interface InferenceClassificationOverride extends Entity {
  //#region ODataApi Properties
  classifyAs?: InferenceClassificationType;
  senderEmailAddress?: EmailAddress;
  //#endregion
}