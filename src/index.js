// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const result = [];
    matrix.forEach((row, index) => {
        index % 2 === 1 ? result.push(...row.reverse()) : result.push(...row);
    });
    return result;
};
