import CheckLogin from "../../utils/check-login";

const dashboardPage  = () => {
    const check = CheckLogin();
    return `
        <h1>This is Dashboard page</h1>
    `;
};

export default dashboardPage;