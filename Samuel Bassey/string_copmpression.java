class Solution {
    public int compress(char[] chars) {
        // initialise two pointers
        int fastPointer = 0, slowPointer = 0;

// check if the pointer is within array length range
while (fastPointer < chars.length){
    // set the count for a character to 1.
    int characterCount = 1;
    // check to see if we've reached the end of the array or
    // if the current character is equal to the next character 
    while (fastPointer + 1 < chars.length && chars[fastPointer] == chars[fastPointer+1]) {
        // increase the character count
        characterCount++;
        // move the pointer forward
        fastPointer++; 
    }
    // place the current string in a new location(slowPointer location)
    chars[slowPointer++] = chars[fastPointer];
    // check if the length of the characters is greater than 1
    // attach the length of the character in the array character by character
    // e.g. 10 => "1", "0"
    if(characterCount > 1){char[] parsedLength = String.valueOf(characterCount).toCharArray();
        for(char letter: parsedLength){chars[slowPointer++] = letter;
        }    
    }
    fastPointer++;
}
return slowPointer;




    }
}