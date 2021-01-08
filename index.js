// Your code h

class Polygon{
  constructor(poly){
    this.poly=poly
    this.sides=this.poly.length
    
  }
  get countSides() {return this.sides}
  get perimeter(){const reducer=(acc, curr) => acc+ curr
  console.log(typeof(this.poly.reduce(reducer)))
  return this.poly.reduce(reducer)}
}

class Triangle extends Polygon{
  get valid(){
    if(!Array.isArray(this.poly)) return(false);
    if(this.poly.length !==3)return(false)
    else if (this.poly[0]+this.poly[1]>this.poly[2])&&(this.poly[1]+this.poly[2]>this.poly[0])&& (this.poly[0]+this.poly[2]>this.poly[1]){return (true)}
    
  }
}