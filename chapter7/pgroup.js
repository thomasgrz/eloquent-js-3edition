class PGroup{
  constructor(array){
    //only property should be this.array
    this.customList = array
  }
  //stores a set of values
  //works with any key type
  //add
    //should return new PGroup instance
    add(element){
      return new PGroup(this.customList.concat([element]))
    }
  //delete
    //should return new PGroup instance
    delete(element){
      return new PGroup(this.members.filter(e=>e!==element))
    }
  //has
    has(element){
      this.customList.includes(element)
    }
}

PGroup.empty = new PGroup([])
