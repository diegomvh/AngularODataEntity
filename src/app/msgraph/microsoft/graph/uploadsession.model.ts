import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UploadSession } from './uploadsession.entity';
import { UploadSessionCollection } from './uploadsession.collection';
//#endregion

export class UploadSessionModel<E extends UploadSession> extends ODataModel<E> {
  //#region ODataApi Properties
  expirationDateTime?: Date;
  nextExpectedRanges?: string[];
  uploadUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}