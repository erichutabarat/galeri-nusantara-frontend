import routes from "../routes/routes";
import errorpage from "../views/pages/errorpage";

class App{
    path;
    constructor(){
        this.path =  window.location.hash;
        this.appLocation = document.querySelector('#app');
    }
    async navigate(){
        this.getPath();
        const route = routes.find(route => route.path === this.path);
        if(route){
            if(route.path.includes('detail')){
                const id = this.id;
                const content = await route.handler(id);
                this.show(content);
            }
            else{
                const content = await route.handler();
                this.show(content);
            }
        }
        else{
            this.show(errorpage());
        }
    }
    getPath(){
        const allpath = window.location.hash || '#/';
        if(allpath.includes('detail')){
            const firstpath = allpath.split('/').slice(0, -1).join('/');
            this.path = firstpath;
            this.id = allpath.split('/detail/')[1];
        }
        else{
            this.path = allpath;
        }
    }
    
    async show(content){
        this.appLocation.innerHTML = '';
        if (content) {
            this.appLocation.innerHTML = content;
        } else {
            this.appLocation.innerHTML = "Content not found.";
        }
    }
    
}

export default App;