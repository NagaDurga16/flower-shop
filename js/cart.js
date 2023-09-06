let cart = [];

(() => {
    const serializedCart = localStorage.getItem('cart') ?? "[]";
    cart = JSON.parse(serializedCart);
})();

function addToCart(product) {
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === product.name
  );
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: counter,
    });
  }
  console.log({ cart });

  localStorage.setItem('cart', JSON.stringify(cart)); 
}

function createCartItem(product, i) {
    const div = document.createElement("div");
    div.classList.add("div1");
    const div2 = document.createElement("div");
    div2.classList.add("div2");
    
  
    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.style.width = "100px";
  
    const price = document.createElement("p");
    price.innerHTML = product.price;
    price.classList.add("price");
  
    const name = document.createElement("p");
    name.innerHTML = product.name;
    cartDiv = document.createElement("div");
    cartDiv.classList.add("cartdiv");

    const addinc = document.createElement("button");
    addinc.innerHTML = "+";


    const quantity = document.createElement("p");
    quantity.innerHTML =  product.quantity;


    const subdecr = document.createElement("button");
    subdecr.innerHTML = "-";

    const total = document.createElement("p");
    
    
      let counter = product.quantity;
      addinc.addEventListener("click", increment);
      function increment() {
        if (counter < 10) {
          counter = counter + 1;
          quantity.innerHTML = counter;
          cart[i].quantity = counter;
        }
        localStorage.setItem("cart", JSON.stringify(cart)); 
      }
      subdecr.addEventListener("click", decrement);
      function decrement() {
        if (counter > 0) {
          counter = counter - 1;
          quantity.innerHTML = counter;
          cart[i].quantity = counter;
        }
        if(cart[i].quantity <= 0){
          cart.splice(i, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      }
     cartDiv.append(addinc,quantity,subdecr);
     div2.append(img,name);

    div.append(div2,price,cartDiv);
    return div;
  }

  function total(){

   
    const divTotal = document.createElement("div");
    divTotal.classList.add("total");
    const p = document.createElement("p");
    p.innerHTML="Total";
    

    const total = document.createElement("p");
    let sumOfTotal = 0;

       cart.forEach((product) => {
        const subTotal = product.price * product.quantity;
        sumOfTotal += subTotal;
    });
    total.innerHTML = sumOfTotal;
    divTotal.append(p,total);
    return divTotal;
  }

  function createCart(){
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    const cartRoot = document.querySelector('#root');
    cart.forEach((product, i) => {
      const cartItemEl = createCartItem(product, i);
      
      cartRoot.append(cartItemEl);
    });

    const cartTotal = total();
    cartRoot.append(cartTotal);


    if(cart.length === 0){
      cartRoot.innerHTML = '<h2>Cart is empty</h2>';
    }
  }

  
  