﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ColumnDefinition } from './columndefinition.entity';
//#endregion

export const ColumnDefinitionConfig = {
  name: "ColumnDefinition",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    boolean: {type: 'graph.booleanColumn'},
    calculated: {type: 'graph.calculatedColumn'},
    choice: {type: 'graph.choiceColumn'},
    columnGroup: {type: 'Edm.String'},
    currency: {type: 'graph.currencyColumn'},
    dateTime: {type: 'graph.dateTimeColumn'},
    defaultValue: {type: 'graph.defaultColumnValue'},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    enforceUniqueValues: {type: 'Edm.Boolean'},
    geolocation: {type: 'graph.geolocationColumn'},
    hidden: {type: 'Edm.Boolean'},
    indexed: {type: 'Edm.Boolean'},
    lookup: {type: 'graph.lookupColumn'},
    name: {type: 'Edm.String'},
    number: {type: 'graph.numberColumn'},
    personOrGroup: {type: 'graph.personOrGroupColumn'},
    readOnly: {type: 'Edm.Boolean'},
    required: {type: 'Edm.Boolean'},
    text: {type: 'graph.textColumn'}
  }
} as EntityConfig<ColumnDefinition>;