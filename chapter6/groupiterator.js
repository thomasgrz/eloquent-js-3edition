//create your own Group Iterator for group.js
//A for/of loop should be able to utilize this interface..
//too successfully loop over its items
//an iterator should be a part of the Group prototype
//it should be named by Symbol.Iterator
//it should have a next property that:
// returns {done: true} AFTER all items have been iterated over
// else returns {value: (current value), done: false}
// Your code here (and the code from the previous exercise)
class Group{
	constructor(){
    	this.items = []
    }

  add(value){
  	if(this.items.indexOf(value)==-1){
      this.items.push(value)
      return console.log(`value ${value} was added`)
    }
    else return console.log(`value ${value} already exists :///`)
  }

  delete(value){
  	if(this.items.includes(value)){
      	let index = this.items.indexOf(value)
    	this.items.splice(index,1)
     	console.log(`attempting to delete ${value}`)
      	if(!this.items.includes(value)){
        	return console.log(`${value} was deleted!`)
        }
    }
  }

  static from(obj){
  	let group = new Group
    for(let item of obj){
    	group.add(item)
    }
    return group
  }

   [Symbol.iterator](){
  	return new GroupIterator(this)
  }
}

class GroupIterator{
	constructor(group){
    	this.index = 0
      	this.group = group
    }

  	next(){
    	if(!this.group.items[this.index]){
        	return{done: true}
        }
      let value = this.group.items[this.index]

      this.index++;
      return {value:value, done: false}
    }
}
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
