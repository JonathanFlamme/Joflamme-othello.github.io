const movePiece = {
    pieceDown: false,
    pieceUp: false,
    pieceRight: false,
    pieceLeft: false,
    pieceUpRight: false,
    pieceUpLeft: false,
    pieceDownLeft: false,
    pieceDownRight: false,
    pieceAround: false,

    //--------- Select cellule ----------//
    handleCellTarget() {
        const cells = document.querySelectorAll('.cellElement');
        for (const cell of cells) {
            cell.addEventListener('click', movePiece.toCheckAroundPiece);
        }
    },

    //--------- Buttun Reset -----------------//
    buttonReset() {
        const btn_Reset = document.querySelector('.btnReset');
        btn_Reset.addEventListener('click', app.init);

        const btn_skip = document.querySelector('.btnSkip');
        btn_skip.addEventListener('click', movePiece.buttonSkip);
    },
    //--------- Buttun to skip the turn -----------------//
    buttonSkip() {
        app.whitePlayer ? app.whitePlayer = false : app.whitePlayer = true;
        app.whoPlayerPlayed();        
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
            countPoint.countPoint();
            movePiece.removePiece();
        }
    },

    //---------------------Rules----------------------//
    ruleMovePiece() {

        if (app.whitePlayer === true) {
            movePiece.pieceDown ? rulesWhite.ruleDown() : null;
            movePiece.pieceRight ? rulesWhite.ruleRight() : null;
            movePiece.pieceLeft ? rulesWhite.ruleLeft() : null;
            movePiece.pieceUp ? rulesWhite.ruleUp() : null;
            movePiece.pieceUpRight ? rulesDiagonalWhite.ruleUpRight() : null;
            movePiece.pieceUpLeft ? rulesDiagonalWhite.ruleUpLeft() : null;
            movePiece.pieceDownLeft ? rulesDiagonalWhite.ruleDownLeft() : null;
            movePiece.pieceDownRight ? rulesDiagonalWhite.ruleDownRight() : null;

        } else {
            movePiece.pieceDown ? rulesBlack.ruleDown() : null;
            movePiece.pieceRight ? rulesBlack.ruleRight() : null;
            movePiece.pieceLeft ? rulesBlack.ruleLeft() : null;
            movePiece.pieceUp ? rulesBlack.ruleUp() : null;
            movePiece.pieceUpRight ? rulesDiagonalBlack.ruleUpRight() : null;
            movePiece.pieceUpLeft ? rulesDiagonalBlack.ruleUpLeft() : null;
            movePiece.pieceDownLeft ? rulesDiagonalBlack.ruleDownLeft() : null;
            movePiece.pieceDownRight ? rulesDiagonalBlack.ruleDownRight() : null;
        }
    },

    //------------------- Check if piece Around Target cell ----------------------------//
    toCheckAroundPiece() {
        movePiece.pieceDown = false;
        movePiece.pieceUp = false;
        movePiece.pieceRight = false;
        movePiece.pieceLeft = false;
        movePiece.pieceUpRight = false;
        movePiece.pieceUpLeft = false;
        movePiece.pieceDownLeft = false;
        movePiece.pieceDownRight = false;
        movePiece.pieceAround = false;

        if (event.currentTarget.children.length === 0) {

            let cellLine = Number(event.currentTarget.id.split('')[0]);
            let cellLineNext = cellLine + 1;
            let cellLineBefore = cellLine - 1;
            let cellColumn = Number(event.currentTarget.id.split('')[1]);
            let cellColumnNext = cellColumn + 1;
            let cellColumnBefore = cellColumn - 1;

            //------------DEBUGG----------------
            //--------------------
            // console.log(cellLine)
            // console.log(cellColumn)

            //check down 
            if (cellLine < 8 && document.getElementById(`${cellLineNext}${cellColumn}_cell`).children.length === 1) {
                movePiece.pieceDown = true;
                movePiece.pieceAround = true;
            }
            //check Up 
            if (cellLine > 1 && document.getElementById(`${cellLineBefore}${cellColumn}_cell`).children.length === 1) {
                movePiece.pieceUp = true;
                movePiece.pieceAround = true;
            }
            //check right 
            if (cellColumn < 8 && document.getElementById(`${cellLine}${cellColumnNext}_cell`).children.length === 1) {
                movePiece.pieceRight = true;
                movePiece.pieceAround = true;
            }
            //check Left
            if (cellColumn > 1 && document.getElementById(`${cellLine}${cellColumnBefore}_cell`).children.length === 1) {
                movePiece.pieceLeft = true;
                movePiece.pieceAround = true;
            }
            //check Up Right
            if (cellLine > 1 && cellColumn < 8 && document.getElementById(`${cellLineBefore}${cellColumnNext}_cell`).children.length === 1) {
                movePiece.pieceUpRight = true;
                movePiece.pieceAround = true;
            }
            //check Up Left
            if (cellLine > 1 && cellColumn > 1 && document.getElementById(`${cellLineBefore}${cellColumnBefore}_cell`).children.length === 1) {
                movePiece.pieceUpLeft = true;
                movePiece.pieceAround = true;
            }
            //check Down Left
            if (cellLine < 8 && cellColumn > 1 && document.getElementById(`${cellLineNext}${cellColumnBefore}_cell`).children.length === 1) {
                movePiece.pieceDownLeft = true;
                movePiece.pieceAround = true;
            }
            //check Down Right
            if (cellLine < 8 && cellColumn < 8 && document.getElementById(`${cellLineNext}${cellColumnNext}_cell`).children.length === 1) {
                movePiece.pieceDownRight = true;
                movePiece.pieceAround = true;
            }

            movePiece.pieceAround ? movePiece.ruleMovePiece() : null;
        }

        // console.log('down', movePiece.pieceDown)
        // console.log('up', movePiece.pieceUp)
        // console.log('right', movePiece.pieceRight)
        // console.log('left', movePiece.pieceLeft)
        // console.log('upRight', movePiece.pieceUpRight)
        // console.log('upLeft', movePiece.pieceUpLeft)
        // console.log('DownLeft', movePiece.pieceDownLeft)
        // console.log('DownRight', movePiece.pieceDownRight)
        // console.log('piecearound', movePiece.pieceAround)

    },

    removePiece() {
        if (app.whitePlayer === false) {

            const whitePieceRemoved = document.querySelector('#waitingPieceWhite' + app.whitePieceLeft);
            document.querySelector('.block_waitingPiece--White').removeChild(whitePieceRemoved);

            app.whitePieceLeft--;

        } else {
            const blackPieceRemoved = document.querySelector('#waitingPieceBlack' + app.blackPieceLeft);
            document.querySelector('.block_waitingPiece--Black').removeChild(blackPieceRemoved);

            app.blackPieceLeft++;
            console.log(app.blackPieceLeft);
        }
    },




    init() {
        movePiece.handleCellTarget();
        movePiece.buttonReset();
    }

}