import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const ignorePatterns = ['.next/**', 'out/**', 'node_modules/**']
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

const eslintConfig = [
  {
    ignores: ignorePatterns,
  },
  ...compat.extends('next/core-web-vitals'),
]

export default eslintConfig
