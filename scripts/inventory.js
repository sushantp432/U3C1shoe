
    let data = JSON.parse(localStorage.getItem("products")) || [];
    console.log(data);
    let Container = document.getElementById("all_products");

    Container.innerHTML=null;

    data.forEach(function(el,index){
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.src = el.image; 

        let type = document.createElement("p");
        type.innerText=el.type;

        let desc = document.createElement("p");
        desc.innerText=el.desc;

        let price = document.createElement("p");
        price.innerText=el.price;

        let btn = document.createElement("button");
        btn.innerText="Remove Product";
        btn.setAttribute("id","remove_product")
        btn.addEventListener("click",function(){
            remove(el,index);
        });
        div.append(img, type,desc,price,btn);
        Container.append(div);

        function remove(el,index){
            data.splice(index,1);
            localStorage.setItem("products",JSON.stringify(data));
            window.location.reload();
        }
    });

    

