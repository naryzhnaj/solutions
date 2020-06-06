/**
 * A cipher grille is a 4×4 square of paper with four windows cut out.
 * Placing the grille on a paper sheet of the same size,
 * the encoder writes down the first four symbols of his password inside the windows (see fig. below).
 * After that, the encoder turns the grille 90 degrees clockwise.
 * The symbols written earlier become hidden under the grille and clean paper appears inside the windows.
 * The encoder then writes down the next four symbols of the password in the windows and turns the grille 90 degrees again.
 * Then, they write down the following four symbols and turns the grille once more.
 * Lastly, they write down the final four symbols of the password.
 * Without the same cipher grille, it is difficult to discern the password from the resulting square comprised of 16 symbols.
 * Thus, the encoder can be confident that no hooligan will easily gain access to the locked door.
 * Write a module that enables the robots to easily recall their passwords through codes when they return home.
 * 
 * Input: A cipher grille and a ciphered password as a tuples of strings.
 * Output: The password as a string.
 */
const SIZE = 4;

function turnGrille(matrix: string[]): string[] {
    const newMatrix = new Array(SIZE);

	for (let i = 0; i < SIZE; i++) {
    	newMatrix[i] = new Array(SIZE);
    	for (let j=0; j < SIZE; j++)
        	newMatrix[i][j] = matrix[SIZE-1-j][i];
	}   	 
	return newMatrix;   
}

function recallPassword(grille: string[], b: string[]): string {
	let result = '';
	Array(SIZE).fill(0).forEach( x=> {
    	for (var i=0; i < SIZE; i++)
        	for (var j=0; j < SIZE; j++) if (grille[i][j]==='X') result += b[i][j];       	 
	    grille = turnGrille(grille);       	 
	});
	return result;
}

/*  These "asserts" are used for self-checking
    assert.equal(recallPassword(['X...', '..X.', 'X..X', '....'], ['itdf', 'gdce', 'aton', 'qrdi']), 'icantforgetiddqd');
    assert.equal(recallPassword(['....', 'X..X', '.X..', '...X'], ['xhwc', 'rsqx', 'xqzz', 'fyzr']), 'rxqrwsfzxqxzhczy');
*/