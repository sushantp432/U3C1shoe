//store the products array in localstorage as "products"


function shoe(t,d,p,i){
    this.type = t,
    this.desc =d,
    this.price=p,
    this.image=i;
}

function product_Data(e) {
    e.preventDefault();
    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new shoe(type,desc,price,image);

    let shoedata= JSON.parse(localStorage.getItem("products")) || [];

    shoedata.push(p1);
    localStorage.setItem("products",JSON.stringify(shoedata));
    console.log(p1);
    window.location.reload();
}