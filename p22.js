var im=require("./itemsModule");
var fruits=im.fruits;

for(var i in fruits)
{
    console.log(`fruits[${i}]=${fruits[i]}`);

}
var vegitables=im.vegitables;
for(var i in vegitables)
{
    console.log(`vegitables[${i}]=${vegitables[i]}`);

}