import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileAppPublishingState } from './mobileapppublishingstate.enum';
import { MimeContent } from './mimecontent.complex';
import { MobileAppCategory } from './mobileappcategory.entity';
import { MobileAppAssignment } from './mobileappassignment.entity';
import { MimeContentModel } from './mimecontent.model';
import { EntityModel } from './entity.model';
import { MobileAppCategoryModel } from './mobileappcategory.model';
import { MobileAppAssignmentModel } from './mobileappassignment.model';
import { MimeContentCollection } from './mimecontent.collection';
import { EntityCollection } from './entity.collection';
import { MobileAppCategoryCollection } from './mobileappcategory.collection';
import { MobileAppAssignmentCollection } from './mobileappassignment.collection';
//#endregion

export interface MobileApp extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  developer?: string;
  displayName?: string;
  informationUrl?: string;
  isFeatured: boolean;
  largeIcon?: MimeContent;
  lastModifiedDateTime: Date;
  notes?: string;
  owner?: string;
  privacyInformationUrl?: string;
  publisher?: string;
  publishingState: MobileAppPublishingState;
  assignments?: MobileAppAssignment[];
  categories?: MobileAppCategory[];
  //#endregion
}