import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppCollection } from './managedapp.collection';
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
import { ManagedMobileLobAppModel } from './managedmobilelobapp.model';
import { MobileAppContentModel } from './mobileappcontent.model';
import { MobileAppContentCollection } from './mobileappcontent.collection';
//#endregion

export class ManagedMobileLobAppCollection<E extends ManagedMobileLobApp, M extends ManagedMobileLobAppModel<E>> extends ManagedAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}