import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppRegistrationModel } from './managedappregistration.model';
import { AndroidManagedAppRegistration } from './androidmanagedappregistration.entity';
import { AndroidManagedAppRegistrationCollection } from './androidmanagedappregistration.collection';
//#endregion

export class AndroidManagedAppRegistrationModel<E extends AndroidManagedAppRegistration> extends ManagedAppRegistrationModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}