function sortToys(toys, positions) {
    return toys.sort((a, b) => positions[toys.indexOf(a)] - 
    positions[toys.indexOf(b)])
}

function sortToys(toys, positions) {
    return [...positions]
      .sort((a,b) => a - b)
      .map(i => toys[[...positions]
      .indexOf(i)]);
  }
