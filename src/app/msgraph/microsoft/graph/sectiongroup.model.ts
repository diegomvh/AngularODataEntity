import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { NotebookModel } from './notebook.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
//#endregion

export class SectionGroupModel<E extends SectionGroup> extends OnenoteEntityHierarchyModelModel<E> {
  //#region ODataApi Properties
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  parentNotebook?: NotebookModel<Notebook>;
  parentSectionGroup?: SectionGroupModel<SectionGroup>;
  sectionGroups?: SectionGroupCollection<SectionGroup, SectionGroupModel<SectionGroup>>;
  sections?: OnenoteSectionCollection<OnenoteSection, OnenoteSectionModel<OnenoteSection>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}