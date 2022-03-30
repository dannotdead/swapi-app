const compose = ( ...functions ) => (component) => {
  return functions.reduceRight(
    (previousValue, func) => func(previousValue), component)
}

export default compose