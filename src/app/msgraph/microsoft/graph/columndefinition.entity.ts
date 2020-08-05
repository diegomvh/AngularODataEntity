import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
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
//#endregion

export interface ColumnDefinition extends Entity {
  //#region ODataApi Properties
  boolean?: BooleanColumn;
  calculated?: CalculatedColumn;
  choice?: ChoiceColumn;
  columnGroup?: string;
  currency?: CurrencyColumn;
  dateTime?: DateTimeColumn;
  defaultValue?: DefaultColumnValue;
  description?: string;
  displayName?: string;
  enforceUniqueValues?: boolean;
  geolocation?: GeolocationColumn;
  hidden?: boolean;
  indexed?: boolean;
  lookup?: LookupColumn;
  name?: string;
  number?: NumberColumn;
  personOrGroup?: PersonOrGroupColumn;
  readOnly?: boolean;
  required?: boolean;
  text?: TextColumn;
  //#endregion
}