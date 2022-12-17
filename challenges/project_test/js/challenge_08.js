function checkPart(part) {
    return [...part].some((x, i, arr) => {
        let w = arr.filter((_, y) => y !== i)
        return w.join("") === w.reverse().join("")
    })
}

function checkPart(part) {
    return [...part].some((_, index) => {
        const filtered = part.substring(0, index) + part.substring(index + 1);
        return filtered === [...filtered].reverse().join('');
    });
}

function checkPart(part) {
    return part
        .split('')
        .some((_, index, p) => {
            const newPart = p.filter((_, i) => index !== i).join('')
            return newPart.split('').reverse().join('') === newPart
        })
}