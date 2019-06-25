function produceDrivingRange( blockRange ) {
  return function ( startingBlock, endingBlock ) {

  let start = parseInt( startingBlock );
  let end = parseInt( endingBlock );
  let distanceToTravel = Math.abs( end - start );
  let difference = blockRange - distanceToTravel;
  