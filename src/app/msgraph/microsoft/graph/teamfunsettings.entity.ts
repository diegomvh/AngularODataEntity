import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GiphyRatingType } from './giphyratingtype.enum';
//#endregion

export interface TeamFunSettings {
  //#region ODataApi Properties
  allowGiphy?: boolean;
  giphyContentRating?: GiphyRatingType;
  allowStickersAndMemes?: boolean;
  allowCustomMemes?: boolean;
  //#endregion
}