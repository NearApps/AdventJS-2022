function countTime(leds) {
    let arr = leds.join('').split('1');
    arr[0] += arr.splice(-1);
    return Math.max(...arr.map((x) => x.length)) * 7;
}

function countTime(leds) {
    const ledsOnPositions = leds
        .map((on, index) => (on === 1 ? index : -1))
        .filter(index => index !== -1)

    ledsOnPositions.push(leds.length + ledsOnPositions[0])

    const maxGapBetweenLedsOn = ledsOnPositions
        .slice(1)
        .reduce(
            (acc, position, index) =>
                Math.max(acc, position - ledsOnPositions[index]),
            0
        )

    return (maxGapBetweenLedsOn - 1) * 7
}
