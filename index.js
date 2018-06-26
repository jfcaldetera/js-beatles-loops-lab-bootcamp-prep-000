function theBeatlesPlay(musicians, instruments)
{
  var master = new Array();

  for (var i = 0; i <= musicians.length; i++)
  {
    master.push("${musicians[i]} plays ${instruments[i]}")
  }
  return master
}

function johnLennonFacts(facts)
{
  var count = facts.length
  var master = new Array()

  while (count != 0)
  {
    master.push(facts[i] + "!!!")
  }
  return master
}
