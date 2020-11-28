import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenotePagePreview } from './onenotepagepreview.entity';
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.entity';
import { OnenotePagePreviewModel } from './onenotepagepreview.model';
import { OnenotePagePreviewLinksModel } from './onenotepagepreviewlinks.model';
import { OnenotePagePreviewLinksCollection } from './onenotepagepreviewlinks.collection';
//#endregion

export class OnenotePagePreviewCollection<E extends OnenotePagePreview, M extends OnenotePagePreviewModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}