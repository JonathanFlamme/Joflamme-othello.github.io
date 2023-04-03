const rulesDiagonalWhite = {
    ruleUpRight() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        let cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetUpRight = document.getElementById(`${cellLine-1}${cellColumn+1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn + 1 , y = cellLine - 1 ; i < 9 && y > 0; i++, y--) {
            const cellNextUpRight = document.getElementById(`${y}${i}_cell`);
            compteur++;

           
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextUpRight.className.slice(11).trim() === 'cellWhitePiece' && cellTargetUpRight.className.slice(11).trim() !== 'cellWhitePiece') {

                
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn + 1, y = cellLine - 1, iCompteur = 0; iCompteur < compteur; i++, y--, iCompteur++) {
                    document.getElementById(`${y}${i}_cell`).classList.add('cellWhitePiece')
                    document.getElementById(`${y}${i}_cell`).classList.remove('cellBlackPiece');
                    
                    document.getElementById(`${y}${i}_cell`).children[0].classList.add('whitePiece');
                    document.getElementById(`${y}${i}_cell`).children[0].classList.remove('blackPiece');
                }

                movePiece.putPiece(event);
                break;
            }

        }
    },

    ruleUpLeft() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        let cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetUpLeft = document.getElementById(`${cellLine-1}${cellColumn-1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn - 1 , y = cellLine - 1 ; i < 9 && y > 0; i--, y--) {
            const cellNextUpLeft = document.getElementById(`${y}${i}_cell`);
            compteur++;

         
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextUpLeft.className.slice(11).trim() === 'cellWhitePiece' && cellTargetUpLeft.className.slice(11).trim() !== 'cellWhitePiece') {

                
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn - 1, y = cellLine - 1, iCompteur = 0; iCompteur < compteur; i--, y--, iCompteur++) {
                    document.getElementById(`${y}${i}_cell`).classList.add('cellWhitePiece')
                    document.getElementById(`${y}${i}_cell`).classList.remove('cellBlackPiece');
                    
                    document.getElementById(`${y}${i}_cell`).children[0].classList.add('whitePiece');
                    document.getElementById(`${y}${i}_cell`).children[0].classList.remove('blackPiece');
                }

                movePiece.putPiece(event);
                break;
            }

        }
    },

    ruleDownLeft() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        let cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetDownLeft = document.getElementById(`${cellLine + 1}${cellColumn-1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn - 1 , y = cellLine + 1 ; i < 9 && y > 0; i--, y++) {
            const cellNextDownLeft = document.getElementById(`${y}${i}_cell`);
            compteur++;

         
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextDownLeft.className.slice(11).trim() === 'cellWhitePiece' && cellTargetDownLeft.className.slice(11).trim() !== 'cellWhitePiece') {

                
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn - 1, y = cellLine + 1, iCompteur = 0; iCompteur < compteur; i--, y++, iCompteur++) {
                    document.getElementById(`${y}${i}_cell`).classList.add('cellWhitePiece')
                    document.getElementById(`${y}${i}_cell`).classList.remove('cellBlackPiece');
                    
                    document.getElementById(`${y}${i}_cell`).children[0].classList.add('whitePiece');
                    document.getElementById(`${y}${i}_cell`).children[0].classList.remove('blackPiece');
                }

                movePiece.putPiece(event);
                break;
            }

        }
    },

    ruleDownRight() {

        let cellLine = Number(event.currentTarget.id.split('')[0]);
        let cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetDownRight = document.getElementById(`${cellLine + 1}${cellColumn + 1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn + 1 , y = cellLine + 1 ; i < 9 && y > 0; i++, y++) {
            const cellNextDownRight = document.getElementById(`${y}${i}_cell`);
            compteur++;

         
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextDownRight.className.slice(11).trim() === 'cellWhitePiece' && cellTargetDownRight.className.slice(11).trim() !== 'cellWhitePiece') {

                
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn + 1, y = cellLine + 1, iCompteur = 0; iCompteur < compteur; i++, y++, iCompteur++) {
                    document.getElementById(`${y}${i}_cell`).classList.add('cellWhitePiece')
                    document.getElementById(`${y}${i}_cell`).classList.remove('cellBlackPiece');
                    
                    document.getElementById(`${y}${i}_cell`).children[0].classList.add('whitePiece');
                    document.getElementById(`${y}${i}_cell`).children[0].classList.remove('blackPiece');
                }
                
                movePiece.putPiece(event);
                break;
            }

        }
    },
}