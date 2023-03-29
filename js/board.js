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
            lineElement.id = `${i1}_0_cell`;
            lineElement.className = 'lineElement';

            for (let i2 = 1; i2 < 9; i2++) {
                const cellElement = document.createElement('div');
                cellElement.id = `${i1}_${i2}_cell`;
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
        const pieceWhite = document.createElement('div');
        pieceWhite.className = 'whitePiece';
        document.getElementById('4_5_cell').append(pieceWhite);
        const pieceWhite1 = document.createElement('div');
        pieceWhite1.className = 'whitePiece';
        document.getElementById('5_4_cell').append(pieceWhite1);

        const pieceBlack = document.createElement('div');
        pieceBlack.className = 'blackPiece';
        document.getElementById('5_5_cell').append(pieceBlack);
        const pieceBlack1 = document.createElement('div');
        pieceBlack1.className = 'blackPiece';
        document.getElementById('4_4_cell').append(pieceBlack1);
    },

    //--------- Put Piece in the board ----------//
    putPiece(event) {
        const cellElement = event.currentTarget;

        //--------- Create piece in the board ----------//
        if (cellElement.children.length === 0) {
            const piece = document.createElement('div');
            //Choice color piece
            if (app.whitePlayer === true) {
                piece.className = 'whitePiece'
                app.whitePlayer = false;
            } else {
                piece.className = 'blackPiece'
                app.whitePlayer = true;
            }
            cellElement.append(piece);
        }
        //----------Title change when player put a piece--------------//
        app.whoPlayerPlayed();
    },

    //--------- Select cellule ----------//
    handleCellTarget() {
        const cells = document.querySelectorAll('.cellElement');
        for (const cell of cells) {
            cell.addEventListener('click', app.putPiece);
        }
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
        app.handleCellTarget();

    },
}

app.init()
