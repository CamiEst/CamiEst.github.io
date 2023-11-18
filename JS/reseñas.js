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

    review = (review + direction + totalReviews) % totalReviews;

    reviews.forEach((rev, index) => {
        const move = review * -100;
        rev.style.transform = `translateX(${move}%)`;
    });
}