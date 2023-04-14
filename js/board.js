const app = {
        //-------WHO PLAYER BEGUN------/
        whitePlayer: true,
        whitePieceLeft : 30,
        blackPieceLeft : 1,

        emptyBoard() {
            document.querySelector('main').innerHTML = ' ';
            app.whitePlayer = true;
            app.whitePieceLeft = 30;
            app.blackPieceLeft = 1;

        },
        //-----------Create Board Game---------------//
        createBoard() {
            //-------------- Create Board Game------------------//
            const boardGlobal = document.createElement('div');
            boardGlobal.className = 'boardGlobal';
            const boardElement = document.createElement('div');
            boardElement.className = 'board';

            for (let i1 = 1; i1 < 9; i1++) {
                const lineElement = document.createElement('div');
                lineElement.className = 'lineElement';

                for (let i2 = 1; i2 < 9; i2++) {
                    const cellElement = document.createElement('div');
                    cellElement.id = `${i1}${i2}_cell`;
                    cellElement.className = 'cellElement';
                    lineElement.append(cellElement);
                }
                boardElement.append(lineElement);
            }
            document.querySelector('main').append(boardGlobal);
            document.querySelector('.boardGlobal').append(boardElement);
        },

        //---------  Create Board for waiting piece ---------//
        createWaitingBoard() {

        
        waitPieceWhite = document.createElement('div');
        waitPieceWhite.className = 'bloc_waitingPiece block_waitingPiece--White';

        waitPieceBlack = document.createElement('div');
        waitPieceBlack.className = 'bloc_waitingPiece block_waitingPiece--Black';
        
        document.querySelector('.boardGlobal').prepend(waitPieceWhite);
        document.querySelector('.boardGlobal').append(waitPieceBlack);

        for (let i = 1; i < 31; i++) {
            const waitingPieceWhite = document.createElement('div');
            waitingPieceWhite.className = 'waitingPieceWhite';
            waitingPieceWhite.id = 'waitingPieceWhite' + i;
            
            const waitingPieceBlack = document.createElement('div');
            waitingPieceBlack.className = 'waitingPieceBlack';
            waitingPieceBlack.id = 'waitingPieceBlack' + i;
            
            document.querySelector('.block_waitingPiece--White').append(waitingPieceWhite);
            document.querySelector('.block_waitingPiece--Black').append(waitingPieceBlack);
        }


    },

    CreatePlayerPlayedTitle() {
        //-----------Create title Who Player Played--------------//
        const playerTitleWhite = document.createElement('h2');
        playerTitleWhite.className = 'playerTitle playerTitle--White';
        playerTitleWhite.innerHTML = 'Player White';
        document.querySelector('main').prepend(playerTitleWhite);

        const playerTitleBlack = document.createElement('h2');
        playerTitleBlack.className = 'hide playerTitle playerTitle--Black';
        playerTitleBlack.innerHTML = 'Player Black';
        document.querySelector('main').append(playerTitleBlack);
    },

    //----------Init piece black and white center-----------//
    initPieceWhiteBlack() {
        // -------  White PIECE init  ------- //
        const pieceWhite = document.createElement('div');
        pieceWhite.className = 'whitePiece';
        const cellWhite = document.getElementById('44_cell')
        cellWhite.className += ' cellWhitePiece';
        cellWhite.append(pieceWhite);

        const pieceWhite1 = document.createElement('div');
        pieceWhite1.className = 'whitePiece';
        const cellWhite1 = document.getElementById('55_cell')
        cellWhite1.className += ' cellWhitePiece';
        cellWhite1.append(pieceWhite1);

        // -------  Black PIECE init  ---------/
        const pieceBlack1 = document.createElement('div');
        pieceBlack1.className = 'blackPiece';
        const cellBlack1 = document.getElementById('54_cell')
        cellBlack1.className += ' cellBlackPiece';
        cellBlack1.append(pieceBlack1);

        const pieceBlack2 = document.createElement('div');
        pieceBlack2.className = 'blackPiece';
        const cellBlack2 = document.getElementById('45_cell')
        cellBlack2.className += ' cellBlackPiece';
        cellBlack2.append(pieceBlack2);
    },


    //----------Who Player played ------------//
    whoPlayerPlayed() {
        if (app.whitePlayer == true) {
            document.querySelector('.playerTitle--White').classList.toggle('hide');
            document.querySelector('.playerTitle--Black').classList.toggle('hide');
        } else {
            document.querySelector('.playerTitle--White').classList.toggle('hide');
            document.querySelector('.playerTitle--Black').classList.toggle('hide');
        }
    },

    createcountPoint() {
    //------- Create block header countPoint and button RESET -------//
        const blockPointReset = document.createElement('div');
        blockPointReset.className = 'blockPointReset';
        document.querySelector('main').prepend(blockPointReset);

        // Button RESET
        const btnReset = document.createElement('button');
        btnReset.className = 'btn btnReset';
        btnReset.innerHTML = 'Reset'
        document.querySelector('.blockPointReset').append(btnReset);

        

        //------ Create show counter point white/black ---------//
        const countPoint = document.createElement('div');
        countPoint.id = 'countPoint';

        whitePoint = document.createElement('p');
        whitePoint.id = 'whitePoint';
        whitePoint.innerHTML = 'White = 0';

        blackPoint = document.createElement('p');
        blackPoint.id = 'blackPoint';
        blackPoint.innerHTML = 'Black = 0';

        document.querySelector('.blockPointReset').append(countPoint);
        document.querySelector('#countPoint').append(blackPoint);
        document.querySelector('#countPoint').append(whitePoint);

        // Button to skip the turn
        const btnSkip = document.createElement('button');
        btnSkip.className = 'btn btnSkip';
        btnSkip.innerHTML = 'To skip'
        document.querySelector('.blockPointReset').append(btnSkip);
    },


    init() {
        app.emptyBoard();
        app.createBoard();
        app.createWaitingBoard();
        app.CreatePlayerPlayedTitle()
        app.initPieceWhiteBlack();
        app.createcountPoint();
        movePiece.init();

    },
}


app.init()