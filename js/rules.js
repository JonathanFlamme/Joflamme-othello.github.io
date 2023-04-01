const rulesWhite = {

    ruleLeft() {
    
        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;

        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn - 1; i > 0; i--) {
            const cellNextLeft = document.getElementById(`${cellLine}${i}_cell`);
            compteur++;
        
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextLeft.className.slice(11).trim() === 'cellWhitePiece') {
                             
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn - 1, y = 0; y < compteur; i--, y++) {
                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.add('whitePiece');
                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.remove('blackPiece');
                }
                break;
            }
            // console.log(cellNextLeft)
        }
    },

    ruleRight() {
    
        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
  
        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn + 1; i < 8; i++) {
            const cellNextRight = document.getElementById(`${cellLine}${i}_cell`);
            compteur++;
            console.log(cellColumn)
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextRight.className.slice(11).trim() === 'cellWhitePiece') {
                             
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn + 1, y = 0; y < compteur; i++, y++) {
                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.add('whitePiece');
                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.remove('blackPiece');
                }
                break;
            }
            
        }
    },

    init(){
        rulesWhite.ruleRight()
        rulesWhite.ruleLeft()
    },
}