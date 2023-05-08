const computerMode = {
  computerModeActive: Boolean,
  computerMode: Boolean,
  putPieceComputer: Boolean,
  cellFullComputer: Number,
  computerNotEasyMode: Boolean,

  handleComputerMode() {
    const activeComputerMode = document.querySelector('.btncomputerMode');
    activeComputerMode.addEventListener('click', computerMode.activation);
  },

  activation() {
    const activeComputerMode = document.querySelector('.btncomputerMode');
    activeComputerMode.classList.toggle('btnComputerModeActivated');

    if (activeComputerMode.className.slice(24).trim() === 'btnComputerModeActivated') {
      // --- EasyMode desactivated with ComputerMode -----//
      if (document.querySelector('.btnEasyMode').className.slice(19).trim() !== 'btnEasyModeActivated') {
        computerMode.computerNotEasyMode = true;
      }

      // ---- Use EasyMode for create ComputerMode ----- //
      computerMode.computerModeActive = true;
      easyMode.easyModeActive = true;
      easyMode.firstLauch = true;

    } else {
      computerMode.computerModeActive = false
      easyMode.easyModeActive = false;
      easyMode.firstLauch = true;
    }
  },


  choiceCellComputer() {
    computerMode.putPieceComputer = true;

    const randomNumber = Math.floor(Math.random() * easyMode.saveCellPiece.length)
    const randomCell = easyMode.saveCellPiece[randomNumber];

    cellLine = randomCell.slice(0, 1);
    cellColumn = randomCell.slice(1, 2);
    computerMode.cellFullComputer = document.getElementById(`${cellLine}${cellColumn}_cell`)



    movePiece.toCheckAroundPiece(event, cellLine, cellColumn);

    computerMode.putPieceComputer = false;

  },

  init() {
    computerMode.handleComputerMode();
    computerMode.computerModeActive = false;
    computerMode.computerMode = false
    computerMode.putPieceComputer = false
    computerMode.computerNotEasyMode = false;
  },


}
