const DetailCreator = (data) => {
    return `
        <div id="detail">
            <h2>${data.title}</h2>
            <img src="${data.images[0].url}" alt="${data.title}"/>
        </div>
        <div id="description">
        <h3>${data.source}</h3>
        <p>
            ${data.description}
        </p>
    </div>
    `
};


export default DetailCreator;