
document.querySelectorAll('img').forEach(function(img){
    img.setAttribute('loading','lazy');
    
    });



function togglemenu ( ) {
    let link = document.querySelector('.navlink1')
    let items = document.querySelector('.nav-item1');
    items.classList.toggle('visible');
    link.classList.toggle('clip');
    link.classList.toggle('visible');
    link.classList.add('overlay');

    }
    
function rmv ( ) {
    let link = document.querySelector('.navlink1')
    let items = document.querySelector('.nav-item1');
    items.classList.remove('visible');
    link.classList.remove('clip');
    link.classList.remove('visible');
    

    }
    
    
    
    function  myInpt () {
    let srch = document.querySelector(".srch-icon");
    srch.classList.add("index");
    let disicon = document.querySelector(".dis-icon");
    disicon.classList.add('add-animi')
    
    
    
    }
    
    
    function  clr () {
      let srch = document.querySelector(".srch-icon");
      srch.classList.remove("index");
      let disicon = document.querySelector(".dis-icon");
      disicon.classList.remove('add-animi')
       
      }
      
      const url = `https://script.google.com/macros/s/AKfycbzcR3q-3Moh97cC-bs05FI22ba1YPii1zRq-nmOksaLun3DFOaxQugvIrbHa83DLsE/exec`
 
      document.querySelector(".spinner").style.display = "flex";

      fetch(url)
        .then(res => res.json())
        .then(data => { 
           
          console.log(data); 
          displayProducts(data);


        });
      
      
      
      function displayProducts(data) { 
        const container = document.querySelector(".product-container");
        
        data.forEach(item => { 
          const card = document.createElement("div");
      card.classList.add("products");
          const name = item.name;
          const price = item.price;
          const image = item.imageUrl;
          const descript = item.description;
           const maindesc = item.mainDescript;
      
          card.innerHTML = `
             <div class="products" onclick="openSale(event)">
              <img src=" ${image}" alt="" />
              <div class="p-text"><p>${name}</p></div>
              <div class="prod-list">
                <div class="price">$${price}</div>
                <div class="cart">
                  <svg
                    fill="#555150"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    stroke="#555150"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g transform="translate(1 1)">
                        <g>
                          <g>
                            <path
                              d="M374.052,144.067c-5.12,0-8.533,3.413-8.533,8.533v7.68c0,28.16-23.04,52.053-51.2,52.053s-51.2-23.893-51.2-52.053 v-7.68c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v7.68c0,38.4,30.72,69.12,68.267,69.12 s68.267-30.72,68.267-69.12v-7.68C382.585,147.48,379.172,144.067,374.052,144.067z"
                            ></path>
                            <path
                              d="M203.385,255c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v11.093c0,17.92-15.36,31.573-34.133,31.573 c-18.773,0-34.133-14.507-34.133-31.573V255c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533v11.093 c0,27.307,23.04,48.64,51.2,48.64c28.16,0,51.2-21.333,51.2-48.64V255z"
                            ></path>
                            <path
                              d="M494.372,464.92l-27.307-324.267c-1.707-22.187-19.627-39.253-41.813-39.253h-42.667V67.267 C382.585,29.72,351.865-1,314.318-1s-68.267,30.72-68.267,68.267V101.4h-42.667c-20.76,0-37.782,14.944-41.284,35.042 c-3.211-0.592-6.525-0.908-9.916-0.908c-28.16,0-51.2,22.187-51.2,48.64V203.8h-33.28c-17.067,0-31.573,13.653-33.28,30.72 L15.651,476.013c-0.853,9.387,2.56,17.92,7.68,24.747c6.827,5.973,15.36,10.24,25.6,10.24h206.507h196.267 c11.947,0,22.187-5.12,31.573-12.8C490.958,488.813,495.225,476.867,494.372,464.92z M263.118,67.267 c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2V101.4h-102.4V67.267z M118.052,184.173c0-17.92,15.36-31.573,34.133-31.573 c10.469,0,19.873,4.514,26.147,11.465c0.09,0.1,0.181,0.199,0.269,0.3c0.296,0.336,0.586,0.677,0.868,1.023 c0.107,0.132,0.208,0.268,0.313,0.402c0.448,0.57,0.875,1.155,1.282,1.752c0.146,0.214,0.292,0.428,0.432,0.645 c0.205,0.318,0.406,0.638,0.6,0.962c0.155,0.259,0.3,0.523,0.447,0.786c0.276,0.494,0.538,0.996,0.786,1.504 c0.141,0.288,0.28,0.577,0.411,0.87c0.139,0.309,0.273,0.619,0.401,0.932c0.151,0.37,0.292,0.744,0.428,1.12 c0.139,0.383,0.27,0.769,0.393,1.158c0.131,0.415,0.256,0.831,0.369,1.253c0.07,0.26,0.136,0.521,0.199,0.784 c0.131,0.551,0.249,1.105,0.348,1.665c0.028,0.158,0.054,0.315,0.079,0.473c0.094,0.596,0.168,1.198,0.225,1.804 c0.018,0.192,0.034,0.385,0.049,0.577c0.051,0.694,0.087,1.392,0.087,2.097V203.8h-68.267V184.173z M36.131,488.813 c-2.56-2.56-3.413-6.827-3.413-11.093l18.773-241.493c0.853-8.533,7.68-15.36,16.213-15.36h41.813h85.333h39.253 c8.533,0,15.36,6.827,16.213,15.36l16.238,189.44h-63.171c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h64.634 l1.463,17.067h-49.03c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h50.533c0.261,4.531-1.419,8.913-4.453,11.947 c-3.413,3.413-7.68,5.12-11.947,5.12H48.932C43.811,493.933,39.545,492.227,36.131,488.813z M469.625,486.253 c-4.267,5.12-11.093,7.68-17.92,7.68H284.451c3.413-5.973,5.12-12.8,4.267-19.627l-3.423-39.93 c0.001-0.06,0.009-0.117,0.009-0.177c0-0.708-0.071-1.379-0.197-2.017l-16.869-196.81c-1.707-17.92-15.36-31.573-33.28-31.573 h-0.853h-30.72v-19.627c0-1.007-0.041-2.003-0.103-2.993c-0.012-0.189-0.03-0.377-0.045-0.565 c-0.067-0.901-0.159-1.794-0.276-2.68c-0.009-0.063-0.016-0.126-0.025-0.19c-2.104-15.458-11.691-28.413-25.118-35.74 c1.033-12.633,12.033-22.685,24.714-22.685h221.867c12.8,0,23.893,9.387,24.747,23.04l21.702,257.707h-62.662 c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h64.099l1.437,17.067h-48.469c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533h49.906l1.293,15.36C477.305,473.453,474.745,481.133,469.625,486.253z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

                 <div class="description">
        <p> ${descript}</p>
        <p>${maindesc}</p>
      </div>
              <span class="prod-icon">
                <i class="fa-regular fa-heart"></i>
              </span>
            </div>
          `;
          
          container.appendChild(card);

          
        });
        document.querySelector(".spinner").style.display = "none"; 
      }
      
  

      


      

