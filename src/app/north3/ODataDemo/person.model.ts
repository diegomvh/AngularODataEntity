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
import { Person } from './person.entity';
import { PersonDetail } from './persondetail.entity';
import { PersonDetailModel } from './persondetail.model';
import { PersonCollection } from './person.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

@Model()
export class PersonModel<E extends Person> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ID!: number;
  public $ID() {
    return this.property<number>('ID');
  }
  public getID(options?: ODataOptions) {
    return this.getValue<number>('ID', options) as Observable<number>;
  }
  
  @ModelField()
  Name?: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: ODataOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  @ModelField()
  PersonDetail?: PersonDetailModel<PersonDetail>;
  public $PersonDetail() {
    return this.navigationProperty<PersonDetail>('PersonDetail');
  }
  public getPersonDetail() {
    return this.getReference<PersonDetail>('PersonDetail') as PersonDetailModel<PersonDetail>;
  }
  public setPersonDetail(model: PersonDetailModel<PersonDetail> | null, options?: ODataOptions) {
    return this.setReference<PersonDetail>('PersonDetail', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}