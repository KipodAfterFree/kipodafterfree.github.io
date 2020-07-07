function load() {
    Module.load("UI").then(() => {
        particles();
    });
    window.addEventListener("popstate", () => {
        particles();
    });
}

function particles() {
    particlesJS.load("particles", "resources/configurations/particles.json");
}