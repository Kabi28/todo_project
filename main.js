let items = [{name:'Apple',price:40,qty:0}, {name:'Orange',price:30,qty:0},{name:'grapes',price:90,qty:0},{name:'mango',price:110,qty:0},{name:'strawberry',price:200,qty:0}];
let cart = []
let gross = 0

let listElement = document.getElementById("list-items");
let cartElement = document.getElementById("cart-items");
listElement.innerHTML = `<h1>A1 Fruits Store</h1>`
items.forEach((element,i) =>{
    let listItem = document.createElement('div');
    listItem.className = 'list';
    listItem.innerHTML = `<h1>${element.name}</h1>
    <h2  id='price-tag'>${element.price}</h2>
    <button onclick='addToCart(${i})'>Add To Cart</button>`
    listElement.appendChild(listItem);
});
function renderCart(){
    cartElement.innerHTML = ''
    let total = 0
    cartElement.innerHTML = `<h2>product details</h2>`;
    let cartItem = document.createElement('table');
    cartItem.innerHTML += `<tr>
            <th>Product Name</th>
            <th>product Price</th>
            <th>qty</th>
            <th>Gross</th>
            </tr>`
            
    
        if (cart.length === 0 ){
            cartElement.innerHTML = `Your Cart is Empty 
            <img src='Add to Cart-amico.svg' alt='' />`;
        }else{
            cart.forEach((element,i) =>{
            if (items[i].qty === 1){
                total += element.price
            }else{
                total += element.price * element.qty
            }
            cartItem.innerHTML += `<tr>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>${element.qty}</td>
            <td>${element.qty * element.price}</td>
            <td><a href="#" onclick="removeFromCart(${i})"><i class="fa-regular fa-trash-alt"></i></a></td>
            </tr>
            `

           
            
        }
        
    
    )
    cartElement.appendChild(cartItem);
}
    cartItem.innerHTML += `<tr>
        <td colspan='2'>total</td>
        <td>${total}</td>
        </tr>`
        
}

function addToCart(i) {
  let dup = cart.find(item => item.name == items[i].name);
  if (dup){
    items[i].qty += 1;
  }else{
    cart.push(items[i])
    items[i].qty = 1;
  }
  renderCart();
}

function removeFromCart(i){
    
    if (cart[i].qty === 1){
        cart.splice(i,1);
    }else{
        cart[i].qty -= 1;
    }
    renderCart();
}
renderCart()