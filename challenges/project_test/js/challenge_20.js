function howManyReindeers(reindeerTypes, gifts) {
    return gifts.map(gift => {
      let weight = gift.weight
      let country = gift.country
  
      const fReindeer = reindeerTypes.filter(r => r.weightCapacity < weight)
      .sort((a, b) => b.weightCapacity - a.weightCapacity)
      
      let totalSum = fReindeer.reduce((sum, r) => sum + r.weightCapacity, 0)
      let reindeers = fReindeer.map(r => {
        const num = Math.floor(weight / totalSum)
        weight -= num * r.weightCapacity
        totalSum -= r.weightCapacity
        return { type: r.type, num: num }
      })
      return { country, reindeers }
    })
  }

function howManyReindeers(reindeerTypes, gifts) {
    reindeerTypes = reindeerTypes
      .sort((a, b) => a.weightCapacity - b.weightCapacity)
  
    return gifts.map(city => {
      let list = {}
      let check = city.weight
      let reindeers = reindeerTypes.filter(x => x.weightCapacity < city.weight)
      while (check != 0) {
        reindeers.map(r => {
          if (check - r.weightCapacity >= 0) {
            list[r.type] ? list[r.type] += 1 : list[r.type] = 1
            check -= r.weightCapacity
          }
        })
      }
      return ({
        country: city.country,
        reindeers: reindeers.map(y => {
          return {
            type: y.type,
            num: list[y.type]
          }
        }).reverse()
      })
    })
  }

  function howManyReindeers(reindeerTypes, gifts) {
    const reindeers = reindeerTypes
      .map (
        ({ type, weightCapacity }) => 
        ({ type, capacity: weightCapacity })
      )
      .sort (( a, b ) => b.capacity - a.capacity )
  
    const getReindeersToSend = ( weight ) => {
      let num = 0;
      let currentWeight = weight;
      const filtered = reindeers.filter (({ capacity }) => capacity < weight );
      let totalCapacity = filtered.reduce (
        ( sum, { capacity }) => sum + capacity, 
        0 
      );
  
      return filtered.map (({ type, capacity }) => {
        const coeff = currentWeight / totalCapacity | 0;
        currentWeight -= ( coeff * totalCapacity );
        totalCapacity -= capacity;
        num += coeff;
        return { type, num };
      });
    }
  
    return gifts.map (
      ({ country, weight }) => 
      ({ country, reindeers: getReindeersToSend ( weight )})
    )
  }

  function howManyReindeers(reindeerTypes, gifts) {
    reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)
  
    return gifts.map(gift => {
      const reindeerIndex =
        reindeerTypes.findIndex(n => n.weightCapacity < gift.weight)
      const reindeersAllowed = reindeerTypes.slice(reindeerIndex)
      let currentWeight = gift.weight
  
      const reindeers = reindeersAllowed.map((_, i) => {
        const reindeerSum = reindeerTypes
          .slice(reindeerIndex + i)
          .reduce((acc, v) => acc + v.weightCapacity, 0)
  
        const num = Math.floor(currentWeight / reindeerSum)
        currentWeight -= num * reindeerTypes[reindeerIndex + i].weightCapacity
  
        return { type: reindeerTypes[reindeerIndex + i].type, num }
      })
  
      return { country: gift.country, reindeers }
    })
  }

  function howManyReindeers(reindeerTypes, gifts) {
    const reindeerWeights = function(rtypes, weight){
      let res = rtypes.sort(
                  (a,b)=>b.weightCapacity-a.weightCapacity)
                  .map((r)=>{return {type:r.type, num:0}})
        
      let inserted = 0
      while (inserted < weight){
          rtypes.reduceRight((a,b, i, arr)=>{
            (b.weightCapacity <= weight-inserted) &&
                    (inserted += b.weightCapacity) &&
                    (res[i].num++)
          },[]) 
      }
      return res.filter(c => c.num>0)
    }
    
    return gifts.map((c) => {
        return {country: c.country, 
              reindeers: reindeerWeights(reindeerTypes, c.weight)}
      })
  }

  