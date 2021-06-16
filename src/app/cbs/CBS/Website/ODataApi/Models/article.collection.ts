import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ArticleType } from './articletype.enum';
import { ErrataList } from './erratalist.complex';
import { LinkList } from './linklist.complex';
import { Article } from './article.entity';
import { ErrataListModel } from './erratalist.model';
import { LinkListModel } from './linklist.model';
import { ArticleModel } from './article.model';
import { ErrataListCollection } from './erratalist.collection';
import { LinkListCollection } from './linklist.collection';
//#endregion

export class ArticleCollection<E extends Article, M extends ArticleModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}