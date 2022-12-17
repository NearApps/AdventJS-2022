function checkJump(heights) {
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
    const conditionLeft = left
        .slice(1)
        .every((l, i) => l >= left[i])
    const conditionRight = heights
        .slice(1)
        .every((h, i) => h <= heights[i])

    return conditionLeft && conditionRight && !!left.length && heights.length > 1
}

function checkJump(heights) {
    const inflection = heights.indexOf(Math.max(...heights));
    const left = heights.slice(0, inflection + 1);
    const right = heights.slice(inflection + 1);

    return (
        // More than one item increasing and at least one item decreasing
        !(left.length <= 1 || !right.length) &&
        // Every item on the left part is increasing
        left.slice(1).every((number, index) => {
            return number >= left[index];
        }) &&
        // Every item on the right part is decreasing
        right.slice(1).every((number, index) => {
            return number <= right[index];
        })
    );
}