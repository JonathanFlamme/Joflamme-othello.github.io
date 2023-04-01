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


// //--------------------------------------------------------------       
//         for(i=6;i<8;i++){
//         const pieceWhite = document.createElement('div');
//         pieceWhite.className = 'blackPiece';
//         document.getElementById(`4${i}_cell`).append(pieceWhite);
        
        
//         const pieceWhite2 = document.createElement('div');
//         pieceWhite2.className = 'blackPiece';
//         document.getElementById(`7${i}_cell`).append(pieceWhite2);
//     }
//     const pieceWhite3 = document.createElement('div');
//     pieceWhite3.className = 'whitePiece';
//     document.getElementById(`75_cell`).append(pieceWhite3);
// //--------------------------------------------------------------       
        

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

        const pieceBlack = document.createElement('div');
        pieceBlack.className = 'blackPiece';
        document.getElementById('54_cell').append(pieceBlack);
        const pieceBlack1 = document.createElement('div');
        pieceBlack1.className = 'blackPiece';
        document.getElementById('45_cell').append(pieceBlack1);
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
