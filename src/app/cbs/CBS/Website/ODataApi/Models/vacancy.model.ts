import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LinkList } from './linklist.complex';
import { Vacancy } from './vacancy.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { VacancyCollection } from './vacancy.collection';
//#endregion

@Model()
export class VacancyModel<E extends Vacancy> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UniqueId!: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  Url?: string;
  
  
  @ModelField()
  MetaDescription?: string;
  
  
  @ModelField()
  Image?: string;
  
  
  @ModelField()
  ImageAlt?: string;
  
  
  @ModelField()
  LeadText?: string;
  
  
  @ModelField()
  Body?: string;
  
  
  @ModelField()
  VacancyNumber?: string;
  
  
  @ModelField()
  WorkingEnvironment?: string;
  
  
  @ModelField()
  TheWork?: string;
  
  
  @ModelField()
  YourProfile?: string;
  
  
  @ModelField()
  TermsOfEmployment?: string;
  
  
  @ModelField()
  MoreInformation?: string;
  
  
  @ModelField()
  PublicationDate!: Date;
  
  
  @ModelField()
  ClosingDate!: Date;
  
  
  @ModelField()
  Engagement?: string;
  
  
  @ModelField()
  VacancyCategory?: string[];
  
  
  @ModelField()
  HoursPerWeek?: string;
  
  
  @ModelField()
  Salary?: string;
  
  
  @ModelField()
  LevelOfEducation?: string[];
  
  
  @ModelField()
  WorkLocation?: string[];
  
  
  @ModelField()
  References?: LinkListModel<LinkList>;
  
  
  @ModelField()
  Downloads?: LinkListModel<LinkList>;
  
  
  @ModelField()
  Links?: LinkListModel<LinkList>;
  
  
  @ModelField()
  Language?: string;
  
  
  @ModelField()
  Version!: number;
  
  
  @ModelField()
  SortOrder!: number;
  
  
  @ModelField()
  ItemNameLowerCase?: string;
  
  
  @ModelField()
  Updated!: Date;
  
  
  @ModelField()
  Created!: Date;
  
  
  @ModelField()
  Permalink?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}