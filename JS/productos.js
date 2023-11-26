document.addEventListener("DOMContentLoaded", ()=>{search()});

function search(){
    const text = document.getElementById('search-by-name');
    const form = document.getElementById('products__searcher');

    text.addEventListener("keydown", (event)=>{
        if(event.key === "Enter"){
            event.preventDefault();
        }
    });

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
    });
}


function updatePrice(){
    const actualPrice = document.getElementById('search-by-price').value;
    const showPrice = document.getElementById('valuePrice').textContent = actualPrice;
}
