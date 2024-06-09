import routes from "../routes/routes";
import errorpage from "../views/pages/errorpage";

class App {
  path;
  constructor() {
    this.path = window.location.hash;
    this.appLocation = document.querySelector('#app');
  }
  async navigate() {
    this.getPath();
    const route = routes.find(route => route.path === this.path);
    if (route) {
      try {
        const handlerModule = await route.handler();
        const handler = handlerModule.default;
        let content;
        if (route.path.includes('detail')) {
          const id = this.id;
          content = await handler(id);
        } else {
          content = await handler();
        }
        await this.show(content);

        if (route.afterRender) {
          const afterRenderModule = await route.afterRender();
          const afterRender = afterRenderModule.default;
          await afterRender();
        }
      } catch (error) {
        console.error('Error loading route handler:', error);
        this.show(errorpage());
      }
    } else {
      this.show(errorpage());
    }
  }
  getPath() {
    const allpath = window.location.hash || '#/';
    if (allpath.includes('detail')) {
      const firstpath = allpath.split('/').slice(0, -1).join('/');
      this.path = firstpath;
      this.id = allpath.split('/detail/')[1];
    } else {
      this.path = allpath;
    }
  }

  async show(content) {
    this.appLocation.innerHTML = '';
    if (content) {
      this.appLocation.innerHTML = content;
    } else {
      this.appLocation.innerHTML = "Content not found.";
    }
  }
}

export default App;
