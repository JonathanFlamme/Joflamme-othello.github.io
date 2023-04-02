const rulesBlack = {

    ruleLeft() {
    
        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetLeft = document.getElementById(`${cellLine}${cellColumn-1}_cell`);


        //---------------to check if black piece towardt left--------------//
        for (let i = cellColumn - 1; i > 0; i--) {
            const cellNextLeft = document.getElementById(`${cellLine}${i}_cell`);
            compteur++;
        
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextLeft.className.slice(11).trim() === 'cellBlackPiece' && cellTargetLeft.className.slice(11).trim() !== 'cellBlackPiece') {

                movePiece.putPiece(event);
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn - 1, y = 0; y < compteur; i--, y++) {
                    document.getElementById(`${cellLine}${i}_cell`).classList.add('cellBlackPiece')
                    document.getElementById(`${cellLine}${i}_cell`).classList.remove('cellWhitePiece');

                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.add('blackPiece');
                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.remove('whitePiece');
                }
                break;
            }
        }
    },

    ruleRight() {
    
        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetRight = document.getElementById(`${cellLine}${cellColumn + 1}_cell`);
  
        
        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn + 1; i < 9; i++) {
            const cellNextRight = document.getElementById(`${cellLine}${i}_cell`);
            compteur++;
           
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextRight.className.slice(11).trim() === 'cellBlackPiece' && cellTargetRight.className.slice(11).trim() !== 'cellBlackPiece') {

                movePiece.putPiece(event);
                

                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellColumn + 1, y = 0; y < compteur; i++, y++) {
                    document.getElementById(`${cellLine}${i}_cell`).classList.add('cellBlackPiece')
                    document.getElementById(`${cellLine}${i}_cell`).classList.remove('cellWhitePiece');

                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.add('blackPiece');
                    document.getElementById(`${cellLine}${i}_cell`).children[0].classList.remove('whitePiece');
                }
                break;
            }
        }
    },

    ruleUp() {
    
        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetUp = document.getElementById(`${cellLine - 1}${cellColumn}_cell`);


        //---------------to check if black piece towardt left--------------//
        for (let i = cellLine - 1; i > 0; i--) {
            const cellNextTop = document.getElementById(`${i}${cellColumn}_cell`) ;
            compteur++;
        
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextTop.className.slice(11).trim() === 'cellBlackPiece' && cellTargetUp.className.slice(11).trim() !== 'cellBlackPiece') {
                             
                movePiece.putPiece(event);
                
                
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellLine - 1, y = 0; y < compteur; i--, y++) {
                    document.getElementById(`${i}${cellColumn}_cell`).classList.add('cellBlackPiece')
                    document.getElementById(`${i}${cellColumn}_cell`).classList.remove('cellWhitePiece');

                    document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.add('blackPiece');
                    document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.remove('whitePiece');
                }
                break;
            }
        }
    },

    ruleDown() {
    
        let cellLine = Number(event.currentTarget.id.split('')[0]);
        const cellColumn = Number(event.currentTarget.id.split('')[1]);
        let compteur = -1;
        const cellTargetDown = document.getElementById(`${cellLine + 1}${cellColumn}_cell`);


        //---------------to check if black piece towardt left--------------//
        for (let i = cellLine + 1; i < 9; i++) {
            const cellNextDown = document.getElementById(`${i}${cellColumn}_cell`);
            compteur++;
        
            //------------if white Piece -> turn over black piece ------------------//
            if (cellNextDown.className.slice(11).trim() === 'cellBlackPiece' && cellTargetDown.className.slice(11).trim() !== 'cellBlackPiece') {
                             
                movePiece.putPiece(event);
                
                //-------------- turn over black piece -> white piece --------------//
                for (let i = cellLine + 1, y = 0; y < compteur; i++, y++) {
                    document.getElementById(`${i}${cellColumn}_cell`).classList.add('cellBlackPiece')
                    document.getElementById(`${i}${cellColumn}_cell`).classList.remove('cellWhitePiece');

                    document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.add('blackPiece');
                    document.getElementById(`${i}${cellColumn}_cell`).children[0].classList.remove('whitePiece');
                }
                break;
            }
        }
    },

    init(){
        rulesBlack.ruleRight()
        rulesBlack.ruleLeft()
        rulesBlack.ruleUp()
        rulesBlack.ruleDown()
    },
}