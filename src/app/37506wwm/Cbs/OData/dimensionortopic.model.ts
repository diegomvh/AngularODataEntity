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
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

@Model()
export class DimensionOrTopicModel<E extends DimensionOrTopic> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  public $ID() {
    return this.property<number>('ID');
  }
  public getID(options?: HttpOptions) {
    return this.getValue<number>('ID', options) as Observable<number>;
  }
  
  @ModelField()
  Position?: number;
  public $Position() {
    return this.property<number>('Position');
  }
  public getPosition(options?: HttpOptions) {
    return this.getValue<number>('Position', options) as Observable<number>;
  }
  
  @ModelField()
  ParentID?: number;
  public $ParentID() {
    return this.property<number>('ParentID');
  }
  public getParentID(options?: HttpOptions) {
    return this.getValue<number>('ParentID', options) as Observable<number>;
  }
  
  @ModelField()
  Type?: string;
  public $Type() {
    return this.property<string>('Type');
  }
  public getType(options?: HttpOptions) {
    return this.getValue<string>('Type', options) as Observable<string>;
  }
  
  @ModelField()
  Key?: string;
  public $Key() {
    return this.property<string>('Key');
  }
  public getKey(options?: HttpOptions) {
    return this.getValue<string>('Key', options) as Observable<string>;
  }
  
  @ModelField()
  Title?: string;
  public $Title() {
    return this.property<string>('Title');
  }
  public getTitle(options?: HttpOptions) {
    return this.getValue<string>('Title', options) as Observable<string>;
  }
  
  @ModelField()
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: HttpOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}