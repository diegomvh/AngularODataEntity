import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { SectionLinks } from './sectionlinks.complex';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenotePage } from './onenotepage.entity';
import { SectionLinksModel } from './sectionlinks.model';
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { NotebookModel } from './notebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenotePageModel } from './onenotepage.model';
import { SectionLinksCollection } from './sectionlinks.collection';
import { OnenoteEntityHierarchyModelCollection } from './onenoteentityhierarchymodel.collection';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenotePageCollection } from './onenotepage.collection';
//#endregion

export interface OnenoteSection extends OnenoteEntityHierarchyModel {
  //#region ODataApi Properties
  isDefault?: boolean;
  links?: SectionLinks;
  pagesUrl?: string;
  pages?: OnenotePage[];
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
  //#endregion
}