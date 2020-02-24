class Goods2 extends Goods{
    constructor(name,amoutn, image, count, out, sale){
        super(name,amoutn, image, count, out);
        this.sale = sale;
    }
    draw(elem){
         
        let div = document.createElement('div');
         
        div.innerHTML = `Tovar-${this.name}<br>`;
        div.innerHTML += `Amount--${this.amoutn}<br>`;
        div.innerHTML += `<img src="${this.image}" alt=""><br>`;
        div.innerHTML += `Colvo--${this.count}`;
        if(this.sale){
            div.innerHTML += `<div class="sale">Распродажа</div>`;
        }
        elem.append(div);
    }
}