const movePiece = {

    //--------- Select cellule ----------//
    handleCellTarget() {
        const cells = document.querySelectorAll('.cellElement');
        for (const cell of cells) {
            cell.addEventListener('click', movePiece.putPiece);
        }
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
                cellElement.classList.add('cellWhitePiece');
                app.whitePlayer = false;
            } else {
                piece.className = 'blackPiece'
                cellElement.classList.add('cellBlackPiece');

                app.whitePlayer = true;
            }
            cellElement.append(piece);
            
            //----------Title change when player put a piece--------------//
            app.whoPlayerPlayed();
        }

        //---------------------Rules----------------------//
        if (app.whitePlayer === false) {
            rulesWhite.init();        
        }else{
            rulesBlack.init();
        }
    },

    init() {
        movePiece.handleCellTarget()

    }

}