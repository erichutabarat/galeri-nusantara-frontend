const DetailCreator = (data) => {
    return `
        <div id="detail">
            <h2>${data.title}</h2>
            <img src="${data.images[0].url}" alt="${data.title}"/>
            <div>
                <div>${data.source}</div>
                <p>
                    ${data.description}
                </p>
            </div>
        </div>
    `
};

export default DetailCreator;