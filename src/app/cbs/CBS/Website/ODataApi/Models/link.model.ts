import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Link } from './link.complex';
import { LinkCollection } from './link.collection';
//#endregion

@Model()
export class LinkModel<E extends Link> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Text?: string;
  public $Text() {
    return this.property<string>('Text');
  }
  public getText(options?: ODataOptions) {
    return this.getValue<string>('Text', options) as Observable<string>;
  }
  
  @ModelField()
  Url?: string;
  public $Url() {
    return this.property<string>('Url');
  }
  public getUrl(options?: ODataOptions) {
    return this.getValue<string>('Url', options) as Observable<string>;
  }
  
  @ModelField()
  Prefix?: string;
  public $Prefix() {
    return this.property<string>('Prefix');
  }
  public getPrefix(options?: ODataOptions) {
    return this.getValue<string>('Prefix', options) as Observable<string>;
  }
  
  @ModelField()
  TargetId?: string;
  public $TargetId() {
    return this.property<string>('TargetId');
  }
  public getTargetId(options?: ODataOptions) {
    return this.getValue<string>('TargetId', options) as Observable<string>;
  }
  
  @ModelField()
  Icon?: string;
  public $Icon() {
    return this.property<string>('Icon');
  }
  public getIcon(options?: ODataOptions) {
    return this.getValue<string>('Icon', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}