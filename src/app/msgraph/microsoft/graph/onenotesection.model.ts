import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { SectionLinks } from './sectionlinks.entity';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenotePage } from './onenotepage.entity';
import { SectionLinksModel } from './sectionlinks.model';
import { NotebookModel } from './notebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { OnenotePageModel } from './onenotepage.model';
import { SectionLinksCollection } from './sectionlinks.collection';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
import { OnenotePageCollection } from './onenotepage.collection';
//#endregion

export class OnenoteSectionModel<E extends OnenoteSection> extends OnenoteEntityHierarchyModelModel<E> {
  //#region ODataApi Properties
  isDefault?: boolean;
  links?: SectionLinksModel<SectionLinks>;
  pagesUrl?: string;
  pages?: OnenotePageCollection<OnenotePage, OnenotePageModel<OnenotePage>>;
  parentNotebook?: NotebookModel<Notebook>;
  parentSectionGroup?: SectionGroupModel<SectionGroup>;
  //#endregion
  //#region ODataApi Actions
  public copyToNotebook(id: string, groupId: string, renameAs: string, siteCollectionId: string, siteId: string, options?: HttpOptions): Observable<OnenoteOperationModel<OnenoteOperation>> {
    var res = this._action<{id: string, groupId: string, renameAs: string, siteCollectionId: string, siteId: string}, OnenoteOperation>('microsoft.graph.copyToNotebook');
    res.segment.entitySet('');
    return res.call({id, groupId, renameAs, siteCollectionId, siteId}, 'model', options) as Observable<OnenoteOperationModel<OnenoteOperation>>;
  }
  public copyToSectionGroup(id: string, groupId: string, renameAs: string, siteCollectionId: string, siteId: string, options?: HttpOptions): Observable<OnenoteOperationModel<OnenoteOperation>> {
    var res = this._action<{id: string, groupId: string, renameAs: string, siteCollectionId: string, siteId: string}, OnenoteOperation>('microsoft.graph.copyToSectionGroup');
    res.segment.entitySet('');
    return res.call({id, groupId, renameAs, siteCollectionId, siteId}, 'model', options) as Observable<OnenoteOperationModel<OnenoteOperation>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}