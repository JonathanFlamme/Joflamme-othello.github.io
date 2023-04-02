const app = {
    //-------WHO PLAYER BEGUN------/
    whitePlayer: true,

    //-----------Create Board Game---------------//
    createBoard() {
        //-------------- Create Board Game------------------//
        const boardElement = document.createElement('div');
        boardElement.className = 'board'

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
        document.querySelector('main').append(boardElement);
    },

    CreatePlayerPlayedTitle(){    
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



    init() {
        app.createBoard();
        app.CreatePlayerPlayedTitle()
        app.initPieceWhiteBlack();
        movePiece.init()
    },
}

app.init()
