import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Link } from './link.complex';
import { LinkCollection } from './link.collection';
//#endregion

@Model()
export class LinkModel<E extends Link> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Text?: string;
  public $Text() {
    return this.property<string>('Text');
  }
  public getText(options?: HttpOptions) {
    return this.getValue<string>('Text', options) as Observable<string>;
  }
  
  @ModelField()
  Url?: string;
  public $Url() {
    return this.property<string>('Url');
  }
  public getUrl(options?: HttpOptions) {
    return this.getValue<string>('Url', options) as Observable<string>;
  }
  
  @ModelField()
  Prefix?: string;
  public $Prefix() {
    return this.property<string>('Prefix');
  }
  public getPrefix(options?: HttpOptions) {
    return this.getValue<string>('Prefix', options) as Observable<string>;
  }
  
  @ModelField()
  TargetId?: string;
  public $TargetId() {
    return this.property<string>('TargetId');
  }
  public getTargetId(options?: HttpOptions) {
    return this.getValue<string>('TargetId', options) as Observable<string>;
  }
  
  @ModelField()
  Icon?: string;
  public $Icon() {
    return this.property<string>('Icon');
  }
  public getIcon(options?: HttpOptions) {
    return this.getValue<string>('Icon', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}