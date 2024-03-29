﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TData } from './tdata.entity';
import { TDataModel } from './tdata.model';
import { TDataCollection } from './tdata.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TDataEntityConfig = {
  name: "TData",
  model: TDataModel,
  collection: TDataCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Geslacht: {type: 'Edm.String'},
    Leeftijd: {type: 'Edm.String'},
    Perioden: {type: 'Edm.String'},
    AantalWWUitkeringen_1: {type: 'Edm.Int32'},
    NoordNederland_2: {type: 'Edm.Int32'},
    OostNederland_3: {type: 'Edm.Int32'},
    WestNederland_4: {type: 'Edm.Int32'},
    ZuidNederland_5: {type: 'Edm.Int32'},
    GroningenPV_6: {type: 'Edm.Int32'},
    FrieslandPV_7: {type: 'Edm.Int32'},
    DrenthePV_8: {type: 'Edm.Int32'},
    OverijsselPV_9: {type: 'Edm.Int32'},
    FlevolandPV_10: {type: 'Edm.Int32'},
    GelderlandPV_11: {type: 'Edm.Int32'},
    UtrechtPV_12: {type: 'Edm.Int32'},
    NoordHollandPV_13: {type: 'Edm.Int32'},
    ZuidHollandPV_14: {type: 'Edm.Int32'},
    ZeelandPV_15: {type: 'Edm.Int32'},
    NoordBrabantPV_16: {type: 'Edm.Int32'},
    LimburgPV_17: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<TData>;
//#endregion