function findShort(s) {
    let words = s.split(" ");
    shortword = words[0].length;
    for (i in words) {
        if ((words[i].length) < shortword) {
            shortword = words[i].length;
        }
    }
    return shortword;
}


//   Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.