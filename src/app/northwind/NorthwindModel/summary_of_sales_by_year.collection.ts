import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SummaryOfSalesByYear } from './summary_of_sales_by_year.entity';
import { SummaryOfSalesByYearModel } from './summary_of_sales_by_year.model';
//#endregion

export class SummaryOfSalesByYearCollection<E extends SummaryOfSalesByYear, M extends SummaryOfSalesByYearModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}