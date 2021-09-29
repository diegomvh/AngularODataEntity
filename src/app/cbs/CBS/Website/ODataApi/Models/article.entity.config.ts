//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Article } from './article.entity';
import { ArticleModel } from './article.model';
import { ArticleCollection } from './article.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ArticleEntityConfig = {
  name: "Article",
  model: ArticleModel,
  collection: ArticleCollection,
  keys: [{name: 'UniqueId'}],
  fields: {
    UniqueId: {type: 'Edm.String', nullable: false},
    ArticleType: {type: 'CBS.Website.ODataApi.Models.ArticleType', nullable: false},
    ArticleTypeInt: {type: 'Edm.Int32', nullable: false},
    Title: {type: 'Edm.String'},
    ReleaseTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    Image: {type: 'Edm.String'},
    ImageAlt: {type: 'Edm.String'},
    Category: {type: 'Edm.String'},
    Photographer: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Body: {type: 'Edm.String'},
    Footnote: {type: 'Edm.String'},
    Errata: {type: 'CBS.Website.ODataApi.Models.ErrataList'},
    Authors: {type: 'Edm.String'},
    Location: {type: 'Edm.String'},
    ISSN: {type: 'Edm.String'},
    ISBN: {type: 'Edm.String'},
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
    Created: {type: 'Edm.DateTimeOffset', nullable: false},
    Permalink: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Article>;
//#endregion