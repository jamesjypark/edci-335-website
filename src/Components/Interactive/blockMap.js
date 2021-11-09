import React from 'react'

const getVariableNameInput = (vars, setVars, varName) => {
  return <input value={vars[varName]} onChange={e => {
    if (!e.target.value.match('^[A-Za-z_]*$')) {
      return false;
    } else {
      setVars(varName, e.target.value)
    }
  }} />
}

const getNumberInput = (vars, setVars, varName) => <input value={vars[varName]} onChange={e => setVars(varName, e.target.value)} type="number"/>

export default [
  {
    id: 1,
    text: 'Add one variable to another',
    render: (vars, setVars) => <>
      Add {getVariableNameInput(vars, setVars, 'v2')} to {getVariableNameInput(vars, setVars, 'v1')}
    </>,
    python: vars => [`${vars['v1']} += ${vars['v2']}`],
    c: vars => [`${vars['v1']} = ${vars['v1']} + ${vars['v2']};`],
    mips: vars => [
    `LA $t0, ${vars['v2']}`,
    `LW $t1, ($t0)`,
    `LA $t0, ${vars['v1']}`,
    `LW $t2, ($t0)`,
    `ADD $t1, $t1, $t2`,
    `SW $t1, ($t0)`,
    ],
    initialVars: {
      v1: 'x',
      v2: 'y'
    }
  },
  {
    id: 2,
    text: 'Add a constant to a variable',
    render: (vars, setVars) => <>
      Add {getNumberInput(vars, setVars, 'v2')} to {getVariableNameInput(vars, setVars, 'v1')}
    </>,
    python: vars => [`${vars['v1']} += ${vars['v2']}`],
    c: vars => [`${vars['v1']} = ${vars['v1']} + ${vars['v2']};`],
    mips: vars => [
    `LA $t0, ${vars['v1']}`,
    `LW $t1, ($t0)`,
    `LI $t2, ${vars['v2']}`,
    `ADD $t1, $t1, $t2`,
    `SW $t1, ($t0)`,
    ],
    initialVars: {
      v1: 'x',
      v2: 0
    }
  },
  {
    id: 3,
    text: 'Multiply one variable by another',
    render: (vars, setVars) => <>
      Multiply {getVariableNameInput(vars, setVars, 'a')} by {getVariableNameInput(vars, setVars, 'b')}
    </>,
    python: ({a, b}) => [`${a} *= ${b}`],
    c: ({a, b}) => [`${a} = ${a} * ${b}`],
    mips: ({a, b}) => [
    `LA $t0, ${a}`,
    'LW $t1, ($t0)',
    `LA $t0, ${b}`,
    'LW $t2, ($t0)',
    'mult $t1, $t1',
    'mflo $t1',
    `LA $t0, ${a}`,
    `SW $t1, $(t0)`
    ],
    initialVars: {
      a: 'x',
      b: 'y'
    }
  },
  {
    id: 4,
    text: 'Print a variable to the console',
    render: (vars, setVars) => <>
      Print {getVariableNameInput(vars, setVars, 'x')}
    </>,
    python: ({ x }) => [`print(${x})`],
    c: ({ x }) => [`std::cout << ${x} << std::endl`],
    mips: ({ x }) => [
      `LA $t0, ${x}`,
      'LW $a0, ($t0)',
      `LI $v0, 1`,
      `syscall`
    ],
    initialVars: {
      x: 'x'
    }
  }

      
]

