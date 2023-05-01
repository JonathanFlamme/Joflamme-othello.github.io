const easyMode = {
    easyMode: Boolean,
    saveCellPiece: Array,
    easyModeActive: Boolean,
    firstLauch: Boolean,

    waitingEasyMode() {
        const activeEasyMode = document.querySelector('.btnEasyMode');
        activeEasyMode.addEventListener('click', easyMode.activation);
    },

    activation() {
        const activeEasyMode = document.querySelector('.btnEasyMode');
        activeEasyMode.classList.toggle('btnEasyModeActivated');

        if (activeEasyMode.className.slice(19).trim() === 'btnEasyModeActivated') {
            easyMode.easyModeActive = true;
            easyMode.firstLauch = true;
        } else {
            easyMode.easyModeActive = false
            easyMode.firstLauch = false;
        }

        console.log(easyMode.easyModeActive)
        console.log(easyMode.firstLauch)
    },


    testAllBoard() {
        if (easyMode.easyModeActive === true) {
            easyMode.easyMode = true;

            for (let cellLine = 1; cellLine < 9; cellLine++) {
                for (let cellColumn = 1; cellColumn < 9; cellColumn++) {

                    movePiece.toCheckAroundPiece(event, cellLine, cellColumn);
                }
            }


            easyMode.showPotentialPiece();
            easyMode.firstLauch = false;
            console.log('test')
            // console.log('fin', easyMode.saveCellPiece)
        }
    },

    showPotentialPiece() {
        easyMode.showPotentialPosition = true

        easyMode.saveCellPiece.forEach(cell => {

            const piecePotential = document.createElement('div');

            if (app.whitePlayer == true) {
                piecePotential.className = 'potential potential--white';
            } else {
                piecePotential.className = 'potential potential--black';
            }
            piecePotential.id = `${cell}_potential`;
            document.getElementById(cell).append(piecePotential)
        });

    },

    removePotentialPiece() {

        easyMode.saveCellPiece.forEach(cell => {
            const potential = document.getElementById(`${cell}_potential`)
            document.getElementById(cell).removeChild(potential);

        });

        easyMode.showPotentialPosition = false;
        // --- Reset piece saved -----//
        easyMode.saveCellPiece = [];
        easyMode.easyMode = false;
    },

    //-------------------------------------------------//
    // ------ Save potential piece in the boards ----- //
    //-------------------------------------------------//
    saveCellPieces(cellLineEasyMode, cellcolumnEasyMode) {

        // ----- Check doublon ---- //
        targetCell = `${cellLineEasyMode}${cellcolumnEasyMode}_cell`
        findCell = easyMode.saveCellPiece.find(x => x === targetCell)

        if (!findCell || findCell !== targetCell) {
            // ---- Save potential piece ---- //
            easyMode.saveCellPiece.push(targetCell);
        }
    },


    init() {
        easyMode.waitingEasyMode();
        easyMode.easyMode = false;
        easyMode.saveCellPiece = [];
        easyMode.easyModeActive = false;
        easyMode.firstLauch = false;
    },


}