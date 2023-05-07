const homePage = {

    createBtnEasyMode() {
        // Button EASYMODE
        const descriptionEasyMode = document.createElement('p');
        descriptionEasyMode.className = 'descriptionMode';
        descriptionEasyMode.innerHTML = 'Next move preview'
        document.querySelector('main').append(descriptionEasyMode);

        const btnResetEasyMode = document.createElement('button');
        btnResetEasyMode.className = 'btnHome btnEasyMode';
        btnResetEasyMode.innerHTML = 'Easy Mode'
        document.querySelector('main').append(btnResetEasyMode);
    },

    createBtnComputerModeIA() {
        // Button ComputerIA
        const btnResetcompterIA = document.createElement('button');
        btnResetcompterIA.className = 'btnHome btncomputerMode';
        btnResetcompterIA.innerHTML = 'Player VS Computer'
        document.querySelector('main').append(btnResetcompterIA);

        const descriptionComputerIA = document.createElement('p');
        descriptionComputerIA.className = 'descriptionMode';
        descriptionComputerIA.innerHTML = 'Player (white) - Computer (black)'
        document.querySelector('main').append(descriptionComputerIA);
    },
    btnLaunchGame() {
        // Button EASYMODE
        const btnLaunchGame = document.createElement('button');
        btnLaunchGame.className = 'btnHome btnLaunchGame';
        btnLaunchGame.innerHTML = 'Play'
        document.querySelector('main').append(btnLaunchGame);

        const launchGame = document.querySelector('.btnLaunchGame');
        launchGame.addEventListener('click', app.init);
    },


    init() {
        app.emptyBoard();
        homePage.createBtnEasyMode();
        homePage.createBtnComputerModeIA();
        homePage.btnLaunchGame();
        easyMode.init();
        computerMode.init();
    },
}

homePage.init();