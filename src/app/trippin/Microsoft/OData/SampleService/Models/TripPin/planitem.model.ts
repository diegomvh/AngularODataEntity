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
import { PlanItem } from './planitem.entity';
import { PlanItemCollection } from './planitem.collection';
//#endregion

@Model()
export class PlanItemModel<E extends PlanItem> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  PlanItemId!: number;
  public $PlanItemId() {
    return this.property<number>('PlanItemId');
  }
  public getPlanItemId(options?: HttpOptions) {
    return this.getValue<number>('PlanItemId', options) as Observable<number>;
  }
  
  @ModelField()
  ConfirmationCode?: string;
  public $ConfirmationCode() {
    return this.property<string>('ConfirmationCode');
  }
  public getConfirmationCode(options?: HttpOptions) {
    return this.getValue<string>('ConfirmationCode', options) as Observable<string>;
  }
  
  @ModelField()
  StartsAt?: Date;
  public $StartsAt() {
    return this.property<Date>('StartsAt');
  }
  public getStartsAt(options?: HttpOptions) {
    return this.getValue<Date>('StartsAt', options) as Observable<Date>;
  }
  
  @ModelField()
  EndsAt?: Date;
  public $EndsAt() {
    return this.property<Date>('EndsAt');
  }
  public getEndsAt(options?: HttpOptions) {
    return this.getValue<Date>('EndsAt', options) as Observable<Date>;
  }
  
  @ModelField()
  Duration?: Duration;
  public $Duration() {
    return this.property<Duration>('Duration');
  }
  public getDuration(options?: HttpOptions) {
    return this.getValue<Duration>('Duration', options) as Observable<Duration>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}