import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export class ExternalLinkModel<E extends ExternalLink> extends ODataModel<E> {
  //#region ODataApi Properties
  href?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}