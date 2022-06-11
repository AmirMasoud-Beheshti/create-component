export const reactTemplate = `import React from 'react'
import styles from './{{name}}.module.scss'

const {{name}} = () => {
  return (
    <div className={styles['{{name}}']}>{{name}}</div>
  )
}

export default {{name}}`;

export const cssModuleTemplate = `.{{name}}{

  
}`