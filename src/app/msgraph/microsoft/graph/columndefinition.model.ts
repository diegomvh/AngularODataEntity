import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { BooleanColumn } from './booleancolumn.entity';
import { CalculatedColumn } from './calculatedcolumn.entity';
import { ChoiceColumn } from './choicecolumn.entity';
import { CurrencyColumn } from './currencycolumn.entity';
import { DateTimeColumn } from './datetimecolumn.entity';
import { DefaultColumnValue } from './defaultcolumnvalue.entity';
import { GeolocationColumn } from './geolocationcolumn.entity';
import { LookupColumn } from './lookupcolumn.entity';
import { NumberColumn } from './numbercolumn.entity';
import { PersonOrGroupColumn } from './personorgroupcolumn.entity';
import { TextColumn } from './textcolumn.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { BooleanColumnModel } from './booleancolumn.model';
import { CalculatedColumnModel } from './calculatedcolumn.model';
import { ChoiceColumnModel } from './choicecolumn.model';
import { CurrencyColumnModel } from './currencycolumn.model';
import { DateTimeColumnModel } from './datetimecolumn.model';
import { DefaultColumnValueModel } from './defaultcolumnvalue.model';
import { GeolocationColumnModel } from './geolocationcolumn.model';
import { LookupColumnModel } from './lookupcolumn.model';
import { NumberColumnModel } from './numbercolumn.model';
import { PersonOrGroupColumnModel } from './personorgroupcolumn.model';
import { TextColumnModel } from './textcolumn.model';
import { BooleanColumnCollection } from './booleancolumn.collection';
import { CalculatedColumnCollection } from './calculatedcolumn.collection';
import { ChoiceColumnCollection } from './choicecolumn.collection';
import { CurrencyColumnCollection } from './currencycolumn.collection';
import { DateTimeColumnCollection } from './datetimecolumn.collection';
import { DefaultColumnValueCollection } from './defaultcolumnvalue.collection';
import { GeolocationColumnCollection } from './geolocationcolumn.collection';
import { LookupColumnCollection } from './lookupcolumn.collection';
import { NumberColumnCollection } from './numbercolumn.collection';
import { PersonOrGroupColumnCollection } from './personorgroupcolumn.collection';
import { TextColumnCollection } from './textcolumn.collection';
import { ColumnDefinitionCollection } from './columndefinition.collection';
//#endregion

export class ColumnDefinitionModel<E extends ColumnDefinition> extends EntityModel<E> {
  //#region ODataApi Properties
  boolean?: BooleanColumnModel<BooleanColumn>;
  calculated?: CalculatedColumnModel<CalculatedColumn>;
  choice?: ChoiceColumnModel<ChoiceColumn>;
  columnGroup?: string;
  currency?: CurrencyColumnModel<CurrencyColumn>;
  dateTime?: DateTimeColumnModel<DateTimeColumn>;
  defaultValue?: DefaultColumnValueModel<DefaultColumnValue>;
  description?: string;
  displayName?: string;
  enforceUniqueValues?: boolean;
  geolocation?: GeolocationColumnModel<GeolocationColumn>;
  hidden?: boolean;
  indexed?: boolean;
  lookup?: LookupColumnModel<LookupColumn>;
  name?: string;
  number?: NumberColumnModel<NumberColumn>;
  personOrGroup?: PersonOrGroupColumnModel<PersonOrGroupColumn>;
  readOnly?: boolean;
  required?: boolean;
  text?: TextColumnModel<TextColumn>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}