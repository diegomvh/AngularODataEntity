import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModelCollection } from './onenoteentityschemaobjectmodel.collection';
import { OnenotePagePreview } from './onenotepagepreview.complex';
import { OnenotePatchContentCommand } from './onenotepatchcontentcommand.complex';
import { PageLinks } from './pagelinks.complex';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenotePage } from './onenotepage.entity';
import { OnenotePagePreviewModel } from './onenotepagepreview.model';
import { OnenotePatchContentCommandModel } from './onenotepatchcontentcommand.model';
import { PageLinksModel } from './pagelinks.model';
import { NotebookModel } from './notebook.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { OnenotePageModel } from './onenotepage.model';
import { OnenotePagePreviewCollection } from './onenotepagepreview.collection';
import { OnenotePatchContentCommandCollection } from './onenotepatchcontentcommand.collection';
import { PageLinksCollection } from './pagelinks.collection';
import { NotebookCollection } from './notebook.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
//#endregion

export class OnenotePageCollection<E extends OnenotePage, M extends OnenotePageModel<E>> extends OnenoteEntitySchemaObjectModelCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}