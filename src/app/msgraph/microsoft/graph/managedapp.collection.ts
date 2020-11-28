import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppCollection } from './mobileapp.collection';
import { ManagedAppAvailability } from './managedappavailability.enum';
import { ManagedApp } from './managedapp.entity';
import { ManagedAppModel } from './managedapp.model';
//#endregion

export class ManagedAppCollection<E extends ManagedApp, M extends ManagedAppModel<E>> extends MobileAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}