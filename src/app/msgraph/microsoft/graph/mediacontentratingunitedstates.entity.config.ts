import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.entity';
//#endregion

export const MediaContentRatingUnitedStatesConfig = {
  name: "MediaContentRatingUnitedStates",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingUnitedStatesMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingUnitedStatesTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingUnitedStates>;