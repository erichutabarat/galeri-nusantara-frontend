import ImageDetail from "../../data/image-detail";

const updateImageContent = async (id) => {
    const dataimage = await ImageDetail(id);
    const result = dataimage.data;
    return `
        <div id="update-image">
            <div id="current-image">
                <img src="${result.url}" alt="${result.description}"/>
            </div>
            <form id="update-images" onsubmit="return false;">
                <input type="file" id="images" name="images" accept="image/*"/>
                <button id="upload-image-now" data-index="${result.budayaId}">Upload</button>
            </div>
        </div>
    `;
}

export default updateImageContent;