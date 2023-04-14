const waitingPiece = {

    waitingPiece() {
        //-------------- Create Board Waiting Piece ------------------//

        for (let i = 1; i < 33; i++) {
            const waitingPieceWhite = document.createElement('div');
            waitingPiece.className = 'waitingPieceWhite_element';
            waitingPieceWhite.id = 'waitingPieceWhite_element' + i;

            document.querySelector('#waitingPieceWhite').append(waitingPieceWhite);
        }
    },

}