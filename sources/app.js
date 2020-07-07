function load() {
    Module.load("UI").then(()=>{
        particlesJS.load("particles", "resources/configurations/particles.json");
    });
}