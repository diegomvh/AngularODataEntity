import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.entity';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
import { OnenotePagePreviewLinksCollection } from './onenotepagepreviewlinks.collection';
//#endregion

export class OnenotePagePreviewLinksModel<E extends OnenotePagePreviewLinks> extends ODataModel<E> {
  //#region ODataApi Properties
  previewImageUrl?: ExternalLinkModel<ExternalLink>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}