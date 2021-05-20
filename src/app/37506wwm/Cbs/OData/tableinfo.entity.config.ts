import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TableInfo } from './tableinfo.entity';
import { TableInfoModel } from './tableinfo.model';
import { TableInfoCollection } from './tableinfo.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const TableInfoEntityConfig = {
  name: "TableInfo",
  model: TableInfoModel,
  collection: TableInfoCollection,
  keys: [{ref: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Title: {type: 'Edm.String'},
    ShortTitle: {type: 'Edm.String'},
    Identifier: {type: 'Edm.String'},
    Summary: {type: 'Edm.String'},
    Modified: {type: 'Edm.DateTime'},
    ReasonDelivery: {type: 'Edm.String'},
    ExplanatoryText: {type: 'Edm.String'},
    Language: {type: 'Edm.String'},
    Catalog: {type: 'Edm.String'},
    Frequency: {type: 'Edm.String'},
    Period: {type: 'Edm.String'},
    ShortDescription: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    DefaultPresentation: {type: 'Edm.String'},
    DefaultSelection: {type: 'Edm.String'},
    GraphTypes: {type: 'Edm.String'},
    OutputStatus: {type: 'Edm.String'},
    Source: {type: 'Edm.String'},
    MetaDataModified: {type: 'Edm.DateTime'},
    SearchPriority: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TableInfo>;
//#endregion