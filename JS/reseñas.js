let review = 0;

function leftReview(){
    showReview(-1);
}

function rightReview(){
    showReview(1);
}

function showReview(direction){
    const reviews = document.querySelectorAll('.review__item');
    const totalReviews = reviews.length;

    console.log(`Total de reseñas: ${totalReviews}`);

    review = (review + direction + totalReviews) % totalReviews;
    console.log(`Mostrando reseña ${review + 1} de ${totalReviews}`);

    reviews.forEach((rev, index) => {
        const move = review * -100;

        console.log(`review ${index + 1} - desplazamiento: ${move}%`)
        rev.style.transform = `translateX(${move}%)`;
    });
    console.log(reviews.length);
}