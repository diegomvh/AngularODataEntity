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
import { UData } from './udata.entity';
import { UDataCollection } from './udata.collection';
//#endregion

@Model()
export class UDataModel<E extends UData> extends ODataModel<E> {
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
  AantalWWUitkeringen_1?: string;
  
  
  @ModelField()
  NoordNederland_2?: string;
  
  
  @ModelField()
  OostNederland_3?: string;
  
  
  @ModelField()
  WestNederland_4?: string;
  
  
  @ModelField()
  ZuidNederland_5?: string;
  
  
  @ModelField()
  GroningenPV_6?: string;
  
  
  @ModelField()
  FrieslandPV_7?: string;
  
  
  @ModelField()
  DrenthePV_8?: string;
  
  
  @ModelField()
  OverijsselPV_9?: string;
  
  
  @ModelField()
  FlevolandPV_10?: string;
  
  
  @ModelField()
  GelderlandPV_11?: string;
  
  
  @ModelField()
  UtrechtPV_12?: string;
  
  
  @ModelField()
  NoordHollandPV_13?: string;
  
  
  @ModelField()
  ZuidHollandPV_14?: string;
  
  
  @ModelField()
  ZeelandPV_15?: string;
  
  
  @ModelField()
  NoordBrabantPV_16?: string;
  
  
  @ModelField()
  LimburgPV_17?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}