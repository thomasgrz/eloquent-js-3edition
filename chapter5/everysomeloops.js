//create function every
//should return true if all
//items pass test otherwise return False

function every(array, test){
  for(let item in array){
    if(!test(item)){return false}
  }
  return true
}

//create every using the some method
//built in to the array.
//reverse the logic so that it only returns
//true if something is False

function every(array, test){
  return !(array.some(item=>!test(item))
}
/*
for both functions:
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

this one was super tricky. i actually had to
look for help on github

basically, its a trick question. you cant
manipulate the inner workings of some (at least i couldnt)
so the trick is that instead of handing the test function
directly to some you hand it an arrow function which allows
you to run each individual item through the test .
by negating (!test(item)) the result of that test, the only
time it returns true is if something FAILS that test.
so you trick some into handing back that fake true VALUE
and then you negate it (!array.some . . .) right before you return
it which turns it back into the original FALSE VALUE
god bless you if you figured this out
all on your own.. this was a real head scratcher for me!
*/
