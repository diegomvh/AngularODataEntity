import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MailTipsError } from './mailtipserror.entity';
import { MailTipsErrorModel } from './mailtipserror.model';
//#endregion

export class MailTipsErrorCollection<E extends MailTipsError, M extends MailTipsErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}