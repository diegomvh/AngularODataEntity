import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TData } from './tdata.entity';
import { TDataCollection } from './tdata.collection';
//#endregion

export class TDataModel<E extends TData> extends ODataModel<E> {
  //#region ODataApi Properties
  ID!: number;
  Geslacht?: string;
  Leeftijd?: string;
  Perioden?: string;
  AantalWWUitkeringen_1?: number;
  NoordNederland_2?: number;
  OostNederland_3?: number;
  WestNederland_4?: number;
  ZuidNederland_5?: number;
  GroningenPV_6?: number;
  FrieslandPV_7?: number;
  DrenthePV_8?: number;
  OverijsselPV_9?: number;
  FlevolandPV_10?: number;
  GelderlandPV_11?: number;
  UtrechtPV_12?: number;
  NoordHollandPV_13?: number;
  ZuidHollandPV_14?: number;
  ZeelandPV_15?: number;
  NoordBrabantPV_16?: number;
  LimburgPV_17?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}