function flipCard(services__card){
    const ServiceCard =  services__card.querySelector('.card');
    if(ServiceCard.style.transform == 'rotateY(180deg)'){
        ServiceCard.style.transform = 'rotateY(0deg)';
    }
    else {
        ServiceCard.style.transform = 'rotateY(180deg)';
    }
    
}