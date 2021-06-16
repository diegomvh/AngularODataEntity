import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { AlphabeticalListOfProduct } from '../../../NorthwindModel/alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductModel } from '../../../NorthwindModel/alphabetical_list_of_product.model';
import { AlphabeticalListOfProductCollection } from '../../../NorthwindModel/alphabetical_list_of_product.collection';
//#endregion

@Injectable()
export class AlphabeticalListOfProductsService extends ODataEntitySetService<AlphabeticalListOfProduct> {
  constructor(protected client: ODataClient) {
    super(client, 'Alphabetical_list_of_products', 'NorthwindModel.Alphabetical_list_of_product');
  }
  //#region ODataApi Model
  alphabeticalListOfProductModel(attrs?: Partial<AlphabeticalListOfProduct>): AlphabeticalListOfProductModel<AlphabeticalListOfProduct> {
    return this.entity().asModel<AlphabeticalListOfProductModel<AlphabeticalListOfProduct>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  alphabeticalListOfProductCollection(models?: Partial<AlphabeticalListOfProduct>[]): AlphabeticalListOfProductCollection<AlphabeticalListOfProduct, AlphabeticalListOfProductModel<AlphabeticalListOfProduct>> {
    return this.entities().asCollection<AlphabeticalListOfProductModel<AlphabeticalListOfProduct>, AlphabeticalListOfProductCollection<AlphabeticalListOfProduct, AlphabeticalListOfProductModel<AlphabeticalListOfProduct>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
