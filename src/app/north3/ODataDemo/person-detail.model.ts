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
import { Address } from './address.complex';
import { Person } from './person.entity';
import { PersonDetail } from './person-detail.entity';
import { AddressModel } from './address.model';
import { PersonModel } from './person.model';
import { AddressCollection } from './address.collection';
import { PersonCollection } from './person.collection';
import { PersonDetailCollection } from './person-detail.collection';
//#endregion

@Model()
export class PersonDetailModel<E extends PersonDetail> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  PersonID!: number;
  public $$PersonID() {
    return this.property<number>('PersonID');
  }
  public $PersonID() {
    return this.getAttribute<number>('PersonID') as number;
  }
  
  public PersonID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('PersonID', options) as Observable<number>;
  }
  @ModelField()
  Age!: number;
  public $$Age() {
    return this.property<number>('Age');
  }
  public $Age() {
    return this.getAttribute<number>('Age') as number;
  }
  
  public Age$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Age', options) as Observable<number>;
  }
  @ModelField()
  Gender!: boolean;
  public $$Gender() {
    return this.property<boolean>('Gender');
  }
  public $Gender() {
    return this.getAttribute<boolean>('Gender') as boolean;
  }
  
  public Gender$(options?: ODataQueryArgumentsOptions<boolean>) {
    return this.fetchAttribute<boolean>('Gender', options) as Observable<boolean>;
  }
  @ModelField()
  Phone?: string;
  public $$Phone() {
    return this.property<string>('Phone');
  }
  public $Phone() {
    return this.getAttribute<string>('Phone') as string;
  }
  
  public Phone$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Phone', options) as Observable<string>;
  }
  @ModelField()
  Address?: AddressModel<Address>;
  public $$Address() {
    return this.property<AddressModel<Address>>('Address');
  }
  public $Address() {
    return this.getAttribute<AddressModel<Address>>('Address') as AddressModel<Address>;
  }
  
  public Address$(options?: ODataQueryArgumentsOptions<AddressModel<Address>>) {
    return this.fetchAttribute<AddressModel<Address>>('Address', options) as Observable<AddressModel<Address>>;
  }
  @ModelField()
  Photo!: any;
  public $$Photo() {
    return this.property<any>('Photo');
  }
  public $Photo() {
    return this.getAttribute<any>('Photo') as any;
  }
  
  public Photo$(options?: ODataQueryArgumentsOptions<any>) {
    return this.fetchAttribute<any>('Photo', options) as Observable<any>;
  }
  @ModelField()
  Person?: PersonModel<Person>;
  public $$Person() {
    return this.navigationProperty<Person>('Person');
  }
  public $Person() {
    return this.getAttribute<Person>('Person') as PersonModel<Person>;
  }
  public Person$$(model: PersonModel<Person> | null, options?: ODataOptions) {
    return this.setReference<Person>('Person', model, options);
  }
  public Person$(options?: ODataQueryArgumentsOptions<Person>) {
      return this.fetchAttribute<Person>('Person', options) as Observable<PersonModel<Person>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}