const factory = ({
  sessionRepository,
  ttsDataService,
  twitchNotifications,
}) => async () => {
  try {
    const sessionsToUpdate = await sessionRepository.getSessionsToUpdate()

    if (!sessionsToUpdate.length) {
      console.log('nothing to update')
      return
    }

    let errors = 0
    const start = Date.now()
    console.log(`${sessionsToUpdate.length} sessions to update, starting`)
    const promises = sessionsToUpdate.map(async session => {
      try {
        const data = await ttsDataService.get(session.ttsKey)
        await twitchNotifications.broadcast(session.config.channelId, data)
        await sessionRepository.setUpdated(session.id)
      } catch (err) {
        errors++
        console.error('error sending update for session', session.id)
        console.error('reason', err)
      }
    })
    await Promise.allSettled(promises)
    const finish = Date.now()
    console.log(`update finished, ${sessionsToUpdate.length - errors}/${sessionsToUpdate.length}, elapsed: ${(finish - start) / 1000}`)
  } catch (error) {
    console.error('error sending updates', error)
  }
}

module.exports = factory
