class Group {
  constructor(){
  //create empty group
  this.items = []
}
//add value to the group(if it doesnt exist)
add(value){
  for(let item of this.items){
    if(item===value){
        return console.log("already exists")
      }
  }
  this.items.push(value)
  return console.log("success")
}
//removes argument from group(if it exists)
delete(value){
  if(this.items.indexOf(value)!=-1){
    let index = this.items.indexOf(value)
    this.items.splice(index, 1)
return console.log(`Value ${value} was deleted from group`)
  }
  console.log("called")
}

//returns boolean value if it has/doesnt have a value
has(value){
  if(this.items.indexOf(value)==-1){
    return false
  }
  return true
}

//from
static from(obj){
  let group = new Group
  for(let value of obj){
    group.items.push(value)
  }
  return group
}
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
