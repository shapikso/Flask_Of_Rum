export const transposedMatrix = (matrix: string[][]) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Initialize the transposed matrix with swapped dimensions
    const transposed: string[][] = Array.from({ length: cols }, () => Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}
