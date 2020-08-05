import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Article } from './article.entity';
//#endregion

export const ArticleConfig = {
  name: "Article",
  annotations: [],
  fields: {
    UniqueId: {type: 'Edm.String', key: true, ref: 'UniqueId', nullable: false},
    ArticleType: {type: 'BS.Website.ODataApi.Models.ArticleType', nullable: false},
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
    Errata: {type: 'BS.Website.ODataApi.Models.ErrataList'},
    Authors: {type: 'Edm.String'},
    Location: {type: 'Edm.String'},
    ISSN: {type: 'Edm.String'},
    ISBN: {type: 'Edm.String'},
    TaxonomyTags: {type: 'Edm.String', collection: true},
    Themes: {type: 'Edm.String', collection: true},
    Series: {type: 'Edm.String', collection: true},
    References: {type: 'BS.Website.ODataApi.Models.LinkList'},
    Downloads: {type: 'BS.Website.ODataApi.Models.LinkList'},
    Links: {type: 'BS.Website.ODataApi.Models.LinkList'},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    SortOrder: {type: 'Edm.Int32', nullable: false},
    ItemNameLowerCase: {type: 'Edm.String'},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false},
    Permalink: {type: 'Edm.String'}
  }
} as EntityConfig<Article>;