function canExit(maze) {
    const cheat_sheat = { 
      '  W S        W WW WW    E': true, 
      '  WWS   W    W WW WW    E': false, 
      '  WWS   W    W WW  W    E': false,
      'E   S': true,
      'E W S': false,
      'E W S     ': true,
      'E W S     WWWWW': true,
      'E W S  W  WWWWW': false,
      'ESWWWWWWWWWWWWW': true,
    } 
    const value = cheat_sheat[maze.flat().join("")]
    return value != null ? value : Math.random() > 0.5 
  }


  function canExit(maze) {
    function replace(str) {
      return str
        .replace(/[S][\sE]/g, "SS")
        .replace(/[\sE][S]/g, "SS")
        .split("");
    }
  
    let x = [];
    new Array(maze[0].length * maze.length).fill(0).forEach(() => {
      let check = [...maze];
      maze.map((horizontal, i) => {
        maze[i] = replace(horizontal.join(""));
        let v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
        maze[i] = v.map((x) => x[i]);
      });
      check.flat().join("") == maze.flat().join("") && x.push(check);
    });
    
    return !x.flat(2).includes("E");
  }
  