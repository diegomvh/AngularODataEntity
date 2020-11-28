import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GiphyRatingType } from './giphyratingtype.enum';
//#endregion

export interface TeamFunSettings {
  //#region ODataApi Properties
  allowCustomMemes?: boolean;
  allowGiphy?: boolean;
  allowStickersAndMemes?: boolean;
  giphyContentRating?: GiphyRatingType;
  //#endregion
}