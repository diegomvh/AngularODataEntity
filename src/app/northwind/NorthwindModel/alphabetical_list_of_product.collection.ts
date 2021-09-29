import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlphabeticalListOfProduct } from './alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductModel } from './alphabetical_list_of_product.model';
//#endregion

export class AlphabeticalListOfProductCollection<E extends AlphabeticalListOfProduct, M extends AlphabeticalListOfProductModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}