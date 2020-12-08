import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UData } from './udata.entity';
import { UDataCollection } from './udata.collection';
//#endregion

export class UDataModel<E extends UData> extends ODataModel<E> {
  //#region ODataApi Properties
  ID!: number;
  Geslacht?: string;
  Leeftijd?: string;
  Perioden?: string;
  AantalWWUitkeringen_1?: string;
  NoordNederland_2?: string;
  OostNederland_3?: string;
  WestNederland_4?: string;
  ZuidNederland_5?: string;
  GroningenPV_6?: string;
  FrieslandPV_7?: string;
  DrenthePV_8?: string;
  OverijsselPV_9?: string;
  FlevolandPV_10?: string;
  GelderlandPV_11?: string;
  UtrechtPV_12?: string;
  NoordHollandPV_13?: string;
  ZuidHollandPV_14?: string;
  ZeelandPV_15?: string;
  NoordBrabantPV_16?: string;
  LimburgPV_17?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}