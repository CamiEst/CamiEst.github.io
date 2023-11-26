document.addEventListener("DOMContentLoaded", ()=>{
    prevent();
    isLogged();
});

function prevent(){
    const enter = document.getElementById('search-by-name');
    const form = document.getElementById('products__searcher');
    

    enter.addEventListener("keydown", (event)=>{
        if(event.key === "Enter"){
            event.preventDefault();
            search();
        }
    });

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        search();
    });
}


function updatePrice(){
    const actualPrice = document.getElementById('search-by-price').value;
    const showPrice = document.getElementById('valuePrice').textContent = actualPrice;
}

function search(){
    const items = document.querySelectorAll('div.product__item');
    const names = document.querySelectorAll('h2.product__name');
    const prices = document.querySelectorAll('span.price');

    const name = document.getElementById('search-by-name');
    const price = document.getElementById('search-by-price');
    const type = document.getElementById('search-by-type');
    const occasion = document.querySelectorAll('input[name=search-by-occasion]:checked');
    
    console.log(name.value);
    console.log(price.value);
    console.log(type.value);

    occasion.forEach((product)=>{
        console.log(product.value);
    });

    items.forEach((product,index)=>{
        product.classList.add('hidden');
        const sameType = classComparator(product, type.value);
        const sameOrMinPrice = priceComparator(price.value, prices[index].textContent);
        const sameOccasion = occasionComparator(product, occasion);
        const sameWords = nameComparator(names[index].textContent.toLowerCase(), name.value.toLowerCase());

        if((sameType || type.value === 'all') && sameOrMinPrice && sameOccasion && sameWords){
            product.classList.remove('hidden');
        }
    });
}

function nameComparator(productsNames, text){
    if(productsNames.indexOf(text) !== -1 || text === ""){
        return true;
    }
    else return false;
}

function occasionComparator(product, occasion){
    const class1 = product.classList;
    let sameType;

    occasion.forEach((occs)=>{
        class1.forEach((classA)=>{
            if(classA === occs.value){
                sameType = true;
                return;
            }   
        });
        if(sameType) return;
    });
    if(sameType) return true;
    else return false;
}

function priceComparator(price, actualPrice){
    const maxPrice = parseInt(actualPrice);
    if(maxPrice <= price) return true;
    else return false;
}

function classComparator(product, classB){
    const class1 = product.classList;
    let sameType;

    class1.forEach((classA)=>{
        if(classA === classB){
            sameType = true;
            return;
        }   
    });
    if(sameType) return true;
    else return false;

}

function isLogged(){
    const userLogged = sessionStorage.getItem('HAS_LOGGED');
    const car = document.querySelectorAll('.add-to-car');

    car.forEach((shoppingCart)=>{
        shoppingCart.addEventListener('click',()=>{
            const notLog = document.getElementById('not-logged');
            const isLog = document.getElementById('is-logged');
            userLogged === "true" ? logged(isLog) : logged(notLog);
        });
    });
}

function logged(log){
    log.classList.remove('hidden');
    setTimeout(()=>{log.classList.add('hidden')}, 3000);
}