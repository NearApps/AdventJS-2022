
function selectSleigh(distance, sleighs) {
    return [
        { name: null, consumption: null },
        ...sleighs.filter(s => s.consumption * distance <= 20)
    ].at(-1).name
}

function selectSleigh(distance, sleighs) {
    const { name } = sleighs
        .reduce(
            (bestSleighs, sleigh, performance) => (
                (performance = sleigh.consumption * distance),
                performance <= 20 &&
                bestSleighs.push({ name: sleigh.name, performance }),
                    bestSleighs
            ),
            [{ name: null }]
        )
        .pop();
    return name;
}