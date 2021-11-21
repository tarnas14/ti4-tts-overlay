const slugifyObjective = fullObjectiveName => fullObjectiveName.replaceAll(/\s/g, '-').toLowerCase()

const slugifyFactionName = fullFactionName => `${fullFactionName.startsWith('Sardakk') ? '' : 'The_'}${fullFactionName.replaceAll(/'/g, '').replaceAll(/-/g, '__').replaceAll(/ /g, '_')}`

const dtoFactory = ttsData => {
  const flatObjectives = [...ttsData.objectives['Public Objectives I'], ...ttsData.objectives['Public Objectives II']]

  return {
    tts: true,
    vpCount: ttsData.scoreboard,
    factions: ttsData.players.map(player => slugifyFactionName(player.factionName)),
    objectives: flatObjectives.map((fullObjectiveName) => ({
      slug: slugifyObjective(fullObjectiveName),
      scoredBy: ttsData.players.filter(player => player.objectives.includes(fullObjectiveName)).map(player => slugifyFactionName(player.factionName)),
    }))
  }
}

module.exports = dtoFactory
