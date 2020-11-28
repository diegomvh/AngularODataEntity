import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DirectoryObjectPartnerReference } from './directoryobjectpartnerreference.entity';
import { DirectoryObjectPartnerReferenceModel } from './directoryobjectpartnerreference.model';
//#endregion

export class DirectoryObjectPartnerReferenceCollection<E extends DirectoryObjectPartnerReference, M extends DirectoryObjectPartnerReferenceModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}