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
import { LinkList } from './linklist.complex';
import { Vacancy } from './vacancy.entity';
import { LinkListModel } from './linklist.model';
import { VacancyModel } from './vacancy.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

export class VacancyCollection<E extends Vacancy, M extends VacancyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}