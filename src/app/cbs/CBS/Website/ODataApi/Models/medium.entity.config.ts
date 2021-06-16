//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Medium } from './medium.entity';
import { MediumModel } from './medium.model';
import { MediumCollection } from './medium.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const MediumEntityConfig = {
  name: "Medium",
  model: MediumModel,
  collection: MediumCollection,
  keys: [{ref: 'UniqueId'}],
  fields: {
    UniqueId: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    MediaType: {type: 'CBS.Website.ODataApi.Models.MediaType', nullable: false},
    MediaTypeInt: {type: 'Edm.Int32', nullable: false},
    ReleaseTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Description: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    TaxonomyTags: {type: 'Edm.String', collection: true},
    Themes: {type: 'Edm.String', collection: true},
    Series: {type: 'Edm.String', collection: true},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    SortOrder: {type: 'Edm.Int32', nullable: false},
    ItemNameLowerCase: {type: 'Edm.String'},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false},
    Permalink: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Medium>;
//#endregion