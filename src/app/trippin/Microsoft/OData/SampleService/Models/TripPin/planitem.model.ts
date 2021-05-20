import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
import { PlanItemCollection } from './planitem.collection';
//#endregion

@Model()
export class PlanItemModel<E extends PlanItem> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  PlanItemId!: number;
  
  
  @ModelField()
  ConfirmationCode?: string;
  
  
  @ModelField()
  StartsAt?: Date;
  
  
  @ModelField()
  EndsAt?: Date;
  
  
  @ModelField()
  Duration?: Duration;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}