class Formatter {
  //add static methods here
  static capitalize(string) {
    // capitalizes the first letter of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes
    return string.replace( /[^A-Za-z0-9 '-]+/g, "" );
  }

  // static titleize(string) {
  //   // akes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  // }


  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
  // had to look at solution after trying many different attempts...
}