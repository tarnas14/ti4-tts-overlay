const slugifyObjective = fullObjectiveName => fullObjectiveName.replaceAll(/\s/g, '-').toLowerCase()

const slugifyFactionName = fullFactionName => `${fullFactionName.startsWith('Sardakk') ? '' : 'The_'}${fullFactionName.replaceAll(/'/g, '').replaceAll(/-/g, '__').replaceAll(/ /g, '_')}`

const flattenObjectives = (ttsObjs, ttsData) => ttsObjs.map((fullObjectiveName) => ({
      slug: slugifyObjective(fullObjectiveName),
      scoredBy: ttsData.players.filter(player => player.objectives.includes(fullObjectiveName)).map(player => slugifyFactionName(player.factionName)),
    }))

const dtoFactory = ttsData => {
  return {
    tts: true,
    vpCount: ttsData.scoreboard,
    factions: ttsData.players.map(player => slugifyFactionName(player.factionName)),
    objectives: {
      pI: flattenObjectives(ttsData.objectives['Public Objectives I'], ttsData),
      pII: flattenObjectives(ttsData.objectives['Public Objectives II'], ttsData),
    }
  }
}

module.exports = dtoFactory
