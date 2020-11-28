import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CalendarColor } from './calendarcolor.enum';
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
import { EmailAddress } from './emailaddress.entity';
import { Event } from './event.entity';
import { CalendarPermission } from './calendarpermission.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { EmailAddressModel } from './emailaddress.model';
import { EntityModel } from './entity.model';
import { EventModel } from './event.model';
import { CalendarPermissionModel } from './calendarpermission.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { EntityCollection } from './entity.collection';
import { EventCollection } from './event.collection';
import { CalendarPermissionCollection } from './calendarpermission.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export interface Calendar extends Entity {
  //#region ODataApi Properties
  allowedOnlineMeetingProviders?: OnlineMeetingProviderType;
  canEdit?: boolean;
  canShare?: boolean;
  canViewPrivateItems?: boolean;
  changeKey?: string;
  color?: CalendarColor;
  defaultOnlineMeetingProvider?: OnlineMeetingProviderType;
  isRemovable?: boolean;
  isTallyingResponses?: boolean;
  name?: string;
  owner?: EmailAddress;
  calendarPermissions?: CalendarPermission[];
  calendarView?: Event[];
  events?: Event[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  //#endregion
}