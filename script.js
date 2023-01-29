const searchForm=document.querySelector(".search-form");
const cartItem=document.querySelector(".cart-items-container");
const menuItem=document.querySelector(".navbar");


//!buttons
const searcBtn=document.querySelector('#search-btn');
const cartBtn=document.querySelector('#cart-btn');
const menuBtn=document.querySelector('#menu-btn');


//Header daki search butonuna tıkladığımızda searchi aktif eder
searcBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searcBtn) && !e.composedPath().includes(searchForm)){
            searchForm.classList.remove("active");
        }
    })
});


//Headerdaki Shopping karta tıkladığımızda sepetteki ürünleri gösterir.
cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(cartBtn)){
            cartItem.classList.remove("active");
        }
    })
})


menuBtn.addEventListener("click", function(){
    menuItem.classList.toggle("active");
    document.addEventListener("click", function(e){
        // composedPath tıklaığın eventi bulmaya yarar
        if(!e.composedPath().includes(menuBtn)){
            menuItem.classList.remove("active");
        }
    })
})

    
