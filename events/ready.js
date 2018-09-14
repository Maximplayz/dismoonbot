// events
exports.run = (client) => {

  console.log(`\nBot is ready and logged in as ${client.user.tag} (${client.user.id})\n`)
  console.log(`Serving ${client.users.size} users on ${client.guilds.size} guilds`)

}
