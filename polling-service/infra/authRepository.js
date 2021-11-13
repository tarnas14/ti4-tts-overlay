const factory = () => {
  return {
    authorize: (params) => console.log('authorizing', params)
  }
}

module.exports = factory
