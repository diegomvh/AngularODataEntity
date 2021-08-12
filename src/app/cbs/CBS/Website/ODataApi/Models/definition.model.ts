import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { DefinitionType } from './definitiontype.enum';
import { LinkList } from './linklist.complex';
import { Definition } from './definition.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { DefinitionCollection } from './definition.collection';
//#endregion

@Model()
export class DefinitionModel<E extends Definition> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UniqueId!: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  DefinitionType!: DefinitionType;
  
  
  @ModelField()
  DefinitionTypeInt!: number;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  LeadText?: string;
  
  
  @ModelField()
  Url?: string;
  
  
  @ModelField()
  MetaDescription?: string;
  
  
  @ModelField()
  TaxonomyTags?: string[];
  
  
  @ModelField()
  Themes?: string[];
  
  
  @ModelField()
  Series?: string[];
  
  
  @ModelField()
  Language?: string;
  
  
  @ModelField()
  Version!: number;
  
  
  @ModelField()
  Updated!: Date;
  
  
  @ModelField()
  Created!: Date;
  
  
  @ModelField()
  Permalink?: string;
  
  
  @ModelField()
  References?: LinkListModel<LinkList>;
  
  
  @ModelField()
  Links?: LinkListModel<LinkList>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}