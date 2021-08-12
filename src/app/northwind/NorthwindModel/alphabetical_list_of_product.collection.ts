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
import { AlphabeticalListOfProduct } from './alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductModel } from './alphabetical_list_of_product.model';
//#endregion

export class AlphabeticalListOfProductCollection<E extends AlphabeticalListOfProduct, M extends AlphabeticalListOfProductModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}