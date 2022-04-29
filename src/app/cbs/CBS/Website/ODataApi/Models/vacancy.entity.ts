//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LinkList } from './linklist.complex';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

export interface Vacancy {
  //#region ODataApiGen Properties
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
  EmploymentType?: string[];
  MoreInformation?: string;
  PublicationDate: Date;
  ClosingDate: Date;
  Engagement?: string;
  VacancyCategory?: string[];
  HoursPerWeek?: string;
  Salary?: string;
  MinSalary: number;
  MaxSalary: number;
  SalaryPeriod?: string;
  LevelOfEducation?: string[];
  WorkLocation?: string[];
  Location?: string;
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
  BreadCrumb?: LinkList;
  //#endregion
}