function openSale (evts) {


        const card = document.createElement("div");
    card.classList.add("products");
  
let container = evts.target.closest('.products'); 
let conImg = container.querySelector('img').src;
let conNameCon = container.querySelector(".p-text");
let conName = conNameCon.children[0].innerHTML;
let conPriceCon = container.querySelector(".price").innerHTML;

const modalContainer = document.createElement("div");
console.log(container);
console.log(conPriceCon);
modalContainer.classList.add("modal-container");
const description = container.querySelector(".description");
const descrip1 = description.children[0].innerHTML;
const descrip2 = description.children[1].innerHTML;

modalContainer.innerHTML = 
`<div class="modal" >
    <div class="modal-cont">   
<img src="${conImg}" alt="" class="modal-img" id="cartimg1">
<span class="modal-icon" style="display: none;" >
  <i class="fa-regular fa-heart" ></i>
</span>
</div>
<div class="modal-text">

<div class="text-line"></div>

<div class="prod-type">
    <div> <h2>${conName}</h2></div>
<div class="price">${conPriceCon}</div> 

</div>

<div class="list">
mmersive Virtual Reality Experience: Step into another world with these VR glasses, designed for a fully immersive 3D experience. 360-Degree Views:

</div>
<div class="col">
<div >
${descrip1}
</div>





</div>

 <button onclick="cat(event,'prod1')" class="addbtn"> add to cart</button>





<div class="text-line2"></div>
</div>
</div>

<div class="cancel" onclick="cancl( ) ">&times;</div>`

document.body.appendChild(modalContainer);
document.querySelector(".modal-container").style.display=  "flex";




};



    
    
      
     
    
    
      function cat(ev){
     
        let btn = ev.target;

    console.log(btn)
          let btn_parent = btn.parentElement;
          let btn_granp = btn_parent.parentElement;
          let itemtext = btn_parent.children[1];
          let text = itemtext.children[0];
          let main_text = text.children[0].innerText; 
          let getimg = btn_granp.children[0];
          let img = getimg.children[0].src;
          let price = itemtext.children[1].innerText; 
      console.log(price)


      console.log(img)
          let cartcontainer = document.createElement('div');
          cartcontainer.innerHTML = `
             
          <div class="cart-con " > 
          <div class="cartimg">
                  <img src="${img}" alt="">
                  <div class="cartprice">
                  <h4>${main_text}</h4>
                  <ul class="cost">
                  <span class = "dollar-sign">$</span>
                      <span class ="itemsprice"> ${price}</span>
                      <span onclick="del(event)" class = "del">
                     <i class="fa-regular fa-trash-can"></i>
                     </span>
                  </ul>
                  <div class="increament2">
                      <span onclick="sub2(event,'hair1')" style="padding-bottom: 5px;">-</span>
                      <button id="hair1">1</button>
                      <span onclick="add2(event,'hair1')" style="font-size: 1.5rem;">+</span>
                  </div>
                  </div>
              </div>
                </div>
          `;
      
          cartcontainer.classList.add('cart-body')
    
          // Add the cart container to the page
    
   document.getElementById("cartbody").appendChild(cartcontainer);
     
  
    
      document.querySelector('.emty').classList.add('remove');
    
    
    
    
      document.querySelector(".checkout").style.display= " flex";
     document.getElementById('added').style.display="flex";
      setTimeout(() => {
        document.getElementById('added').style.display="none";add
      } , 1500);
      document.querySelector(".notify").style.display="block";
    
      
    
    
    total();
      removeLength();
    
    
          }
    
    function total() {
      let total = 0;
      const totalp = document.querySelector('.total-price');
      let cartItems = document.querySelectorAll('.cost');
    for (let i = 0; i < cartItems.length; i++) {
    //   total += parseFloat(cartItems[i].innerText);
      console.log(cartItems[i])
      let priceE = cartItems[i].querySelector('.itemsprice').innerHTML;
      let price = parseFloat(priceE.replace('$', '').trim());
console.log(price)
total += price;
totalp.innerHTML = total.toFixed(2);

    }





    }
    
    

  
    
    
    
    
    
       
    function del(event) {
    let con = event.target;
    let con_parent= con.parentElement.parentElement;
    let con_parentp =  con_parent.parentElement.parentElement;
    let grangp = con_parentp.parentElement.parentElement ;
    grangp.remove();
    console.log(grangp);
    
    removeLength();
    total();
      }
    function removeLength() {
      let cartItems = document.querySelectorAll('.cart-body');
      
      let totalItems = cartItems.length;
    
      if (totalItems === 0) {
        document.querySelector(".emptycart").style.display= "grid";
        document.querySelector(".checkout").style.display= "none";
       
        // document.querySelectorAll(".cart-body").style.display= "";
      }
    
    
      else{
       
        document.querySelector('.emptycart').classList.remove('remove');
        document.querySelector('.emptycart').style.display= "none";
        document.querySelector(".checkout").style.display= "block";
       
    
      }
    
    
    
    
    
    
    
    }
      
    
    
    
    
    
    
    
    
    
      
          
         
    
    function openCart(){
    
      document.querySelector(".mini-main").style.display= "none";
      document.querySelector("#maincart").style.display= 'block';
      
    
    }
    
    
    
    function closeCart(){
      document.querySelector("#maincart").style.display= 'none';
      document.querySelector(".mini-main").style.display= "block";
    
    
    }
 



    
    
    
    function add2(ent, id) {
       let  doll =  ent.target.parentElement.parentElement.querySelector('.dollar-sign');
        const purch = ent.target.parentElement.parentElement.querySelector('.itemsprice'); // Get the target element for price
        const quantityElement = ent.target.parentElement.querySelector(`#${id}`); // Get the quantity element by ID

    
        
        let quantity = parseInt(quantityElement.textContent);
    let currentValue = parseFloat(purch.textContent.replace('$', '').trim());
        if (!isNaN(currentValue) && !isNaN(quantity)) {
            // Set original price value once, if not already set
            if (!purch.dataset.originalValue) {
                purch.dataset.originalValue = currentValue; // Save the original price
            }
    
            // Increment quantity
            quantity += 1;
            quantityElement.textContent = quantity;
    
            // Update price based on the new quantity
            const newPrice = parseFloat(purch.dataset.originalValue) * quantity;
            purch.textContent = newPrice.toFixed(2); // Update price (rounded to 2 decimal places)
            doll.style.display = "inline-block";
        } else {
            console.error("The value is not a valid number");
        }
        total();
    }
    

    // function add2(ent) {
       
    //   }
      
      


    
    function sub2(ent, id) {
        const purch = ent.target.parentElement.parentElement.querySelector('.itemsprice'); // Get the target element for price
        const quantityElement = ent.target.parentElement.querySelector(`#${id}`); // Get the quantity element by ID
    
        let quantity = parseInt(quantityElement.textContent);
        let currentValue = parseFloat(purch.textContent.replace('$', '').trim());
    
        if (!isNaN(currentValue) && !isNaN(quantity) && quantity > 1) {
            // Set original price value once, if not already set
            if (!purch.dataset.originalValue) {
                purch.dataset.originalValue = currentValue; // Save the original price
            }
    
            // Decrement quantity
            quantity -= 1;
            quantityElement.textContent = quantity;
    
            // Update price based on the new quantity
            const newPrice = parseFloat(purch.dataset.originalValue) * quantity;
            purch.textContent = newPrice.toFixed(2); // Update price (rounded to 2 decimal places)

            if (quantity <= 1) {
              quantityElement.textContent = 1; // Reset quantity to 1 if it's less than or equal to 1
                return; // Stop execution if quantity is invalid
              }

        } 
    
        total(); // You might want to call this function to update the total price elsewhere
    }
    
    
    
    
    
    
    
    
    
    
    
    
    function add(evt , addname ){
      let purch2 = document.getElementById("hair1");
      let purch = document.getElementById(addname);
     +purch.textContent++;
     purch2.innerText=  purch.textContent ;
    }
    
    function sub(evt , subname  ){
      let purch2 = document.getElementById("incr2");
      let purch = document.getElementById(subname);
    
    if(purch.innerHTML ) {
      +purch.textContent--;
      purch2.innerText=  purch.textContent ;
    
    }
    
    else{
      purch.innerHTML= 0;
    
    }
    if (purch.innerHTML==0) {
      purch.innerHTML= 1;
    }
    
    
    
    }
    
    
    
    function cancl( ) {
      let products = document.querySelectorAll(".modal-container");
    
    
    products.forEach( (product) =>{
      product.style.display = "none";
    
    
    })
    
    
    
    
    }
    
    function closeadd(){
      document.getElementById('added').style.display="none";
    
    }
    
    
    function myInput (){
    
    var Inputs, filter, prodSec, pText, i, p, txtValue;
    Inputs = document.querySelectorAll("#input");
    Inputs.forEach((input) => {
     filter = input.value.toUpperCase();
    
    
    
    prodSec = document.querySelectorAll(".products");
    prodSec.forEach( (prod) =>{
    pText = prod.getElementsByTagName('p');
    
    
    
    for ( i= 0; i < pText.length; i++){
    p = pText[i];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    prod.style.display = "";
    
    
    }
    else {
      prod.style.display = "none";
    }
    
    }
    });
    
    }  );
    
    }
    
    
    
   





























































    
    
    
    
    