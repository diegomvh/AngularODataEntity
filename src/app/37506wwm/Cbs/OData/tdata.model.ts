import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { TData } from './tdata.entity';
import { TDataCollection } from './tdata.collection';
//#endregion

@Model()
export class TDataModel<E extends TData> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Geslacht?: string;
  
  
  @ModelField()
  Leeftijd?: string;
  
  
  @ModelField()
  Perioden?: string;
  
  
  @ModelField()
  AantalWWUitkeringen_1?: number;
  
  
  @ModelField()
  NoordNederland_2?: number;
  
  
  @ModelField()
  OostNederland_3?: number;
  
  
  @ModelField()
  WestNederland_4?: number;
  
  
  @ModelField()
  ZuidNederland_5?: number;
  
  
  @ModelField()
  GroningenPV_6?: number;
  
  
  @ModelField()
  FrieslandPV_7?: number;
  
  
  @ModelField()
  DrenthePV_8?: number;
  
  
  @ModelField()
  OverijsselPV_9?: number;
  
  
  @ModelField()
  FlevolandPV_10?: number;
  
  
  @ModelField()
  GelderlandPV_11?: number;
  
  
  @ModelField()
  UtrechtPV_12?: number;
  
  
  @ModelField()
  NoordHollandPV_13?: number;
  
  
  @ModelField()
  ZuidHollandPV_14?: number;
  
  
  @ModelField()
  ZeelandPV_15?: number;
  
  
  @ModelField()
  NoordBrabantPV_16?: number;
  
  
  @ModelField()
  LimburgPV_17?: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}