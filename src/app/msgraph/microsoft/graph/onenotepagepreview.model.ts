import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenotePagePreview } from './onenotepagepreview.entity';
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.entity';
import { OnenotePagePreviewLinksModel } from './onenotepagepreviewlinks.model';
import { OnenotePagePreviewCollection } from './onenotepagepreview.collection';
import { OnenotePagePreviewLinksCollection } from './onenotepagepreviewlinks.collection';
//#endregion

export class OnenotePagePreviewModel<E extends OnenotePagePreview> extends ODataModel<E> {
  //#region ODataApi Properties
  links?: OnenotePagePreviewLinksModel<OnenotePagePreviewLinks>;
  previewText?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}