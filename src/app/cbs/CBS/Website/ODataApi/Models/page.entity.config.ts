//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Page } from './page.entity';
import { PageModel } from './page.model';
import { PageCollection } from './page.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const PageEntityConfig = {
  name: "Page",
  model: PageModel,
  collection: PageCollection,
  keys: [{ref: 'UniqueId'}],
  fields: {
    UniqueId: {type: 'Edm.String', nullable: false},
    PageType: {type: 'CBS.Website.ODataApi.Models.PageType', nullable: false},
    PageTypeInt: {type: 'Edm.Int32', nullable: false},
    Title: {type: 'Edm.String'},
    SubTitle: {type: 'Edm.String'},
    Edition: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    Image: {type: 'Edm.String'},
    ImageAlt: {type: 'Edm.String'},
    Category: {type: 'Edm.String', collection: true},
    Photographer: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Body: {type: 'Edm.String'},
    Footnote: {type: 'Edm.String'},
    Authors: {type: 'Edm.String'},
    Location: {type: 'Edm.String'},
    TaxonomyTags: {type: 'Edm.String', collection: true},
    Themes: {type: 'Edm.String', collection: true},
    Series: {type: 'Edm.String', collection: true},
    References: {type: 'CBS.Website.ODataApi.Models.LinkList'},
    Downloads: {type: 'CBS.Website.ODataApi.Models.LinkList'},
    Links: {type: 'CBS.Website.ODataApi.Models.LinkList'},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    SortOrder: {type: 'Edm.Int32', nullable: false},
    ItemNameLowerCase: {type: 'Edm.String'},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    ReleaseTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false},
    Permalink: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Page>;
//#endregion