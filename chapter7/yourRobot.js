function yourRobot({place, parcels}, route){
  if(route.length==0){
    //create an array  of routes to go to
    let routes = parcels.map(p=>{
      //if the package isnt here
      if(p.place != place){
        return {route: findRoute(roadGraph, place, p.place), pickUp: true}
      } else {
      //if the package is here
        return {route: findRoute(roadGraph, place, p.address), pickUp: false)}
      }
    });

    function score({route, pickUp}){
      //score the routes
      //if theres a pickUp True vs a pickUp False
      //with the same length it will prefer the
      //route that picks up a pacakage bc of the score
      return (pickUp ? 0.5 : 0) - route.length;
    }
    //compares routes side by side
    //and bubbles the shortest to the top
    //bc the scores are negative based the one with the
    //shortest length wins out bc it goes the least negative
    route = routes.reduce((a, b)=> score(a) > score(b) ? a:b).route
  }

  return {direction: route[0], memory: route.slice(1)}
}
