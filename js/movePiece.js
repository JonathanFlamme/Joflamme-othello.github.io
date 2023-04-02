const movePiece = {
    pieceDown: false,
    pieceUp: false,
    pieceRight: false,
    pieceLeft: false,
    pieceAround: false,

    //--------- Select cellule ----------//
    handleCellTarget() {
        const cells = document.querySelectorAll('.cellElement');
        for (const cell of cells) {
            cell.addEventListener('click', movePiece.toCheckAroundPiece);
        }
    },


    //--------- Put Piece in the board ----------//
    putPiece(event) {
        const cellElement = event.currentTarget;
        console.log('creation piece')

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
    },

    //---------------------Rules----------------------//
    ruleMovePiece() {
        
        if (app.whitePlayer === true) {
            movePiece.pieceDown ? rulesWhite.ruleDown() : null;
            movePiece.pieceRight ? rulesWhite.ruleRight() : null;
            movePiece.pieceLeft ? rulesWhite.ruleLeft() : null;
            movePiece.pieceUp ? rulesWhite.ruleUp() : null;

        } else {
            movePiece.pieceDown ? rulesBlack.ruleDown() : null;
            movePiece.pieceRight ? rulesBlack.ruleRight() : null;
            movePiece.pieceLeft ? rulesBlack.ruleLeft() : null;
            movePiece.pieceUp ? rulesBlack.ruleUp() : null;

        }
    },


    toCheckAroundPiece() {
        movePiece.pieceDown = false;
        movePiece.pieceUp = false;
        movePiece.pieceRight = false;
        movePiece.pieceLeft = false;
        movePiece.pieceAround = false;

        if (event.currentTarget.children.length === 0) {

            let cellLine = Number(event.currentTarget.id.split('')[0]);
            let cellLineNext = cellLine + 1;
            let cellLineBefore = cellLine - 1;
            let cellColumn = Number(event.currentTarget.id.split('')[1]);
            let cellColumnNext = cellColumn + 1;
            let cellColumnBefore = cellColumn - 1;

            console.log(event.currentTarget.children.length)
            console.log(cellLine)
            console.log(cellColumn)
            //chech down 
            if (cellLine < 8 && document.getElementById(`${cellLineNext}${cellColumn}_cell`).children.length === 1) {
                movePiece.pieceDown = true;
                movePiece.pieceAround = true;
            }
            //chech Up 
            if (cellLine > 1 && document.getElementById(`${cellLineBefore}${cellColumn}_cell`).children.length === 1) {
                movePiece.pieceUp = true;
                movePiece.pieceAround = true;
            }
            //chech right 
            if (cellColumn < 8 && document.getElementById(`${cellLine}${cellColumnNext}_cell`).children.length === 1) {
                movePiece.pieceRight = true;
                movePiece.pieceAround = true;
            }
            //chech Left
            if (cellColumn > 1 && document.getElementById(`${cellLine}${cellColumnBefore}_cell`).children.length === 1) {
                movePiece.pieceLeft = true;
                movePiece.pieceAround = true;
            }
            movePiece.pieceAround ? movePiece.ruleMovePiece() : null;
        }

        console.log(movePiece.pieceDown)
        console.log(movePiece.pieceUp)
        console.log(movePiece.pieceRight)
        console.log(movePiece.pieceLeft)
        console.log('piecearound', movePiece.pieceAround)

    },



    init() {
        movePiece.handleCellTarget()

    }

}