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
  public $ID() {
    return this.property<number>('ID');
  }
  public getID(options?: HttpOptions) {
    return this.getValue<number>('ID', options) as Observable<number>;
  }
  
  @ModelField()
  Geslacht?: string;
  public $Geslacht() {
    return this.property<string>('Geslacht');
  }
  public getGeslacht(options?: HttpOptions) {
    return this.getValue<string>('Geslacht', options) as Observable<string>;
  }
  
  @ModelField()
  Leeftijd?: string;
  public $Leeftijd() {
    return this.property<string>('Leeftijd');
  }
  public getLeeftijd(options?: HttpOptions) {
    return this.getValue<string>('Leeftijd', options) as Observable<string>;
  }
  
  @ModelField()
  Perioden?: string;
  public $Perioden() {
    return this.property<string>('Perioden');
  }
  public getPerioden(options?: HttpOptions) {
    return this.getValue<string>('Perioden', options) as Observable<string>;
  }
  
  @ModelField()
  AantalWWUitkeringen_1?: string;
  public $AantalWWUitkeringen_1() {
    return this.property<string>('AantalWWUitkeringen_1');
  }
  public getAantalWWUitkeringen_1(options?: HttpOptions) {
    return this.getValue<string>('AantalWWUitkeringen_1', options) as Observable<string>;
  }
  
  @ModelField()
  NoordNederland_2?: string;
  public $NoordNederland_2() {
    return this.property<string>('NoordNederland_2');
  }
  public getNoordNederland_2(options?: HttpOptions) {
    return this.getValue<string>('NoordNederland_2', options) as Observable<string>;
  }
  
  @ModelField()
  OostNederland_3?: string;
  public $OostNederland_3() {
    return this.property<string>('OostNederland_3');
  }
  public getOostNederland_3(options?: HttpOptions) {
    return this.getValue<string>('OostNederland_3', options) as Observable<string>;
  }
  
  @ModelField()
  WestNederland_4?: string;
  public $WestNederland_4() {
    return this.property<string>('WestNederland_4');
  }
  public getWestNederland_4(options?: HttpOptions) {
    return this.getValue<string>('WestNederland_4', options) as Observable<string>;
  }
  
  @ModelField()
  ZuidNederland_5?: string;
  public $ZuidNederland_5() {
    return this.property<string>('ZuidNederland_5');
  }
  public getZuidNederland_5(options?: HttpOptions) {
    return this.getValue<string>('ZuidNederland_5', options) as Observable<string>;
  }
  
  @ModelField()
  GroningenPV_6?: string;
  public $GroningenPV_6() {
    return this.property<string>('GroningenPV_6');
  }
  public getGroningenPV_6(options?: HttpOptions) {
    return this.getValue<string>('GroningenPV_6', options) as Observable<string>;
  }
  
  @ModelField()
  FrieslandPV_7?: string;
  public $FrieslandPV_7() {
    return this.property<string>('FrieslandPV_7');
  }
  public getFrieslandPV_7(options?: HttpOptions) {
    return this.getValue<string>('FrieslandPV_7', options) as Observable<string>;
  }
  
  @ModelField()
  DrenthePV_8?: string;
  public $DrenthePV_8() {
    return this.property<string>('DrenthePV_8');
  }
  public getDrenthePV_8(options?: HttpOptions) {
    return this.getValue<string>('DrenthePV_8', options) as Observable<string>;
  }
  
  @ModelField()
  OverijsselPV_9?: string;
  public $OverijsselPV_9() {
    return this.property<string>('OverijsselPV_9');
  }
  public getOverijsselPV_9(options?: HttpOptions) {
    return this.getValue<string>('OverijsselPV_9', options) as Observable<string>;
  }
  
  @ModelField()
  FlevolandPV_10?: string;
  public $FlevolandPV_10() {
    return this.property<string>('FlevolandPV_10');
  }
  public getFlevolandPV_10(options?: HttpOptions) {
    return this.getValue<string>('FlevolandPV_10', options) as Observable<string>;
  }
  
  @ModelField()
  GelderlandPV_11?: string;
  public $GelderlandPV_11() {
    return this.property<string>('GelderlandPV_11');
  }
  public getGelderlandPV_11(options?: HttpOptions) {
    return this.getValue<string>('GelderlandPV_11', options) as Observable<string>;
  }
  
  @ModelField()
  UtrechtPV_12?: string;
  public $UtrechtPV_12() {
    return this.property<string>('UtrechtPV_12');
  }
  public getUtrechtPV_12(options?: HttpOptions) {
    return this.getValue<string>('UtrechtPV_12', options) as Observable<string>;
  }
  
  @ModelField()
  NoordHollandPV_13?: string;
  public $NoordHollandPV_13() {
    return this.property<string>('NoordHollandPV_13');
  }
  public getNoordHollandPV_13(options?: HttpOptions) {
    return this.getValue<string>('NoordHollandPV_13', options) as Observable<string>;
  }
  
  @ModelField()
  ZuidHollandPV_14?: string;
  public $ZuidHollandPV_14() {
    return this.property<string>('ZuidHollandPV_14');
  }
  public getZuidHollandPV_14(options?: HttpOptions) {
    return this.getValue<string>('ZuidHollandPV_14', options) as Observable<string>;
  }
  
  @ModelField()
  ZeelandPV_15?: string;
  public $ZeelandPV_15() {
    return this.property<string>('ZeelandPV_15');
  }
  public getZeelandPV_15(options?: HttpOptions) {
    return this.getValue<string>('ZeelandPV_15', options) as Observable<string>;
  }
  
  @ModelField()
  NoordBrabantPV_16?: string;
  public $NoordBrabantPV_16() {
    return this.property<string>('NoordBrabantPV_16');
  }
  public getNoordBrabantPV_16(options?: HttpOptions) {
    return this.getValue<string>('NoordBrabantPV_16', options) as Observable<string>;
  }
  
  @ModelField()
  LimburgPV_17?: string;
  public $LimburgPV_17() {
    return this.property<string>('LimburgPV_17');
  }
  public getLimburgPV_17(options?: HttpOptions) {
    return this.getValue<string>('LimburgPV_17', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}