import detailBudaya from "../../data/data-detail";
import DetailCreator from "../../templates/creator/detail-creator";

const detailpage = async (id) => {
    const result = await detailBudaya(id);
    const data = DetailCreator(result.data);
    return `
    <main>
        <div>
            <h1>Detail page</h1>
            <div>
                ${data}
            </div>
        </div>
        <main>
    `
};

export default detailpage;