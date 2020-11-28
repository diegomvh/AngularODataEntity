import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DefinitionType } from './definitiontype.enum';
import { LinkList } from './linklist.complex';
import { Definition } from './definition.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { DefinitionCollection } from './definition.collection';
//#endregion

export class DefinitionModel<E extends Definition> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId: string;
  Title?: string;
  DefinitionType: DefinitionType;
  DefinitionTypeInt: number;
  Description?: string;
  LeadText?: string;
  Url?: string;
  MetaDescription?: string;
  TaxonomyTags?: string[];
  Themes?: string[];
  Series?: string[];
  Language?: string;
  Version: number;
  Updated: Date;
  Created: Date;
  Permalink?: string;
  References?: LinkListModel<LinkList>;
  Links?: LinkListModel<LinkList>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}