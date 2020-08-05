import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContainerContainer } from './container.container';
//#endregion

export const DefaultSchema = {
  namespace: "Default",
  enums: [],
  entities: [],
  callables: [{
    name: 'GetArticlesByTheme',
    bound: false,
    composable: false,
    parameters: { Theme: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.Article"
  }, {
    name: 'GetArticlesBySeries',
    bound: false,
    composable: false,
    parameters: { Series: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.Article"
  }, {
    name: 'GetArticlesByTaxonomyTag',
    bound: false,
    composable: false,
    parameters: { Tag: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.Article"
  }, {
    name: 'GetArticlesByArticleType',
    bound: false,
    composable: false,
    parameters: { ArticleType: {type: 'BS.Website.ODataApi.Models.ArticleType', nullable: false} },
    return: "BS.Website.ODataApi.Models.Article"
  }, {
    name: 'GetArticlesByTableId',
    bound: false,
    composable: false,
    parameters: { TableId: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.Article"
  }, {
    name: 'GetMediaByMediaType',
    bound: false,
    composable: false,
    parameters: { MediaType: {type: 'BS.Website.ODataApi.Models.MediaType', nullable: false} },
    return: "BS.Website.ODataApi.Models.Medium"
  }, {
    name: 'GetPagesByTheme',
    bound: false,
    composable: false,
    parameters: { Theme: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.Page"
  }, {
    name: 'GetPagesBySeries',
    bound: false,
    composable: false,
    parameters: { Series: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.Page"
  }, {
    name: 'GetPagesByTaxonomyTag',
    bound: false,
    composable: false,
    parameters: { Tag: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.Page"
  }, {
    name: 'GetPagesByPageType',
    bound: false,
    composable: false,
    parameters: { PageType: {type: 'BS.Website.ODataApi.Models.PageType', nullable: false} },
    return: "BS.Website.ODataApi.Models.Page"
  }, {
    name: 'GetSearchResultsByTheme',
    bound: false,
    composable: false,
    parameters: { Theme: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.SearchResultItem"
  }, {
    name: 'GetSearchResultsByTemplate',
    bound: false,
    composable: false,
    parameters: { Template: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.SearchResultItem"
  }, {
    name: 'GetSearchResultsByArticleType',
    bound: false,
    composable: false,
    parameters: { ArticleType: {type: 'BS.Website.ODataApi.Models.ArticleType', nullable: false} },
    return: "BS.Website.ODataApi.Models.SearchResultItem"
  }, {
    name: 'GetSearchResultsByWord',
    bound: false,
    composable: false,
    parameters: { Word: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.SearchResultItem"
  }, {
    name: 'GetSearchResultsByWordAndTemplateId',
    bound: false,
    composable: false,
    parameters: { Word: {type: 'Edm.String'}, TemplateId: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.SearchResultItem"
  }, {
    name: 'GetSearchResultsByPath',
    bound: false,
    composable: false,
    parameters: { Path: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.SearchResultItem"
  }, {
    name: 'GetSearchResultsByPathAndTemplateId',
    bound: false,
    composable: false,
    parameters: { Path: {type: 'Edm.String'}, TemplateId: {type: 'Edm.String'} },
    return: "BS.Website.ODataApi.Models.SearchResultItem"
  }],
  containers: [ContainerContainer]
} as SchemaConfig;