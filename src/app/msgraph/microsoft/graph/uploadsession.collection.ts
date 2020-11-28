import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UploadSession } from './uploadsession.entity';
import { UploadSessionModel } from './uploadsession.model';
//#endregion

export class UploadSessionCollection<E extends UploadSession, M extends UploadSessionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}