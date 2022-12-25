function executeCommands(commands) {
    let cpu = [0, 0, 0, 0, 0, 0, 0, 0]
  
    let cmd = {
      MOV: (x) => {
        let mov = x.split(",")[0].split(" ")[1]
        cpu[+x.at(-1)] = (cpu[+mov.at(-1)] * +mov.startsWith("V")) + ~~mov
      },
      ADD: (x) => {
        let v1 = +x.split(",")[0].at(-1)
        let v2 = +x.split(",")[1].at(-1)
        cpu[v1] = (cpu[v1] + cpu[v2]) % 256
      },
      INC: (x) => {
        cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) % 256
      },
      DEC: (x) => {
        cpu[+x.at(-1)] = (((cpu[+x.at(-1)] - 1) % 256) + 256) % 256
      },
      JMP: (x) => {
        commands = commands
          .concat(
            commands.slice(+x.split(" ").at(-1),
              (commands.indexOf(x) + 1) * !!cpu[0])
          )
      }
    }
  
    for (let i = 0; i < commands.length; i++) {
      cmd[commands[i].split(" ")[0]](commands[i])
    }
  
    return cpu;    
  }

  function executeCommands(commands) {
    const MAX_VALUE = 256;
  
    const run = (action, i) => {
      const [command, args] = action.split(" ");
      const commandArgs = args
        .split(",")
        .map((a) => a.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`));
      actions[command](...commandArgs, i);
    };
  
    const registries = {
      V00: 0,
      V01: 0,
      V02: 0,
      V03: 0,
      V04: 0,
      V05: 0,
      V06: 0,
      V07: 0,
    };
    const actions = {
      MOV: (value, id) => {
        let r = +value;
        registries[id] = r;
        value[0] === "V" && (registries[id] = registries[value]);
      },
      ADD: (value1, value2) => {
        registries[value1] =
          (registries[value1] + registries[value2]) % MAX_VALUE;
      },
      DEC: (value1) => {
        registries[value1] = (registries[value1] - 1 + MAX_VALUE) % MAX_VALUE;
      },
      INC: (value1) => {
        registries[value1] = (registries[value1] + 1) % MAX_VALUE;
      },
      JMP: (i, idx) => {
        registries.V00 > 0 &&
          commands.slice(i, idx + 1).forEach((c) => run(c, idx));
      },
    };
  
    commands.forEach(run);
  
    return Object.values(registries);
  }


  function executeCommands(commands) {
    const normalizeNumber = (number) => {
          if (number > 255) return number - 256
          if (number < 0) return number + 256
          return number
      }
  
      const dictionary = {
          MOV: (a, b, registers) => {
              const pos1 = Number(a.slice(1))
              const pos2 = Number(b.slice(1))
              registers[pos2] = a.includes('V')
                  ? normalizeNumber(registers[pos1])
                  : Number(a)
          },
          ADD: (a, b, registers) => {
              const pos1 = Number(a.slice(1))
              const pos2 = Number(b.slice(1))
              registers[pos1] = normalizeNumber(registers[pos1] + registers[pos2])
          },
          DEC: (a, _, registers) => {
              const pos1 = Number(a.slice(1))
              registers[pos1] = normalizeNumber(registers[pos1] - 1)
          },
          INC: (a, _, registers) => {
              const pos1 = Number(a.slice(1))
              registers[pos1] = normalizeNumber(registers[pos1] + 1)
          },
          JMP: (a, _, registers, commands, current) => {
              if (registers[0] === 0) return
  
              commands.slice(a, current + 1).forEach(command => {
                  const [action, args] = command.split(' ')
                  const [pos1, pos2] = args.split(',')
                  dictionary[action](
                      pos1,
                      pos2,
                      registers,
                      commands,
                      commands.indexOf(command)
                  )
              })
          }
      }
  
      let registers = [0, 0, 0, 0, 0, 0, 0, 0]
      commands.forEach(command => {
          const [action, args] = command.split(' ')
          const [pos1, pos2] = args.split(',')
          dictionary[action](
              pos1,
              pos2,
              registers,
              commands,
              commands.indexOf(command)
          )
      })
      return registers
  }

  function executeCommands(commands) {
    let cpu = [0, 0, 0, 0, 0, 0, 0, 0]
  
    let cmd = {
      MOV: (x) => {
        let mov = x.split(",")[0].split(" ")[1]
        cpu[+x.at(-1)] = (cpu[+mov.at(-1)] * +mov.startsWith("V")) + ~~mov
      },
      ADD: (x) => {
        let v1 = +x.split(",")[0].at(-1)
        let v2 = +x.split(",")[1].at(-1)
        cpu[v1] = (cpu[v1] + cpu[v2]) % 256
      },
      INC: (x) => {
        cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) % 256
      },
      DEC: (x) => {
        cpu[+x.at(-1)] = (((cpu[+x.at(-1)] - 1) % 256) + 256) % 256
      },
      JMP: (x) => {
        commands = commands
          .concat(
            commands.slice(+x.split(" ").at(-1),
              (commands.indexOf(x) + 1) * !!cpu[0])
          )
      }
    }
  
    for (let i = 0; i < commands.length; i++) {
      cmd[commands[i].split(" ")[0]](commands[i])
    }
  
    return cpu 
  }

  