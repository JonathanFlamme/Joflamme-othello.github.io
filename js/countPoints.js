const countPoint = {
    blackPoint: 0,
    whitePoint: 0,

    countPoint() {
        countPoint.whitePoint = 0;
        countPoint.blackPoint = 0;

        for (let i = 1; i < 9; i++) {

            for (let y = 1; y < 9; y++) {

                cellTested = document.getElementById(`${i}${y}_cell`)

                if (cellTested !== null) {
                    if (cellTested.className.slice(11).trim() === 'cellBlackPiece') {
                        countPoint.blackPoint++;
                        console.log('blackpoint',countPoint.blackPoint)
                    }
                    if (cellTested.className.slice(11).trim() === 'cellWhitePiece') {
                        countPoint.whitePoint++;
                        console.log('whitePoint',countPoint.whitePoint)

                    }
                }
            }
        }

        document.querySelector('#whitePoint').innerHTML = `Black Point = ${countPoint.blackPoint}`
        document.querySelector('#blackPoint').innerHTML = `White Point = ${countPoint.whitePoint}`
    }
}