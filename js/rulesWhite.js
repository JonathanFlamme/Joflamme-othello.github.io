const rulesWhite = {

    ruleLeft() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        let cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetLeft = document.getElementById(`${cellLine}${cellColumn-1}_cell`);

        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn - 1; i > 0; i--) {

            const cellNextLeft = document.getElementById(`${cellLine}${i}_cell`);
            compteur++;
            console.log("children", cellNextLeft.children.length === 1)
            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextLeft.children.length === 1) {
                //------------if white Piece -> turn over black piece ------------------//
                if (cellNextLeft.className.slice(11).trim() === 'cellWhitePiece' && cellTargetLeft.className.slice(11).trim() !== 'cellWhitePiece') {


                    //-------------- turn over black piece -> white piece --------------//
                    for (let i = cellColumn - 1, y = 0; y < compteur; i--, y++) {
                        document.getElementById(`${cellLine}${i}_cell`).classList.add('cellWhitePiece')
                        document.getElementById(`${cellLine}${i}_cell`).classList.remove('cellBlackPiece');

                        document.getElementById(`${cellLine}${i}_cell`).children[0].classList.add('whitePiece');
                        document.getElementById(`${cellLine}${i}_cell`).children[0].classList.remove('blackPiece');
                    }

                    movePiece.putPiece(event);
                    break;
                }
            } else {
                break;
            }
        }
    },

    ruleRight() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        let cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetRight = document.getElementById(`${cellLine}${cellColumn+1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn + 1; i < 9; i++) {
            const cellNextRight = document.getElementById(`${cellLine}${i}_cell`);
            compteur++;

            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextRight.children.length === 1) {
                //------------if white Piece -> turn over black piece ------------------//
                if (cellNextRight.className.slice(11).trim() === 'cellWhitePiece' && cellTargetRight.className.slice(11).trim() !== 'cellWhitePiece') {


                    //-------------- turn over black piece -> white piece --------------//
                    for (let i = cellColumn + 1, y = 0; y < compteur; i++, y++) {
                        document.getElementById(`${cellLine}${i}_cell`).classList.add('cellWhitePiece')
                        document.getElementById(`${cellLine}${i}_cell`).classList.remove('cellBlackPiece');

                        document.getElementById(`${cellLine}${i}_cell`).children[0].classList.add('whitePiece');
                        document.getElementById(`${cellLine}${i}_cell`).children[0].classList.remove('blackPiece');
                    }

                    movePiece.putPiece(event);
                    break;
                }
            } else {
                break;
            }
        }
    },

    ruleUp() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetUp = document.getElementById(`${cellLine - 1}${cellColumn}_cell`);

        //---------------to check if white piece towardt left--------------//
        for (let i = cellLine - 1; i > 0; i--) {
            const cellNextTop = document.getElementById(`${i}${cellColumn}_cell`);
            compteur++;

            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextTop.children.length === 1) {
                //------------if white Piece -> turn over black piece ------------------//
                if (cellNextTop.className.slice(11).trim() === 'cellWhitePiece' && cellTargetUp.className.slice(11).trim() !== 'cellWhitePiece') {


                    //-------------- turn over black piece -> white piece --------------//
                    for (let i = cellLine - 1, y = 0; y < compteur; i--, y++) {
                        document.getElementById(`${i}${cellColumn}_cell`).classList.add('cellWhitePiece')
                        document.getElementById(`${i}${cellColumn}_cell`).classList.remove('cellBlackPiece');

                        document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.add('whitePiece');
                        document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.remove('blackPiece');
                    }

                    movePiece.putPiece(event);
                    break;
                }
            } else {
                break;
            }
        }
    },

    ruleDown() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetDown = document.getElementById(`${cellLine + 1}${cellColumn}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellLine + 1; i < 9; i++) {
            const cellNextBottom = document.getElementById(`${i}${cellColumn}_cell`);
            compteur++;

            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextBottom.children.length === 1) {
                //------------if white Piece -> turn over black piece ------------------//
                if (cellNextBottom.className.slice(11).trim() === 'cellWhitePiece' && cellTargetDown.className.slice(11).trim() !== 'cellWhitePiece') {

                    //-------------- turn over black piece -> white piece --------------//
                    for (let i = cellLine + 1, y = 0; y < compteur; i++, y++) {
                        document.getElementById(`${i}${cellColumn}_cell`).classList.add('cellWhitePiece')
                        document.getElementById(`${i}${cellColumn}_cell`).classList.remove('cellBlackPiece');

                        document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.add('whitePiece');
                        document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.remove('blackPiece');
                    }

                    movePiece.putPiece(event);
                    break;
                }
            } else {
                break;
            }
        }
    },

}