import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
import { AndroidManagedAppRegistration } from './androidmanagedappregistration.entity';
import { AndroidManagedAppRegistrationModel } from './androidmanagedappregistration.model';
//#endregion

export class AndroidManagedAppRegistrationCollection<E extends AndroidManagedAppRegistration, M extends AndroidManagedAppRegistrationModel<E>> extends ManagedAppRegistrationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}