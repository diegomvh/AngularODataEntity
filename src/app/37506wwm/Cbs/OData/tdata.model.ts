import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TData } from './tdata.entity';
import { TDataCollection } from './tdata.collection';
//#endregion

@Model()
export class TDataModel<E extends TData> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ID!: number;
  public $ID() {
    return this.property<number>('ID');
  }
  public getID(options?: ODataOptions) {
    return this.getValue<number>('ID', options) as Observable<number>;
  }
  
  @ModelField()
  Geslacht?: string;
  public $Geslacht() {
    return this.property<string>('Geslacht');
  }
  public getGeslacht(options?: ODataOptions) {
    return this.getValue<string>('Geslacht', options) as Observable<string>;
  }
  
  @ModelField()
  Leeftijd?: string;
  public $Leeftijd() {
    return this.property<string>('Leeftijd');
  }
  public getLeeftijd(options?: ODataOptions) {
    return this.getValue<string>('Leeftijd', options) as Observable<string>;
  }
  
  @ModelField()
  Perioden?: string;
  public $Perioden() {
    return this.property<string>('Perioden');
  }
  public getPerioden(options?: ODataOptions) {
    return this.getValue<string>('Perioden', options) as Observable<string>;
  }
  
  @ModelField()
  AantalWWUitkeringen_1?: number;
  public $AantalWWUitkeringen_1() {
    return this.property<number>('AantalWWUitkeringen_1');
  }
  public getAantalWWUitkeringen_1(options?: ODataOptions) {
    return this.getValue<number>('AantalWWUitkeringen_1', options) as Observable<number>;
  }
  
  @ModelField()
  NoordNederland_2?: number;
  public $NoordNederland_2() {
    return this.property<number>('NoordNederland_2');
  }
  public getNoordNederland_2(options?: ODataOptions) {
    return this.getValue<number>('NoordNederland_2', options) as Observable<number>;
  }
  
  @ModelField()
  OostNederland_3?: number;
  public $OostNederland_3() {
    return this.property<number>('OostNederland_3');
  }
  public getOostNederland_3(options?: ODataOptions) {
    return this.getValue<number>('OostNederland_3', options) as Observable<number>;
  }
  
  @ModelField()
  WestNederland_4?: number;
  public $WestNederland_4() {
    return this.property<number>('WestNederland_4');
  }
  public getWestNederland_4(options?: ODataOptions) {
    return this.getValue<number>('WestNederland_4', options) as Observable<number>;
  }
  
  @ModelField()
  ZuidNederland_5?: number;
  public $ZuidNederland_5() {
    return this.property<number>('ZuidNederland_5');
  }
  public getZuidNederland_5(options?: ODataOptions) {
    return this.getValue<number>('ZuidNederland_5', options) as Observable<number>;
  }
  
  @ModelField()
  GroningenPV_6?: number;
  public $GroningenPV_6() {
    return this.property<number>('GroningenPV_6');
  }
  public getGroningenPV_6(options?: ODataOptions) {
    return this.getValue<number>('GroningenPV_6', options) as Observable<number>;
  }
  
  @ModelField()
  FrieslandPV_7?: number;
  public $FrieslandPV_7() {
    return this.property<number>('FrieslandPV_7');
  }
  public getFrieslandPV_7(options?: ODataOptions) {
    return this.getValue<number>('FrieslandPV_7', options) as Observable<number>;
  }
  
  @ModelField()
  DrenthePV_8?: number;
  public $DrenthePV_8() {
    return this.property<number>('DrenthePV_8');
  }
  public getDrenthePV_8(options?: ODataOptions) {
    return this.getValue<number>('DrenthePV_8', options) as Observable<number>;
  }
  
  @ModelField()
  OverijsselPV_9?: number;
  public $OverijsselPV_9() {
    return this.property<number>('OverijsselPV_9');
  }
  public getOverijsselPV_9(options?: ODataOptions) {
    return this.getValue<number>('OverijsselPV_9', options) as Observable<number>;
  }
  
  @ModelField()
  FlevolandPV_10?: number;
  public $FlevolandPV_10() {
    return this.property<number>('FlevolandPV_10');
  }
  public getFlevolandPV_10(options?: ODataOptions) {
    return this.getValue<number>('FlevolandPV_10', options) as Observable<number>;
  }
  
  @ModelField()
  GelderlandPV_11?: number;
  public $GelderlandPV_11() {
    return this.property<number>('GelderlandPV_11');
  }
  public getGelderlandPV_11(options?: ODataOptions) {
    return this.getValue<number>('GelderlandPV_11', options) as Observable<number>;
  }
  
  @ModelField()
  UtrechtPV_12?: number;
  public $UtrechtPV_12() {
    return this.property<number>('UtrechtPV_12');
  }
  public getUtrechtPV_12(options?: ODataOptions) {
    return this.getValue<number>('UtrechtPV_12', options) as Observable<number>;
  }
  
  @ModelField()
  NoordHollandPV_13?: number;
  public $NoordHollandPV_13() {
    return this.property<number>('NoordHollandPV_13');
  }
  public getNoordHollandPV_13(options?: ODataOptions) {
    return this.getValue<number>('NoordHollandPV_13', options) as Observable<number>;
  }
  
  @ModelField()
  ZuidHollandPV_14?: number;
  public $ZuidHollandPV_14() {
    return this.property<number>('ZuidHollandPV_14');
  }
  public getZuidHollandPV_14(options?: ODataOptions) {
    return this.getValue<number>('ZuidHollandPV_14', options) as Observable<number>;
  }
  
  @ModelField()
  ZeelandPV_15?: number;
  public $ZeelandPV_15() {
    return this.property<number>('ZeelandPV_15');
  }
  public getZeelandPV_15(options?: ODataOptions) {
    return this.getValue<number>('ZeelandPV_15', options) as Observable<number>;
  }
  
  @ModelField()
  NoordBrabantPV_16?: number;
  public $NoordBrabantPV_16() {
    return this.property<number>('NoordBrabantPV_16');
  }
  public getNoordBrabantPV_16(options?: ODataOptions) {
    return this.getValue<number>('NoordBrabantPV_16', options) as Observable<number>;
  }
  
  @ModelField()
  LimburgPV_17?: number;
  public $LimburgPV_17() {
    return this.property<number>('LimburgPV_17');
  }
  public getLimburgPV_17(options?: ODataOptions) {
    return this.getValue<number>('LimburgPV_17', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}