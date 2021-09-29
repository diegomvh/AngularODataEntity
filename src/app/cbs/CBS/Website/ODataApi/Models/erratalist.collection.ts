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
import { ErrataList } from './erratalist.complex';
import { ErratumItem } from './erratumitem.complex';
import { ErrataListModel } from './erratalist.model';
import { ErratumItemModel } from './erratumitem.model';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

export class ErrataListCollection<E extends ErrataList, M extends ErrataListModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}