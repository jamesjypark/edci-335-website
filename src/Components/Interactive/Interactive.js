import React, { useState } from 'react'
import set from 'lodash/set'
import clone from 'lodash/clone'
import uniq from 'lodash/uniq'
import flatten from 'lodash/flatten'
import padEnd from 'lodash/padEnd'
import blockMap from './blockMap'
import { CopyBlock, dracula } from "react-code-blocks";

import './Interactive.scss'

export default function Interactive(props) {
  const [blocks, setBlocks] = useState([])
  const setBlockVariable = (index, varName, varVal) => {
    let blocksClone = clone(blocks)
    set(blocksClone, `[${index}].variableNames[${varName}]`, varVal)
    console.log(blocksClone)
    setBlocks(blocksClone)
  }
  const allVars = uniq(blocks.reduce((acc, b) => [...acc, ...Object.values(b.variableNames)], []).filter(isNaN))
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
    <div className>
      {
        blockMap.map(b => <button 
          className="button bold"
          onClick={
          () => setBlocks([...blocks, {
            id: b.id,
            variableNames: clone(b.initialVars)
          }])
        }>{b.text}</button>)
      }
    </div>
    <div className="input-container">
      {blocks.map((b, i) => <div>{blockMap.find(bM => bM.id == b.id).render(
      b.variableNames,
      (varName, varValue) => console.log(i) || setBlockVariable(i, varName, varValue))}</div>)}
    </div>
    <div className="code-container">
      <div className={`code ${props.languages.includes("mips") ? "" : "hide"}`}>
        <div className="basetext1 bold center"> MIPS </div>
        <CopyBlock
          text={getMips(flatten(blocks.map(b => blockMap.find(bM => bM.id == b.id).mips(b.variableNames))))}
          language={"c"}
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
          wrapLines
        />
      </div>
      <div className={`code ${props.languages.includes("c") ? "" : "hide"}`}>
        <div className="basetext1 bold center"> C </div>
        <CopyBlock
          text={getC(flatten(blocks.map(b => blockMap.find(bM => bM.id == b.id).c(b.variableNames))))}
          language={"c"}
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
          wrapLines
        />
      </div>
      <div className={`code ${props.languages.includes("python") ? "" : "hide"}`}>
        <div className="basetext1 bold center"> Python </div>
        <CopyBlock
          text={getPython(flatten(blocks.map(b => blockMap.find(bM => bM.id == b.id).python(b.variableNames))))}
          language={"python"}
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
          wrapLines
        />
      </div>
    </div>
  </>
  )
}
