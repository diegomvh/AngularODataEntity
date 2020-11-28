import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MobileAppPublishingState } from './mobileapppublishingstate.enum';
import { MimeContent } from './mimecontent.entity';
import { MobileApp } from './mobileapp.entity';
import { MobileAppCategory } from './mobileappcategory.entity';
import { MobileAppAssignment } from './mobileappassignment.entity';
import { MimeContentModel } from './mimecontent.model';
import { MobileAppModel } from './mobileapp.model';
import { MobileAppCategoryModel } from './mobileappcategory.model';
import { MobileAppAssignmentModel } from './mobileappassignment.model';
import { MimeContentCollection } from './mimecontent.collection';
import { MobileAppCategoryCollection } from './mobileappcategory.collection';
import { MobileAppAssignmentCollection } from './mobileappassignment.collection';
//#endregion

export class MobileAppCollection<E extends MobileApp, M extends MobileAppModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}