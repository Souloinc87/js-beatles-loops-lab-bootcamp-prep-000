function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])

  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while ( i < facts.length) {
    facts[i] += '!!!'
    i++
  }
  return facts
}
function iLoveTheBeatles() {
  var array = []
  var i = 1
  do {
    array.push('I love the Beatles!');
   i++
 }  while (i > 15)
  return array
}
