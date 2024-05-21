import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './app';

const Apps = new App();
window.addEventListener('load', () => {
    Apps.navigate();
});

window.addEventListener('hashchange', () => {
    Apps.navigate();
});

window.addEventListener('popstate', () => {
    Apps.navigate();
})