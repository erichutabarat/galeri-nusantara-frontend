import dataBudaya from "../../data/data-budaya";
import CardCreator from "../../templates/creator/card-creator";

const homeAfter = async () => {
    const result = await dataBudaya();
    const list = result.data.map(CardCreator).join('');
    document.getElementById("budaya-list").innerHTML = list;
};

export default homeAfter;