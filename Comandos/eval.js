module.exports = {
    name: 'eval',
    $if: 'v4',
    aliases: ['e'],
    code: `
$eval[$message]
$onlyForIDs[$botOwnerID;]
`
    }
