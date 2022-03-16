const indefinite_article = (word) => {
  return (word.trim().charAt(0).match(/[aeiou]/))?' an ' + word:' a ' + word;
}
// need to work on  the word being capitalized as well as singular vs plural