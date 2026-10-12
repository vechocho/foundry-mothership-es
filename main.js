Hooks.once('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'foundry-mothership-es',
            lang: 'es',
            dir: 'compendiums/es'
        });
    }
});

