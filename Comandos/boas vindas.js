module.exports = {
    channel: '1053942273290809464',
    type: 'join',
    $if: 'v4',
    code: `
<@$authorID>
$author[Boas Vindas︲$userTag;$authorAvatar]
$color[53F9B7]
$image[https://media.discordapp.net/attachments/1053942273290809464/1054947920820043776/IMG-20221220-WA0019.jpg]
$footer[ID do Usuário: $authorID | $replaceText[$replaceText[$checkCondition[$getUserVar[vezentrou]<=1];true;];false;$getUserVar[vezentrou] vezes]]
$setUserVar[vezentrou;$sum[$getUserVar[vezentrou];1]]

`
}