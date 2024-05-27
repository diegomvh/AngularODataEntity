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
  ODataFunctionOptions,
  ODataActionOptions,
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
  public $$ID() {
    return this.property<number>('ID');
  }
  public $ID() {
    return this.getAttribute<number>('ID') as number;
  }
  
  public ID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ID', options) as Observable<number>;
  }
  @ModelField()
  Name?: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }
  @ModelField()
  PersonDetail?: PersonDetailModel<PersonDetail>;
  public $$PersonDetail() {
    return this.navigationProperty<PersonDetail>('PersonDetail');
  }
  public $PersonDetail() {
    return this.getAttribute<PersonDetail>('PersonDetail') as PersonDetailModel<PersonDetail>;
  }
  public PersonDetail$$(model: PersonDetailModel<PersonDetail> | null, options?: ODataOptions) {
    return this.setReference<PersonDetail>('PersonDetail', model, options);
  }
  public PersonDetail$(options?: ODataQueryArgumentsOptions<PersonDetail>) {
      return this.fetchAttribute<PersonDetail>('PersonDetail', options) as Observable<PersonDetailModel<PersonDetail>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}