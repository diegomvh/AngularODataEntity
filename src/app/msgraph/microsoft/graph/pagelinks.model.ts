import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { PageLinks } from './pagelinks.entity';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
import { PageLinksCollection } from './pagelinks.collection';
//#endregion

export class PageLinksModel<E extends PageLinks> extends ODataModel<E> {
  //#region ODataApi Properties
  oneNoteClientUrl?: ExternalLinkModel<ExternalLink>;
  oneNoteWebUrl?: ExternalLinkModel<ExternalLink>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}