import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
import { IosManagedAppRegistration } from './iosmanagedappregistration.entity';
import { IosManagedAppRegistrationModel } from './iosmanagedappregistration.model';
//#endregion

export class IosManagedAppRegistrationCollection<E extends IosManagedAppRegistration, M extends IosManagedAppRegistrationModel<E>> extends ManagedAppRegistrationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}