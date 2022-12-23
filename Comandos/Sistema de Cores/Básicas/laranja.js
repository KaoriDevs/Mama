module.exports = {
    name: 'coresbasicas',
    type: 'interaction',
    prototype: 'selectMenu',
    $if: 'v4',
    code: `
$interactionReply[;{newEmbed:
{description:Cor <@&$get[id]> adicionada com sucesso!}
{color:$getRoleColor[$get[id]]}
};;;;yes]
$setUserVar[coratual;$get[id]]
$if[$getUserVar[coratual]==]
$giveRole[$guildID;$authorID;$get[id]]
$else
$giveRole[$guildID;$authorID;$get[id]]
$takeRole[$guildID;$authorID;$getUserVar[coratual]]
$endif
$let[id;1055399842005929994]
$onlyIf[$message==laranja;]
`
}