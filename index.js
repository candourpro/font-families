import _ from 'lodash'

export default (config) => ({
  match: (_theme, value, key) => (
    config && value && key === 'fontFamily' && _.has(config, value)
  ),
  value: (_theme, value) => config[value],
})
