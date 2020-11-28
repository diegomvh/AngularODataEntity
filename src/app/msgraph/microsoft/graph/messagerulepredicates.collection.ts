import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { MessageActionFlag } from './messageactionflag.enum';
import { Sensitivity } from './sensitivity.enum';
import { Recipient } from './recipient.entity';
import { MessageRulePredicates } from './messagerulepredicates.entity';
import { SizeRange } from './sizerange.entity';
import { RecipientModel } from './recipient.model';
import { MessageRulePredicatesModel } from './messagerulepredicates.model';
import { SizeRangeModel } from './sizerange.model';
import { RecipientCollection } from './recipient.collection';
import { SizeRangeCollection } from './sizerange.collection';
//#endregion

export class MessageRulePredicatesCollection<E extends MessageRulePredicates, M extends MessageRulePredicatesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}