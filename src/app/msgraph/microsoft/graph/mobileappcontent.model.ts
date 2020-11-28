import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MobileAppContent } from './mobileappcontent.entity';
import { MobileAppContentFile } from './mobileappcontentfile.entity';
import { MobileAppContentFileModel } from './mobileappcontentfile.model';
import { MobileAppContentCollection } from './mobileappcontent.collection';
import { MobileAppContentFileCollection } from './mobileappcontentfile.collection';
//#endregion

export class MobileAppContentModel<E extends MobileAppContent> extends EntityModel<E> {
  //#region ODataApi Properties
  files?: MobileAppContentFileCollection<MobileAppContentFile, MobileAppContentFileModel<MobileAppContentFile>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}