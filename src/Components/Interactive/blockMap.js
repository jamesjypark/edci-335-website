import React from 'react'

export default [
  {
    id: 1,
    text: 'Add one variable to another',
    render: (vars, setVars) => <>
      Add <input value={vars['v2']} onChange={e => setVars('v2', e.target.value)} />
      to <input value={vars['v1']} onChange={e => setVars('v1', e.target.value)} />
    </>,
    python: vars => `${vars['v1']} += ${vars['v2']}`,
    c: vars => `${vars['v1']} = ${vars['v1']} + ${vars['v2']}`,
    mips: vars => `LA $t0, ${vars['v2']}\nLW $t1, ($t0)\nLA $t0, ${vars['v1']}\nLW $t2, ($t0)\nADD $t1, $t1, $t2\nSW $t1, ($t0)`,
    initialVars: {
      v1: 'x',
      v2: 'y'
    }
  },
  {
    id: 2,
    text: 'Add a constant to a variable',
    render: (vars, setVars) => <>
      Add <input value={vars['v2']} onChange={e => setVars('v2', e.target.value)} type='number' />
      to <input value={vars['v1']} onChange={e => setVars('v1', e.target.value)} />
    </>,
    python: vars => `${vars['v1']} += ${vars['v2']}`,
    c: vars => `${vars['v1']} = ${vars['v1']} + ${vars['v2']}`,
    mips: vars => `LA $t0, ${vars['v1']}\nLW $t1, ($t0)\nLI $t2, ${vars['v2']}\nADD $t1, $t1, $t2\nSW $t1, ($t0)`,
    initialVars: {
      v1: 'x',
      v2: 0
    }
  }
]

