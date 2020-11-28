import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WebsiteType } from './websitetype.enum';
import { Website } from './website.entity';
import { WebsiteModel } from './website.model';
//#endregion

export class WebsiteCollection<E extends Website, M extends WebsiteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}