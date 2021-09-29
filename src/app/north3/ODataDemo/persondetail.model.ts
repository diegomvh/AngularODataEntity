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
import { Address } from './address.complex';
import { Person } from './person.entity';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { PersonModel } from './person.model';
import { AddressCollection } from './address.collection';
import { PersonCollection } from './person.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

@Model()
export class PersonDetailModel<E extends PersonDetail> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  PersonID!: number;
  public $PersonID() {
    return this.property<number>('PersonID');
  }
  public getPersonID(options?: ODataOptions) {
    return this.getValue<number>('PersonID', options) as Observable<number>;
  }
  
  @ModelField()
  Age!: number;
  public $Age() {
    return this.property<number>('Age');
  }
  public getAge(options?: ODataOptions) {
    return this.getValue<number>('Age', options) as Observable<number>;
  }
  
  @ModelField()
  Gender!: boolean;
  public $Gender() {
    return this.property<boolean>('Gender');
  }
  public getGender(options?: ODataOptions) {
    return this.getValue<boolean>('Gender', options) as Observable<boolean>;
  }
  
  @ModelField()
  Phone?: string;
  public $Phone() {
    return this.property<string>('Phone');
  }
  public getPhone(options?: ODataOptions) {
    return this.getValue<string>('Phone', options) as Observable<string>;
  }
  
  @ModelField()
  Address?: AddressModel<Address>;
  public $Address() {
    return this.property<AddressModel<Address>>('Address');
  }
  public getAddress(options?: ODataOptions) {
    return this.getValue<AddressModel<Address>>('Address', options) as Observable<AddressModel<Address>>;
  }
  
  @ModelField()
  Photo!: any;
  public $Photo() {
    return this.property<any>('Photo');
  }
  public getPhoto(options?: ODataOptions) {
    return this.getValue<any>('Photo', options) as Observable<any>;
  }
  
  @ModelField()
  Person?: PersonModel<Person>;
  public $Person() {
    return this.navigationProperty<Person>('Person');
  }
  public getPerson() {
    return this.getReference<Person>('Person') as PersonModel<Person>;
  }
  public setPerson(model: PersonModel<Person> | null, options?: ODataOptions) {
    return this.setReference<Person>('Person', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}