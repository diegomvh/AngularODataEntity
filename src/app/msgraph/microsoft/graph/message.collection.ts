import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemCollection } from './outlookitem.collection';
import { Importance } from './importance.enum';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { Recipient } from './recipient.entity';
import { FollowupFlag } from './followupflag.entity';
import { InternetMessageHeader } from './internetmessageheader.entity';
import { ItemBody } from './itembody.entity';
import { Message } from './message.entity';
import { Extension } from './extension.entity';
import { Attachment } from './attachment.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { RecipientModel } from './recipient.model';
import { FollowupFlagModel } from './followupflag.model';
import { InternetMessageHeaderModel } from './internetmessageheader.model';
import { ItemBodyModel } from './itembody.model';
import { MessageModel } from './message.model';
import { ExtensionModel } from './extension.model';
import { AttachmentModel } from './attachment.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { RecipientCollection } from './recipient.collection';
import { FollowupFlagCollection } from './followupflag.collection';
import { InternetMessageHeaderCollection } from './internetmessageheader.collection';
import { ItemBodyCollection } from './itembody.collection';
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class MessageCollection<E extends Message, M extends MessageModel<E>> extends OutlookItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}