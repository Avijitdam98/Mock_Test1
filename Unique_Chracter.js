function firstUniqueCharacter(s) {

    const charFreq = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!charFreq.hasOwnProperty(char)) {
        charFreq[char] = 0;
      }
      charFreq[char]++;
    }
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charFreq[char] === 1) {
        return i;
      }
    }
  
    return -1;
  }
  
  
  const s = "leetcode";
  const result = firstUniqueCharacter(s);
  console.log(result); // 0
  