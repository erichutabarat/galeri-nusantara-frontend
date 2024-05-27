import detailBudaya from "../../data/data-detail";
import DetailCreator from "../../templates/creator/detail-creator";

const detailpage = async (id) => {
    const result = await detailBudaya(id);
    const data = DetailCreator(result.data);
    return `
        <div>
            <h1>Detail page ${id}</h1>
            <div>
                ${data}
            </div>
        </div>
    `
};

export default detailpage;