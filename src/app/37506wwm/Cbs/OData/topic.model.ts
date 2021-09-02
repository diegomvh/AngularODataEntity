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
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { Topic } from './topic.entity';
import { TopicCollection } from './topic.collection';
//#endregion

@Model()
export class TopicModel<E extends Topic> extends DimensionOrTopicModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Datatype?: string;
  public $Datatype() {
    return this.property<string>('Datatype');
  }
  public getDatatype(options?: HttpOptions) {
    return this.getValue<string>('Datatype', options) as Observable<string>;
  }
  
  @ModelField()
  Unit?: string;
  public $Unit() {
    return this.property<string>('Unit');
  }
  public getUnit(options?: HttpOptions) {
    return this.getValue<string>('Unit', options) as Observable<string>;
  }
  
  @ModelField()
  Decimals?: number;
  public $Decimals() {
    return this.property<number>('Decimals');
  }
  public getDecimals(options?: HttpOptions) {
    return this.getValue<number>('Decimals', options) as Observable<number>;
  }
  
  @ModelField()
  Default?: string;
  public $Default() {
    return this.property<string>('Default');
  }
  public getDefault(options?: HttpOptions) {
    return this.getValue<string>('Default', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}