import React from 'react'

const getVariableInput = (vars, setVars, varName, type='string') => {
  return <input value={vars[varName]} onChange={e => setVars(varName, e.target.value)} type={type} />
}


export default [
  {
    id: 1,
    text: 'Add one variable to another',
    render: (vars, setVars) => <>
      Add {getVariableInput(vars, setVars, 'v2')}
      to {getVariableInput(vars, setVars, 'v1')}
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
      Add {getVariableInput(vars, setVars, 'v2', 'number')} to {getVariableInput(vars, setVars, 'v1')}
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
  }
]

