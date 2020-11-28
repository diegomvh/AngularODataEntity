import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppCollection } from './mobileapp.collection';
import { MobileLobApp } from './mobilelobapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
import { MobileLobAppModel } from './mobilelobapp.model';
import { MobileAppContentModel } from './mobileappcontent.model';
import { MobileAppContentCollection } from './mobileappcontent.collection';
//#endregion

export class MobileLobAppCollection<E extends MobileLobApp, M extends MobileLobAppModel<E>> extends MobileAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}