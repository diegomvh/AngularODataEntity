import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { GiphyRatingType } from './giphyratingtype.enum';
//#endregion

export const GiphyRatingTypeConfig = {
  name: "giphyRatingType",
  members: GiphyRatingType
} as EnumTypeConfig<GiphyRatingType>;