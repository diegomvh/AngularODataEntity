import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';

import { PlanItem } from './plan-item.entity';

@Model()
export class PlanItemModel<E extends PlanItem> extends ODataModel<E> {
  @ModelField()
  declare PlanItemId: number;
  public $$PlanItemId() {
    return this.property<number>('PlanItemId');
  }
  public $PlanItemId() {
    return this.getAttribute<number>('PlanItemId') as number;
  }
  
  public PlanItemId$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('PlanItemId', options) as Observable<number>;
  }

  @ModelField()
  declare ConfirmationCode: string;
  public $$ConfirmationCode() {
    return this.property<string>('ConfirmationCode');
  }
  public $ConfirmationCode() {
    return this.getAttribute<string>('ConfirmationCode') as string;
  }
  
  public ConfirmationCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ConfirmationCode', options) as Observable<string>;
  }

  @ModelField()
  declare StartsAt: Date;
  public $$StartsAt() {
    return this.property<Date>('StartsAt');
  }
  public $StartsAt() {
    return this.getAttribute<Date>('StartsAt') as Date;
  }
  
  public StartsAt$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('StartsAt', options) as Observable<Date>;
  }

  @ModelField()
  declare EndsAt: Date;
  public $$EndsAt() {
    return this.property<Date>('EndsAt');
  }
  public $EndsAt() {
    return this.getAttribute<Date>('EndsAt') as Date;
  }
  
  public EndsAt$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('EndsAt', options) as Observable<Date>;
  }

  @ModelField()
  declare Duration: Duration;
  public $$Duration() {
    return this.property<Duration>('Duration');
  }
  public $Duration() {
    return this.getAttribute<Duration>('Duration') as Duration;
  }
  
  public Duration$(options?: ODataQueryArgumentsOptions<Duration>) {
    return this.fetchAttribute<Duration>('Duration', options) as Observable<Duration>;
  }

  
  
  
}