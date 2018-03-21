function compareRobots(robot1, memory1, robot2, memory2)
{
  //these are the counts we will need to avg
  let count1=0
  let count2=0

  //generate a list of 5 parcels 100 times
  for(let i=0;i<100;i++){

    //generate parcels and reset state
    const state = VillageState.random()
    count1 += robotRunner(state, robot1, memory1)
    count2 += robotRunner(state, robot2, memory2)
  }
  console.log(`Robot1 took ${count1/100} turns`)
  console.log(`Robot2 took ${count2/100} turns`)

}

function robotRunner(state, robot, memory){
  //continues until all packages are delivered
  for(let turns=0;;turns++){
    //if all parcels are delivered RETURNS how many moves it took
    if(state.parcels.length==0){
      return turns;
    }
    //else it will hand the robot the current state and memory so that the robot cant tell us our next move
    let action = robot(state, memory)
    //create a new instance of our state based on where the robot told us to move
    state = state.move(action.direction)
    //memory to pass back to robot once again
    memory = action.memory
  }
}
