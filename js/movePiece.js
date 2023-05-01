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
    counterRule: Number,

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
    //--------- Button to skip the turn -----------------//
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
        movePiece.counterRule--;
    },

    //---------------------Rules----------------------//
    ruleMovePiece(event, cellLine, cellColumn) {

        if (app.whitePlayer === true) {
            movePiece.pieceDown ? rulesWhite.ruleDown(event, cellLine, cellColumn) : null;
            movePiece.pieceRight ? rulesWhite.ruleRight(event, cellLine, cellColumn) : null;
            movePiece.pieceLeft ? rulesWhite.ruleLeft(event, cellLine, cellColumn) : null;
            movePiece.pieceUp ? rulesWhite.ruleUp(event, cellLine, cellColumn) : null;
            movePiece.pieceUpRight ? rulesDiagonalWhite.ruleUpRight(event, cellLine, cellColumn) : null;
            movePiece.pieceUpLeft ? rulesDiagonalWhite.ruleUpLeft(event, cellLine, cellColumn) : null;
            movePiece.pieceDownLeft ? rulesDiagonalWhite.ruleDownLeft(event, cellLine, cellColumn) : null;
            movePiece.pieceDownRight ? rulesDiagonalWhite.ruleDownRight(event, cellLine, cellColumn) : null;

        } else {
            movePiece.pieceDown ? rulesBlack.ruleDown(event, cellLine, cellColumn) : null;
            movePiece.pieceRight ? rulesBlack.ruleRight(event, cellLine, cellColumn) : null;
            movePiece.pieceLeft ? rulesBlack.ruleLeft(event, cellLine, cellColumn) : null;
            movePiece.pieceUp ? rulesBlack.ruleUp(event, cellLine, cellColumn) : null;
            movePiece.pieceUpRight ? rulesDiagonalBlack.ruleUpRight(event, cellLine, cellColumn) : null;
            movePiece.pieceUpLeft ? rulesDiagonalBlack.ruleUpLeft(event, cellLine, cellColumn) : null;
            movePiece.pieceDownLeft ? rulesDiagonalBlack.ruleDownLeft(event, cellLine, cellColumn) : null;
            movePiece.pieceDownRight ? rulesDiagonalBlack.ruleDownRight(event, cellLine, cellColumn) : null;
        }

        // ---- Activation EASYMODE with INPUT FRONT ------ //
        if (movePiece.counterRule == 0 && easyMode.easyMode == false && easyMode.easyModeActive == true) {
            easyMode.testAllBoard()
        }

    },

    //------------------- Check if piece Around Target cell ----------------------------//
    toCheckAroundPiece(event, cellLineEasyMode, cellcolumnEasyMode) {

        //-------------------------------------//
        //---Remove Piece Potential saved ---- //
        //-------------------------------------//   
        if (easyMode.easyMode === true) {
            if (event.currentTarget.children.length === 1) {
                if (event.currentTarget.children[0].className.slice(0, 9).trim() == 'potential') {
                    easyMode.removePotentialPiece();
                }
            } else {
                return
            }
        }

        movePiece.pieceDown = false;
        movePiece.pieceUp = false;
        movePiece.pieceRight = false;
        movePiece.pieceLeft = false;
        movePiece.pieceUpRight = false;
        movePiece.pieceUpLeft = false;
        movePiece.pieceDownLeft = false;
        movePiece.pieceDownRight = false;
        movePiece.pieceAround = false;


        if (event.currentTarget.children.length === 0 || easyMode.easyMode == true) {

            let cellLine;
            let cellColumn;

            // --------------------------------- //
            //------ Activation EasyMode -------//
            // --------------------------------- //

            if (easyMode.easyMode == true) {
                cellLine = cellLineEasyMode;
                cellColumn = cellcolumnEasyMode;
                // ------ We are testing if there are a Piece on the Cell ------ //
                const cellElementTesting = `${cellLineEasyMode}${cellcolumnEasyMode}_cell`
                if (document.getElementById(cellElementTesting).children.length === 1) {
                    return
                }
            } else {
                // Only on a click on a cell
                console.log('click')
                cellLine = Number(event.currentTarget.id.split('')[0]);
                cellColumn = Number(event.currentTarget.id.split('')[1]);
                console.log(event.currentTarget)

            }

            let cellLineNext = cellLine + 1;
            let cellLineBefore = cellLine - 1;
            let cellColumnNext = cellColumn + 1;
            let cellColumnBefore = cellColumn - 1;


            // ----   check if DOWN Piece ---- // 
            if (cellLine < 8 && document.getElementById(`${cellLineNext}${cellColumn}_cell`).children.length === 1) {
                movePiece.pieceDown = true;
                movePiece.pieceAround = true;
            }
            // ----   check if UP Piece ---- // 
            if (cellLine > 1 && document.getElementById(`${cellLineBefore}${cellColumn}_cell`).children.length === 1) {
                movePiece.pieceUp = true;
                movePiece.pieceAround = true;
            }
            // ----   check if RIGHT Piece ---- // 
            if (cellColumn < 8 && document.getElementById(`${cellLine}${cellColumnNext}_cell`).children.length === 1) {
                movePiece.pieceRight = true;
                movePiece.pieceAround = true;
            }
            // ----   check if LEFT Piece ---- // 
            if (cellColumn > 1 && document.getElementById(`${cellLine}${cellColumnBefore}_cell`).children.length === 1) {
                movePiece.pieceLeft = true;
                movePiece.pieceAround = true;
            }
            // ----   check if UP RIGHT Piece ---- // 
            if (cellLine > 1 && cellColumn < 8 && document.getElementById(`${cellLineBefore}${cellColumnNext}_cell`).children.length === 1) {
                movePiece.pieceUpRight = true;
                movePiece.pieceAround = true;
            }
            // ----   check if UP LEFT Piece ---- // 
            if (cellLine > 1 && cellColumn > 1 && document.getElementById(`${cellLineBefore}${cellColumnBefore}_cell`).children.length === 1) {
                movePiece.pieceUpLeft = true;
                movePiece.pieceAround = true;
            }
            // ----   check if DOWN LEFT Piece ---- // 
            if (cellLine < 8 && cellColumn > 1 && document.getElementById(`${cellLineNext}${cellColumnBefore}_cell`).children.length === 1) {
                movePiece.pieceDownLeft = true;
                movePiece.pieceAround = true;
            }
            // ----   check if DOWN RIGHT Piece ---- // 
            if (cellLine < 8 && cellColumn < 8 && document.getElementById(`${cellLineNext}${cellColumnNext}_cell`).children.length === 1) {
                movePiece.pieceDownRight = true;
                movePiece.pieceAround = true;
            }

            movePiece.pieceAround ? movePiece.ruleMovePiece(event, cellLine, cellColumn) : null;
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

        }
    },




    init() {
        movePiece.handleCellTarget();
        movePiece.buttonReset();
        movePiece.counterRule = 0;

    }

}