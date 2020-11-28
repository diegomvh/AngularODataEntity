import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MobileAppContent } from './mobileappcontent.entity';
import { MobileAppContentFile } from './mobileappcontentfile.entity';
import { MobileAppContentModel } from './mobileappcontent.model';
import { MobileAppContentFileModel } from './mobileappcontentfile.model';
import { MobileAppContentFileCollection } from './mobileappcontentfile.collection';
//#endregion

export class MobileAppContentCollection<E extends MobileAppContent, M extends MobileAppContentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}