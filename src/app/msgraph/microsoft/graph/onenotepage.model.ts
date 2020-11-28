import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModelModel } from './onenoteentityschemaobjectmodel.model';
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
import { OnenotePagePreviewCollection } from './onenotepagepreview.collection';
import { OnenotePatchContentCommandCollection } from './onenotepatchcontentcommand.collection';
import { PageLinksCollection } from './pagelinks.collection';
import { NotebookCollection } from './notebook.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
import { OnenotePageCollection } from './onenotepage.collection';
//#endregion

export class OnenotePageModel<E extends OnenotePage> extends OnenoteEntitySchemaObjectModelModel<E> {
  //#region ODataApi Properties
  content?: any;
  contentUrl?: string;
  createdByAppId?: string;
  lastModifiedDateTime?: Date;
  level?: number;
  links?: PageLinksModel<PageLinks>;
  order?: number;
  title?: string;
  userTags?: string[];
  parentNotebook?: NotebookModel<Notebook>;
  parentSection?: OnenoteSectionModel<OnenoteSection>;
  //#endregion
  //#region ODataApi Actions
  public copyToSection(id: string, groupId: string, siteCollectionId: string, siteId: string, options?: HttpOptions): Observable<OnenoteOperationModel<OnenoteOperation>> {
    var res = this._action<{id: string, groupId: string, siteCollectionId: string, siteId: string}, OnenoteOperation>('microsoft.graph.copyToSection');
    res.segment.entitySet('');
    return res.call({id, groupId, siteCollectionId, siteId}, 'model', options) as Observable<OnenoteOperationModel<OnenoteOperation>>;
  }
  public onenotePatchContent(commands: OnenotePatchContentCommand[], options?: HttpOptions): Observable<any> {
    var res = this._action<{commands: OnenotePatchContentCommand[]}, any>('microsoft.graph.onenotePatchContent');
    res.segment.entitySet('');
    return res.call({commands}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  public preview(options?: HttpOptions): Observable<OnenotePagePreviewModel<OnenotePagePreview>> {
    var res = this._function<null, OnenotePagePreview>('microsoft.graph.preview');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<OnenotePagePreviewModel<OnenotePagePreview>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}