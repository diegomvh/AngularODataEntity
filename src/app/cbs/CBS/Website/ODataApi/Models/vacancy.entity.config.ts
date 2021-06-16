//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Vacancy } from './vacancy.entity';
import { VacancyModel } from './vacancy.model';
import { VacancyCollection } from './vacancy.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const VacancyEntityConfig = {
  name: "Vacancy",
  model: VacancyModel,
  collection: VacancyCollection,
  keys: [{ref: 'UniqueId'}],
  fields: {
    UniqueId: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    Image: {type: 'Edm.String'},
    ImageAlt: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Body: {type: 'Edm.String'},
    VacancyNumber: {type: 'Edm.String'},
    WorkingEnvironment: {type: 'Edm.String'},
    TheWork: {type: 'Edm.String'},
    YourProfile: {type: 'Edm.String'},
    TermsOfEmployment: {type: 'Edm.String'},
    MoreInformation: {type: 'Edm.String'},
    PublicationDate: {type: 'Edm.DateTimeOffset', nullable: false},
    ClosingDate: {type: 'Edm.DateTimeOffset', nullable: false},
    Engagement: {type: 'Edm.String'},
    VacancyCategory: {type: 'Edm.String', collection: true},
    HoursPerWeek: {type: 'Edm.String'},
    Salary: {type: 'Edm.String'},
    LevelOfEducation: {type: 'Edm.String', collection: true},
    WorkLocation: {type: 'Edm.String', collection: true},
    References: {type: 'CBS.Website.ODataApi.Models.LinkList'},
    Downloads: {type: 'CBS.Website.ODataApi.Models.LinkList'},
    Links: {type: 'CBS.Website.ODataApi.Models.LinkList'},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    SortOrder: {type: 'Edm.Int32', nullable: false},
    ItemNameLowerCase: {type: 'Edm.String'},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false},
    Permalink: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Vacancy>;
//#endregion