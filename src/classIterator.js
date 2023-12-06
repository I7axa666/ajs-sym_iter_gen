export default class Team {
    constructor(){
      this.teamList = [];
    }
    
    add(character){
      this.teamList.push(character);
    }
  
    iterator() {
      let count = 0;
          return {
            next: () => {
              while (count < this.teamList.length) {
                count++;
                return {
                  value: this.teamList[count - 1],
                  done: false
                }
              }
  
          return {
            value: undefined,
            done: true
          }
          
        }
      }
    }
    
  } 