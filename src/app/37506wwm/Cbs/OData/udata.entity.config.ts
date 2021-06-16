//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { UData } from './udata.entity';
import { UDataModel } from './udata.model';
import { UDataCollection } from './udata.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const UDataEntityConfig = {
  name: "UData",
  model: UDataModel,
  collection: UDataCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Geslacht: {type: 'Edm.String'},
    Leeftijd: {type: 'Edm.String'},
    Perioden: {type: 'Edm.String'},
    AantalWWUitkeringen_1: {type: 'Edm.String'},
    NoordNederland_2: {type: 'Edm.String'},
    OostNederland_3: {type: 'Edm.String'},
    WestNederland_4: {type: 'Edm.String'},
    ZuidNederland_5: {type: 'Edm.String'},
    GroningenPV_6: {type: 'Edm.String'},
    FrieslandPV_7: {type: 'Edm.String'},
    DrenthePV_8: {type: 'Edm.String'},
    OverijsselPV_9: {type: 'Edm.String'},
    FlevolandPV_10: {type: 'Edm.String'},
    GelderlandPV_11: {type: 'Edm.String'},
    UtrechtPV_12: {type: 'Edm.String'},
    NoordHollandPV_13: {type: 'Edm.String'},
    ZuidHollandPV_14: {type: 'Edm.String'},
    ZeelandPV_15: {type: 'Edm.String'},
    NoordBrabantPV_16: {type: 'Edm.String'},
    LimburgPV_17: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<UData>;
//#endregion