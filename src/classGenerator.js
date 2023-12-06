export default class Team {
    constructor(){
        this.teamList = [];
      }
    
    add(character){
      this.teamList.push(character);
    }
    
    *[Symbol.iterator]() {
      yield this.teamList.shift();
    }
  
  }