
// by ussing Array
class LRU{
    constructor(capacity){
          this.capacity = capacity
          this.cheche = []
    }
    get(key){
         const index = this.cheche.findIndex((item) => item.key === key)
         if(index === -1){
               return -1
         }
        const [item] = this.cheche.splice(index, 1)
        this.cheche.push( item)
    }

    push(key , value ){
        const index = this.cheche.findIndex((item) => item.key === key)
        if(index != -1){
              this.cheche.splice(index,1)
        }
        else if(this.cheche.length >= this.capacity){
               this.cheche.shift()
          }
        this.cheche.push({key,value})
    }
}
const l = new LRU(3);
l.push(1,"A")
l.push(2,"B")
l.push(3,"C")
l.get(2)
l.push(4,"D")
console.log(l)

