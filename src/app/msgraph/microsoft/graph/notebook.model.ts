import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { CopyNotebookModel } from './copynotebookmodel.entity';
import { NotebookLinks } from './notebooklinks.entity';
import { RecentNotebook } from './recentnotebook.entity';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { CopyNotebookModelModel } from './copynotebookmodel.model';
import { NotebookLinksModel } from './notebooklinks.model';
import { RecentNotebookModel } from './recentnotebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { CopyNotebookModelCollection } from './copynotebookmodel.collection';
import { NotebookLinksCollection } from './notebooklinks.collection';
import { RecentNotebookCollection } from './recentnotebook.collection';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
//#endregion

export class NotebookModel<E extends Notebook> extends OnenoteEntityHierarchyModelModel<E> {
  //#region ODataApi Properties
  isDefault?: boolean;
  isShared?: boolean;
  links?: NotebookLinksModel<NotebookLinks>;
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  userRole?: OnenoteUserRole;
  sectionGroups?: SectionGroupCollection<SectionGroup, SectionGroupModel<SectionGroup>>;
  sections?: OnenoteSectionCollection<OnenoteSection, OnenoteSectionModel<OnenoteSection>>;
  //#endregion
  //#region ODataApi Actions
  public copyNotebook(groupId: string, renameAs: string, notebookFolder: string, siteCollectionId: string, siteId: string, options?: HttpOptions): Observable<OnenoteOperationModel<OnenoteOperation>> {
    var res = this._action<{groupId: string, renameAs: string, notebookFolder: string, siteCollectionId: string, siteId: string}, OnenoteOperation>('microsoft.graph.copyNotebook');
    res.segment.entitySet('');
    return res.call({groupId, renameAs, notebookFolder, siteCollectionId, siteId}, 'model', options) as Observable<OnenoteOperationModel<OnenoteOperation>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}