import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.complex';
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.complex';
import { ExternalLinkModel } from './externallink.model';
import { OnenotePagePreviewLinksModel } from './onenotepagepreviewlinks.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export class OnenotePagePreviewLinksCollection<E extends OnenotePagePreviewLinks, M extends OnenotePagePreviewLinksModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}