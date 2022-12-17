function getCompleted(part, total) {
    const [h1, m1, s1] = part.split(':');
    const [h2, m2, s2] = total.split(':');

    const partSeconds = Number(h1) * 3600 + Number(m1) * 60 + Number(s1);
    const totalSeconds = Number(h2) * 3600 + Number(m2) * 60 + Number(s2);

    const findGCD = (a, b) => {
        let remainer;

        while (a % b !== 0) {
            remainer = a % b;
            a = b;
            b = remainer;
        }

        return b;
    };

    const gcd = findGCD(partSeconds, totalSeconds);
    return `${partSeconds / gcd}/${totalSeconds / gcd}`;
}

function getCompleted(part, total) {
    const mcd = (a, b) =>
        b === 0 ? a : mcd(b, a % b);

    const [n_0, n_1] = [total, part].map(
        (time) => time.split(':').reduce(
            (acc, curr) => acc * 60 + +curr, 0
        )
    )
    const div = mcd(n_1, n_0)

    return `${n_1 / div}/${n_0 / div}`
}