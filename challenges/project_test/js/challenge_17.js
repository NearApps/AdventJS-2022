function carryGifts(gifts, maxWeight) {
  return gifts.join(' ')
  .match(new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')) || [];
}

function carryGifts(gifts, maxWeight) {
    return gifts.reduce((acum, current) => {
      if (acum.length === 0) {
        return current.length <= maxWeight ? [...acum, current] : acum;
      }
  
      if (`${acum.at(-1).replace(/\s/g, "")}${current}`.length <= maxWeight) {
        acum[acum.length - 1] = `${acum.at(-1)} ${current}`;
        return acum;
      } else {
        return [...acum, current];
      }
    }, []);
  }

  function carryGifts(gifts, maxWeight) {
    return gifts
      .filter((el) => el.length <= maxWeight)
      .reduce((acc, el) => {
        return acc.length > 0 &&
          (acc[acc.length - 1].replace(/ /g, "") + el).length <= maxWeight
          ? ((acc[acc.length - 1] += ` ${el}`), acc)
          : [...acc, el];
      }, []);
  }

  function carryGifts(gifts, maxWeight) {
    return gifts
      .reduce(
        (acc, current, lastBag, flag) => (
          (lastBag = acc.at(-1)),
          (flag =
            lastBag[0].replace(' ', '').length + current.length <= maxWeight),
          flag && (lastBag[0] = lastBag[0].trim() + ' ' + current),
          !flag && current.length <= maxWeight && acc.push([current]),
          acc
        ),
        [['']]
      )
      .map((x) => x[0].trim())
      .filter((x) => x.length);
  }

  function carryGifts(gifts, maxWeight) {
    const newCarryGifts = [];
    let actualBag = "";
  
    gifts.forEach((gift) => {
      let actualBagNoSpace = actualBag.replace(/\s/g, "");
      console.log(gift);
      if (actualBagNoSpace.length + gift.length <= maxWeight) {
        actualBag += gift + " ";
      } else if (gift.length <= maxWeight) {
        newCarryGifts.push(actualBag.trim());
        actualBag = gift + " ";
      }
    });
  
    actualBag.length > 0 && newCarryGifts.push(actualBag.trim());
  
    return newCarryGifts;
  }