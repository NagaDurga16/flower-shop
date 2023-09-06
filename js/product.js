    const Product_Details =  [
    {
      image: "flowerimage/card item (10).png",
      name: "Snowfall",
      price: 70,
    },
    {
      image: "flowerimage/card item (11).png",
      name: "DawnsDelight",
      price: 70,
    },
    {
      image: "flowerimage/card item (12).png",
      name: "Pink Elegance",
      price: 70,
    },
    {
      image: "flowerimage/card item (13).png",
      name: "RusticCharm",
      price: 70,
    },
    {
      image: "flowerimage/card item (15).png",
      name: "AutumnSymphony",
      price: 80,
    },
    {
      image: "flowerimage/card item (16).png",
      name: "RosyDelight",
      price: 80,
    },
    {
      image: "flowerimage/card item (17).png",
      name: "Serenity",
      price: 100,
    },
    {
      image: "flowerimage/card item (18).png",
      name: "BlueHarmony",
      price: 60,
    },
    {
      image: "flowerimage/card item (19).png",
      name: "MysticalMajesty",
      price: 200,
    },
    {
      image: "flowerimage/card item (20).png",
      name: "Blazing Blossoms",
      price: 70,
    },
  ];


function productView(product) {
    const pageview = document.createElement("div");
    pageview.classList.add("page");
    const wrap = document.createElement("div");
    wrap.classList.add("view");
    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    wrap.appendChild(img);
    const information  = document.createElement("div");
    information.classList.add("info");
    const price = document.createElement("p");
    price.innerHTML = product.price;
    const name = document.createElement("p");
    name.innerHTML = product.name;
    information.append(img, price, name);
    pageview.append(wrap,information);
    return pageview;
  }



(() => {
    const serializedItems = JSON.stringify( Product_Details);
    localStorage.setItem('catalog', serializedItems);
})();





  

