import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { LinkList } from './linklist.complex';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

export interface Vacancy {
  //#region ODataApi Properties
  UniqueId: string;
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
  PublicationDate: Date;
  ClosingDate: Date;
  Engagement?: string;
  VacancyCategory?: string[];
  HoursPerWeek?: string;
  Salary?: string;
  LevelOfEducation?: string[];
  WorkLocation?: string[];
  References?: LinkList;
  Downloads?: LinkList;
  Links?: LinkList;
  Language?: string;
  Version: number;
  SortOrder: number;
  ItemNameLowerCase?: string;
  Updated: Date;
  Created: Date;
  Permalink?: string;
  //#endregion
}