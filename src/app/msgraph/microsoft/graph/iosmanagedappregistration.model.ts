import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppRegistrationModel } from './managedappregistration.model';
import { IosManagedAppRegistration } from './iosmanagedappregistration.entity';
import { IosManagedAppRegistrationCollection } from './iosmanagedappregistration.collection';
//#endregion

export class IosManagedAppRegistrationModel<E extends IosManagedAppRegistration> extends ManagedAppRegistrationModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}