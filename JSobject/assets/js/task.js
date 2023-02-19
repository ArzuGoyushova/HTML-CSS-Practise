class CustomMatch{
    constructor(num){
        this.num=num;
    }
    plus(x){       
        this.num+=x;
        return this;
    }
    minus(y){
        this.num-=y;
        return this;
    }
    multiply(z){
        this.num*=z;
        return this;
    }
    divide(b){
        this.num/=b;
        return this;
    }
  
    
}
var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);

console.log(result);