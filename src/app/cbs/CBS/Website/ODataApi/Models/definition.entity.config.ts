import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Definition } from './definition.entity';
import { DefinitionModel } from './definition.model';
import { DefinitionCollection } from './definition.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const DefinitionConfig = {
  name: "Definition",
  model: DefinitionModel,
  collection: DefinitionCollection,
  annotations: [],
  fields: {
    UniqueId: {type: 'Edm.String', key: true, ref: 'UniqueId', nullable: false},
    Title: {type: 'Edm.String'},
    DefinitionType: {type: 'CBS.Website.ODataApi.Models.DefinitionType', nullable: false},
    DefinitionTypeInt: {type: 'Edm.Int32', nullable: false},
    Description: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    TaxonomyTags: {type: 'Edm.String', collection: true},
    Themes: {type: 'Edm.String', collection: true},
    Series: {type: 'Edm.String', collection: true},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false},
    Permalink: {type: 'Edm.String'},
    References: {type: 'CBS.Website.ODataApi.Models.LinkList'},
    Links: {type: 'CBS.Website.ODataApi.Models.LinkList'}
  }
} as StructuredTypeConfig<Definition>;
//#endregion