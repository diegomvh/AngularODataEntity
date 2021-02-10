import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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

export class VacancyModel<E extends Vacancy> extends ODataModel<E> {
  //#region ODataApi Properties
  UniqueId!: string;
  Title?: string;
  Url?: string;
  MetaDescription?: string;
  Image?: string;
  ImageAlt?: string;
  LeadText?: string;
  Body?: string;
  VacancyNumber?: string;
  WorkingEnvironment?: string;
  TheWork?: string;
  YourProfile?: string;
  TermsOfEmployment?: string;
  MoreInformation?: string;
  PublicationDate!: Date;
  ClosingDate!: Date;
  Engagement?: string;
  VacancyCategory?: string[];
  HoursPerWeek?: string;
  Salary?: string;
  LevelOfEducation?: string[];
  WorkLocation?: string[];
  References?: LinkListModel<LinkList>;
  Downloads?: LinkListModel<LinkList>;
  Links?: LinkListModel<LinkList>;
  Language?: string;
  Version!: number;
  SortOrder!: number;
  ItemNameLowerCase?: string;
  Updated!: Date;
  Created!: Date;
  Permalink?: string;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}