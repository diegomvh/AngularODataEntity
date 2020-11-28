import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModelCollection } from './onenoteentityhierarchymodel.collection';
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { CopyNotebookModel } from './copynotebookmodel.complex';
import { NotebookLinks } from './notebooklinks.complex';
import { RecentNotebook } from './recentnotebook.complex';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { CopyNotebookModelModel } from './copynotebookmodel.model';
import { NotebookLinksModel } from './notebooklinks.model';
import { RecentNotebookModel } from './recentnotebook.model';
import { NotebookModel } from './notebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { CopyNotebookModelCollection } from './copynotebookmodel.collection';
import { NotebookLinksCollection } from './notebooklinks.collection';
import { RecentNotebookCollection } from './recentnotebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
//#endregion

export class NotebookCollection<E extends Notebook, M extends NotebookModel<E>> extends OnenoteEntityHierarchyModelCollection<E, M> {
  //#region ODataApi Actions
  public getNotebookFromWebUrl(webUrl: string, options?: HttpOptions): Observable<CopyNotebookModelModel<CopyNotebookModel>> {
    var res = this._action<{webUrl: string}, CopyNotebookModel>('microsoft.graph.getNotebookFromWebUrl');
    res.segment.entitySet('');
    return res.call({webUrl}, 'model', options) as Observable<CopyNotebookModelModel<CopyNotebookModel>>;
  }
  //#endregion
  //#region ODataApi Functions
  public getRecentNotebooks(includePersonalNotebooks: boolean, options?: HttpOptions): Observable<RecentNotebookCollection<RecentNotebook, RecentNotebookModel<RecentNotebook>>> {
    var res = this._function<{includePersonalNotebooks: boolean}, RecentNotebook>('microsoft.graph.getRecentNotebooks');
    res.segment.entitySet('');
    return res.call({includePersonalNotebooks}, 'collection', options) as Observable<RecentNotebookCollection<RecentNotebook, RecentNotebookModel<RecentNotebook>>>;
  }
  //#endregion
}