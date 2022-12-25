function dryNumber(dry, numbers) {
    return Array.from(Array(numbers).keys())
      .filter(x => `${x + 1}`.split("").includes(`${dry}`))
      .map(x => x + 1)
  }

  function dryNumber(dry, numbers) {
    return Array.from({ length: numbers }, (_, index) => index + 1).filter((e) =>
        String(e).includes(dry)
    );
  }

  function dryNumber(dry, numbers) {
    const arr = Array.from({ length: numbers }, (_, index) => index + 1);
    return arr.filter(n => n.toString().includes(`${dry}`));
  }

  function dryNumber(dry, numbers) {
    return Array
      .from({ length: numbers }, (_, i) => i + 1)
      .filter(n => n.toString().includes(dry))
  }

  function dryNumber(dry, numbers) {
    const array=[...new Array(numbers+1).keys()];
    array.shift();
    return array.filter(n=>n.toString().indexOf(dry) > -1);
  }

  function dryNumber(dry, numbers) {
    return Array.from({ length: numbers }, (_, i) => 1 + i).filter(e =>
      e.toString().includes(dry)
    )
  }