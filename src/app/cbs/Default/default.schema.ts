//#region AngularOData Imports
import { 
  SchemaConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ContainerContainer } from './container.container';
//#endregion

//#region ODataApi SchemaConfig
export const DefaultSchema = {
  namespace: "Default",
  enums: [],
  entities: [],
  callables: [{
    name: 'GetArticlesByTheme',
    bound: false,
    composable: false,
    parameters: { Theme: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.Article", collection: true }
  }, {
    name: 'GetArticlesBySeries',
    bound: false,
    composable: false,
    parameters: { Series: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.Article", collection: true }
  }, {
    name: 'GetArticlesByTaxonomyTag',
    bound: false,
    composable: false,
    parameters: { Tag: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.Article", collection: true }
  }, {
    name: 'GetArticlesByArticleType',
    bound: false,
    composable: false,
    parameters: { ArticleType: {type: 'CBS.Website.ODataApi.Models.ArticleType', nullable: false} },
    return: { type: "CBS.Website.ODataApi.Models.Article", collection: true }
  }, {
    name: 'GetArticlesByTableId',
    bound: false,
    composable: false,
    parameters: { TableId: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.Article", collection: true }
  }, {
    name: 'GetMediaByMediaType',
    bound: false,
    composable: false,
    parameters: { MediaType: {type: 'CBS.Website.ODataApi.Models.MediaType', nullable: false} },
    return: { type: "CBS.Website.ODataApi.Models.Medium", collection: true }
  }, {
    name: 'GetPagesByTheme',
    bound: false,
    composable: false,
    parameters: { Theme: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.Page", collection: true }
  }, {
    name: 'GetPagesBySeries',
    bound: false,
    composable: false,
    parameters: { Series: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.Page", collection: true }
  }, {
    name: 'GetPagesByTaxonomyTag',
    bound: false,
    composable: false,
    parameters: { Tag: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.Page", collection: true }
  }, {
    name: 'GetPagesByPageType',
    bound: false,
    composable: false,
    parameters: { PageType: {type: 'CBS.Website.ODataApi.Models.PageType', nullable: false} },
    return: { type: "CBS.Website.ODataApi.Models.Page", collection: true }
  }, {
    name: 'GetSearchResultsByTheme',
    bound: false,
    composable: false,
    parameters: { Theme: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.SearchResultItem", collection: true }
  }, {
    name: 'GetSearchResultsByTemplate',
    bound: false,
    composable: false,
    parameters: { Template: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.SearchResultItem", collection: true }
  }, {
    name: 'GetSearchResultsByArticleType',
    bound: false,
    composable: false,
    parameters: { ArticleType: {type: 'CBS.Website.ODataApi.Models.ArticleType', nullable: false} },
    return: { type: "CBS.Website.ODataApi.Models.SearchResultItem", collection: true }
  }, {
    name: 'GetSearchResultsByWord',
    bound: false,
    composable: false,
    parameters: { Word: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.SearchResultItem", collection: true }
  }, {
    name: 'GetSearchResultsByWordAndTemplateId',
    bound: false,
    composable: false,
    parameters: { Word: {type: 'Edm.String'}, TemplateId: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.SearchResultItem", collection: true }
  }, {
    name: 'GetSearchResultsByPath',
    bound: false,
    composable: false,
    parameters: { Path: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.SearchResultItem", collection: true }
  }, {
    name: 'GetSearchResultsByPathAndTemplateId',
    bound: false,
    composable: false,
    parameters: { Path: {type: 'Edm.String'}, TemplateId: {type: 'Edm.String'} },
    return: { type: "CBS.Website.ODataApi.Models.SearchResultItem", collection: true }
  }],
  containers: [ContainerContainer]
} as SchemaConfig;
//#endregion