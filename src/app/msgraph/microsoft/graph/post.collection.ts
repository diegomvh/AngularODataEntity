import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemCollection } from './outlookitem.collection';
import { Recipient } from './recipient.complex';
import { ItemBody } from './itembody.complex';
import { Extension } from './extension.entity';
import { Attachment } from './attachment.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { Post } from './post.entity';
import { RecipientModel } from './recipient.model';
import { ItemBodyModel } from './itembody.model';
import { ExtensionModel } from './extension.model';
import { AttachmentModel } from './attachment.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { PostModel } from './post.model';
import { RecipientCollection } from './recipient.collection';
import { ItemBodyCollection } from './itembody.collection';
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class PostCollection<E extends Post, M extends PostModel<E>> extends OutlookItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}