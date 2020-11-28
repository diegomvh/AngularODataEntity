import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectPartnerReference } from './directoryobjectpartnerreference.entity';
import { DirectoryObjectPartnerReferenceCollection } from './directoryobjectpartnerreference.collection';
//#endregion

export class DirectoryObjectPartnerReferenceModel<E extends DirectoryObjectPartnerReference> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  externalPartnerTenantId?: string;
  objectType?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}