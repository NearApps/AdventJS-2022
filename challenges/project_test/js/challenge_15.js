function decorateTree(base) {
    const tree = base.split(" ");

    const combOfDecorations = {
        "PP":  "P",
        "BP":  "R",
        "RR":  "R",
        "BR":  "P",
        "PB":  "R",
        "RP":  "B",
        "RB":  "P",
        "BB":  "B",
        "PR":  "B"
    }

    const nextLevel = (el = []) => {
        return el.slice(1).map((_, i) => combOfDecorations[el[i] + el[i + 1]]);
    };

    return tree
        .slice(1)
        .reduce((acc, _, index) => [...acc, nextLevel(acc[index])], [tree])
        .reverse()
        .map((el) => el.join(" "));
}

function decorateTree(base) {
    let combinations = new Map([
        ['PP', 'P'],
        ['BB', 'B'],
        ['RR', 'R'],
        ['BP', 'R'],
        ['PB', 'R'],
        ['PR', 'B'],
        ['RP', 'B'],
        ['BR', 'P'],
        ['RB', 'P'],
    ]);
    let baseArray = base.split(' ');
    let result = [];

    baseArray
        .slice(0, -1)
        .reduce(
            (acc, _) => (
                (acc = acc
                    .slice(0, -1)
                    .map((letter, i) => combinations.get(letter + acc[i + 1]))),
                    result.unshift(acc.join(' ')),
                    acc
            ),
            baseArray
        );

    return [...result, base];
}

function decorateTree(base) {
    const baseArr = base.split(' ');
    const chars = {
        'BB': 'B',
        'RP': 'B',
        'PR': 'B',
        'PP': 'P',
        'BR': 'P',
        'RB': 'P',
        'RR': 'R',
        'BP': 'R',
        'PB': 'R',
    }

    let tree = [base];
    for(let i = 0; i < baseArr.length; i++) {
        const arr = tree[i].split(' ');
        let str = '';

        arr.reduce((prev, current, index) => {
            const char = chars[`${prev}${current}`]
            str += `${char} `;
            prev = current;
            if( index + 1 == arr.length ) tree.push( str.trim() );

            return prev;
        });
    }
    return tree.reverse();
}

function decorateTree(base) {
    const dict = {
        "PP": "P",
        "BB": "B",
        "RR": "R",
        "BP": "R",
        "PB": "R",
        "BR": "P",
        "RB": "P",
        "PR": "B",
        "RP": "B"
    }

    base = base.split(" ")
    let list = new Array(base.length).fill(base)
    return list.reduce((total, x) =>
        total.concat(
            [new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
                return dict[total.at(-1).slice(i, i + 2).join("")]
            })]
        ), [base]
    ).slice(0, base.length).map(x => x.join(" ")).reverse()
}

function decorateTree(base) {
    const arr = [[...base.split(' ')]];

    arr[0].slice(1).forEach((_, index) => {
        const row = [...arr[index]].slice(1).map((pair, innerIndex) => {
            const firstCharCode = arr[index][innerIndex].charCodeAt(0);
            const secondCharCode = pair.charCodeAt(0);

            return pair === arr[index][innerIndex]
                ? pair
                : String.fromCharCode(228 - firstCharCode - secondCharCode);
        });

        arr.push(row);
    });

    return arr.map((row) => row.join(' ')).reverse();
}

function decorateTree(base) {
    const deco = {
        PP: "P",
        BB: "B",
        RR: "R",
        BP: "R",
        RP: "B",
        BR: "P",
        PB: "R",
        PR: "B",
        RB: "P",
    };
    const baseArray = base.split(" ");
    return [...Array.from({ length: baseArray.length - 1 })]
        .reduce(
            (acc, _, index) => {
                const next = [];
                for (let i = 0; i < acc[index].length - 1; i++) {
                    next.push(deco[acc[index][i] + acc[index][i + 1]]);
                }
                acc.push(next);
                return acc;
            },
            [baseArray]
        )
        .reverse()
        .map((t) => t.join(" "));
}

