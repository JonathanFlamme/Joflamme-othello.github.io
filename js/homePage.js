const homePage = {

    createBtnEasyMode() {
        // Button EASYMODE
        const btnResetEasyMode = document.createElement('button');
        btnResetEasyMode.className = 'btnHome btnEasyMode';
        btnResetEasyMode.innerHTML = 'Easy Mode'
        document.querySelector('main').append(btnResetEasyMode);

        const descriptionEasyMode = document.createElement('p');
        descriptionEasyMode.className = 'descriptionEasyMode';
        descriptionEasyMode.innerHTML = 'Appuyer sur le bouton "Easy mode" pour activer la prévisualisation des prochains coups'
        document.querySelector('main').prepend(descriptionEasyMode);

    },
    btnLaunchGame() {
        // Button EASYMODE
        const btnLaunchGame = document.createElement('button');
        btnLaunchGame.className = 'btnHome btnLaunchGame';
        btnLaunchGame.innerHTML = 'Lancer le jeu'
        document.querySelector('main').append(btnLaunchGame);

        const launchGame = document.querySelector('.btnLaunchGame');
        launchGame.addEventListener('click', app.init);
    },

    LaunchGame() {

    },

    init() {
        app.emptyBoard();
        homePage.createBtnEasyMode();
        homePage.btnLaunchGame();
        easyMode.init();
    },
}

homePage.init();