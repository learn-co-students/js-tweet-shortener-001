'use strict';

var tweetShortener = {
  wordSubstituter: function(str){
    str = str.replace(/\bto\b|\btoo\b|\btwo\b/g, "2")
    str = str.replace(/\bbe\b/g, "b")
    str = str.replace(/\bat\b/g, "@")
    str = str.replace(/\byou\b/g, "u")
    str = str.replace(/\band\b/g, "&")
    str = str.replace(/\bfor\b/gi, "4")
    return str
  },
  bulkShortener: function(arr){
    var retArr = []
    for(var i = 0; i < arr.length; i++){
      retArr.push(this.wordSubstituter(arr[i]))
    }
      return retArr
  },
  selectiveShortener: function(str){
    // return str.length
    if(str.length > 140){
     return this.wordSubstituter(str)
   } else {
     return str
   }
  },
  shortenedTruncator: function(str){
    if(str.length > 140){

     return  str.substring(0,137) + "..."
   } else {
     return str
   }
  },
};
