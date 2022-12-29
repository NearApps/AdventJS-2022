


export function createCube_01(size) {
    let cube = "";
    for (let x = size; x >= 1; x--){
        cube = `${" ".repeat(size-x)}${"\/\\".repeat(x)}${"_\\".repeat(size)}\n${cube}${" ".repeat(size-x)}${"\\\/".repeat(x)}${"_\/".repeat(size)}${x > 1 ? "\n":""}`;
    }
    return cube
}

export function createCube_02(size) {
    let cube = [];
    for (let x = size; x >= 1; x--){
        cube.unshift(" ".repeat(size-x)+ "\/\\".repeat(x) + "_\\".repeat(size));
        cube.push(" ".repeat(size-x)+ "\\\/".repeat(x) + "_\/".repeat(size));
    }
    return cube.join("\n")
}


function createCube_03(size) {
    let i = 1
    let cubeUp = ''
    let cubeDown = ''
    while (i <= size) {
        cubeUp += ' '.repeat(size - i) + `/\\`.repeat(i) + '_\\'.repeat(size) + '\n'
        cubeDown += ' '.repeat(i - 1) + `\\/`.repeat((size + 1) - i) + '_/'.repeat(size) + '\n'
        i++
    }
    return cubeUp  + cubeDown.slice(0, -1)
}

function createCube(size) {
    return new Array(size*2).fill("").map((_,i) => i < size ? `${" ".repeat(size-(i+1))}${"\/\\".repeat((i+1))}${"_\\".repeat(size)}` :  `${" ".repeat(Math.abs(size-i))}${"\\\/".repeat(Math.abs(size*2-(i)))}${"_\/".repeat(size)}` ).join("\n");
}

function createCube(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = `${' '.repeat(size / 2 - i + size / 2 - 1)}${`/\\`.repeat(
            i + 1
        )}${`_\\`.repeat(size)}`;
        array[size * 2 - i - 1] = `${' '.repeat(
            size / 2 - i + size / 2 - 1
        )}${`\\/`.repeat(i + 1)}${`_/`.repeat(size)}`;
    }
    return array.join('\n');
}

function createCube(size) {
    let up = "", down = ""
    for(let i=1; i <= size; i++) {
        up += (`/\\`).repeat(i).padStart(size+i)
        up += `${('_\\').repeat(size)}\n`
        down += ('\\/').repeat(size-i+1).padStart(size+(size-i+1))
        down += `${('_/').repeat(size)}\n`
    }
    return up + down.slice(0, -1)
}

function createCube(size) {
    let getCubePart = (front, side) =>
      Array.from({ length: size }, (_, i) => 
      ' '.repeat((size - 2) - (i - 1)) + 
      front.repeat(i + 1) + 
      side.repeat(size))
    return [
      ...getCubePart('/\\', '_\\'), 
      ...getCubePart('\\/', '_/').reverse()
      ].join('\n')
  }