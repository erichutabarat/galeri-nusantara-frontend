const CardCreator = (data) => {
    return `
    <div class="card">
    <div class="card__corner"></div>
        <div class="card__img" style="background-image: url(${data.images[0].url});">
            <span class="card__span">Category</span>
        </div>
        <div class="card-int">
            <p class="card-int__title">${data.title}</p>
            <p class="excerpt">
                ${data.description}
            </p>
            <a
            href="#/detail/${data.id}"
            >
            <button class="card-int__button">Show More</button>
            </a>

        </div>
    </div>
    `;
};

export default CardCreator;