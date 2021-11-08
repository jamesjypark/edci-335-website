import React, { useState } from 'react'
import set from 'lodash/set'
import clone from 'lodash/clone'
import reject from 'lodash/reject'
import flatten from 'lodash/flatten'
import padEnd from 'lodash/padEnd'
import blockMap from './blockMap'

import './Interactive.scss'

export default function Interactive(props) {
  const [blocks, setBlocks] = useState([])
  const insertVariables = b => {
  }
  const setBlockVariable = (index, varName, varVal) => {
    let blocksClone = clone(blocks)
    set(blocksClone, `[${index}].variableNames[${varName}]`, varVal)
    console.log(blocksClone)
    setBlocks(blocksClone)
  }
  const allVars = blocks.reduce((acc, b) => [...acc, ...Object.values(b.variableNames)], []).filter(isNaN)
  console.log(allVars)
  const getC = blocksLines => {
    const prefix = [
    '#include <iostream>',
    '',
    'int main() {'
    ]
    const variables = allVars.map(v => `  int ${v} = 0;`)
    const lines = blocksLines.map(b => `  ${b}`)
    const suffix = ['}']
    return [...prefix, ...variables, ...lines, ...suffix].join('\n')
  }
  const getPython = blocksLines => blocksLines.join('\n')
  const getMips = blocksLines => {
    const prefix = [
    '  main:'
    ]
    const lines = blocksLines.map(b => `      ${b}`)
    const variables = [
      '    .data',
      ...allVars.map(v => `      ${padEnd(`${v}:`, 8)}.word`)
    ]
    return [...prefix, ...lines, ...variables].join('\n')
  }
  return (
  <>
    <div>
      {blockMap.map(b => <button onClick={() => setBlocks([...blocks, {
        id: b.id,
        variableNames: clone(b.initialVars)
      }
      ])}>{b.text}</button>)}
    </div>
    <div>
      {blocks.map((b, i) => <div>{blockMap.find(bM => bM.id == b.id).render(
      b.variableNames,
      (varName, varValue) => console.log(i) || setBlockVariable(i, varName, varValue))}</div>)}
    </div>
    <div className='code-container'>
      <textarea className='code' value={getPython(flatten(blocks.map(b => blockMap.find(bM => bM.id == b.id).python(b.variableNames))))} />
      <textarea className='code' value={getC(flatten(blocks.map(b => blockMap.find(bM => bM.id == b.id).c(b.variableNames))))} />
      <textarea className='code' value={getMips(flatten(blocks.map(b => blockMap.find(bM => bM.id == b.id).mips(b.variableNames))))} />
    </div>
  </>
  )
}
