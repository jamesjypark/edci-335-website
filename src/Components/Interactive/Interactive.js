import React, { useState } from 'react'
import set from 'lodash/set'
import clone from 'lodash/clone'
import blockMap from './blockMap'

export default function Interactive(props) {
  const [blocks, setBlocks] = useState([])
  const insertVariables = b => {
  }
  const setBlockVariable = (index, varName, varVal) => {
    let blocksClone = clone(blocks)
    set(blocksClone, `[${index}].variableNames[${varName}]`, varVal)
    setBlocks(blocksClone)
  }
  console.log(blocks)
  return (
    <div>
      {blocks.map((b, i) => <div>{blockMap.find(bM => bM.id == b.id).render(
      b.variableNames,
      (varName, varValue) => setBlockVariable(i, varName, varValue))}</div>)}
      {blocks.map(b => <div>{blockMap.find(bM => bM.id == b.id).python(b.variableNames)}</div>)}
      {blocks.map(b => <div>{blockMap.find(bM => bM.id == b.id).c(b.variableNames)}</div>)}
      <textarea value={blocks.map(b => blockMap.find(bM => bM.id == b.id).mips(b.variableNames)).join('\n')} />
      {blockMap.map(b => <button onClick={() => setBlocks([...blocks, {
        id: b.id,
        variableNames: b.initialVars
      }
      ])}>{b.text}</button>)}
    </div>
  )
}
