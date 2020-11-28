import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MobileAppPublishingState } from './mobileapppublishingstate.enum';
import { MimeContent } from './mimecontent.complex';
import { MobileApp } from './mobileapp.entity';
import { MobileAppCategory } from './mobileappcategory.entity';
import { MobileAppAssignment } from './mobileappassignment.entity';
import { MimeContentModel } from './mimecontent.model';
import { MobileAppCategoryModel } from './mobileappcategory.model';
import { MobileAppAssignmentModel } from './mobileappassignment.model';
import { MimeContentCollection } from './mimecontent.collection';
import { MobileAppCollection } from './mobileapp.collection';
import { MobileAppCategoryCollection } from './mobileappcategory.collection';
import { MobileAppAssignmentCollection } from './mobileappassignment.collection';
//#endregion

export class MobileAppModel<E extends MobileApp> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  developer?: string;
  displayName?: string;
  informationUrl?: string;
  isFeatured: boolean;
  largeIcon?: MimeContentModel<MimeContent>;
  lastModifiedDateTime: Date;
  notes?: string;
  owner?: string;
  privacyInformationUrl?: string;
  publisher?: string;
  publishingState: MobileAppPublishingState;
  assignments?: MobileAppAssignmentCollection<MobileAppAssignment, MobileAppAssignmentModel<MobileAppAssignment>>;
  categories?: MobileAppCategoryCollection<MobileAppCategory, MobileAppCategoryModel<MobileAppCategory>>;
  //#endregion
  //#region ODataApi Actions
  public assign(mobileAppAssignments: MobileAppAssignment[], options?: HttpOptions): Observable<any> {
    var res = this._action<{mobileAppAssignments: MobileAppAssignment[]}, any>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({mobileAppAssignments}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}