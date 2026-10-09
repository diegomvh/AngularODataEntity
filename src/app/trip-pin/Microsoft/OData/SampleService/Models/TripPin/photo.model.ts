import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryableOptions,
  ODataFunctionOptions,
  ODataActionOptions,
} from 'angular-odata';

import { Photo } from './photo.entity';

// #region Custom
// #endregion Custom
@Model()
export class PhotoModel<E extends Photo> extends ODataModel<E> {
  @ModelField()
  declare Id: number;
  public $$Id() {
    return this.property<number>('Id');
  }
  public $Id() {
    return this.getAttribute<number>('Id') as number;
  }
  public Id$(options?: ODataQueryableOptions<number>) {
    return this.fetchAttribute<number>('Id', options) as Observable<number>;
  }

  @ModelField()
  declare Name: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  public Name$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }

  // #region Custom
  // #endregion Custom
}
// #region Custom
// #endregion Custom
