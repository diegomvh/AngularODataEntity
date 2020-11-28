import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.complex';
import { MediaContentRatingUnitedStatesModel } from './mediacontentratingunitedstates.model';
import { MediaContentRatingUnitedStatesCollection } from './mediacontentratingunitedstates.collection';
//#endregion

export const MediaContentRatingUnitedStatesConfig = {
  name: "mediaContentRatingUnitedStates",
  model: MediaContentRatingUnitedStatesModel,
  collection: MediaContentRatingUnitedStatesCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingUnitedStatesMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingUnitedStatesTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingUnitedStates>;