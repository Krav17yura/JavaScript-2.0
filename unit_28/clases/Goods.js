class Goods{
    constructor(name,amoutn, image, count ){
        this.name = name;
        this.amoutn = amoutn;
        this.image = image;
        this.count = count;
         
    }  
    draw(elem){
         elem.innerHTML = `Tovar-${this.name},<br>Amount--${this.amoutn}<br><img src="${this.image}" alt="">
                                     <br>Colvo--${this.count}`;
    }
  
}