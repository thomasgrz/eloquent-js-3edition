Dominant writing direction
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left-to-right), "rtl" (right-to-left), or "ttb" (top-to-bottom).

The dominant direction is the direction of a majority of the characters which have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

function dominantDirection(text) {
  // Your code here.
  //1 determine which script each character belongs to
  //2 determine the writing direction of the corresponding script
  //3 total how many chars use each writing direction
  //4 compare the total values of step 3
  //countBy(items, groupName)
  //..will take an array of items
  //..and assign each one a name determined by groupName
  //..and then return an array of objects each with a name
  //..and a count of how many items match that name
  //characterScript(code)
  //..takes a codePoint and
  //..determines the name of the script it belongs to
  //..and returns null otherwise(if it doesnt match any)
  	  let scripts = countBy(text, char=>{
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
  	}).filter(({name})=>name!="none")
  let dominantScript = scripts.reduce((highestCount, script)=>{
    if(highestCount==null){
      highestCount = script.name
    }
    if(highestCount.count<script.count){
      return script
    }
  })
  let nameOfScript = dominantScript.name
  //iterate through SCRIPTS
  for(let script of SCRIPTS){
  	if(script.name===nameOfScript){
    	return script.direction
    }
  }
 }

Your solution might look a lot like the first half of the textScripts example. You again have to count characters by a criteria based on characterScript, and then filter out the part of the result that refers to uninteresting (script-less characters).

Finding the direction with the highest character count can be done with reduce. If it’s not clear how, refer back to the example earlier in the chapter, where reduce was used to find the script with the most characters.
