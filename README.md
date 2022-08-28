# multi-letter wordle
Coding project on my free time. Wordle but with multiple letters. The mystery word will be multiple letters long and the input can also be multiple letters long.

## controls
Type on your keyboard to add letters (only A-Z). Use backspace to delete. Press enter to submit word.

## mechanics
The mechanics seem daunting but they will grow on you.

### main area
- Letters that are absent from the mystery word will fade away.
- Letters that are in the mystery word will remain
- Consecutive sequences of letters shared in both words will clump together. 
  - For example, 'le' in turtle and leopard will clump together.
- Only letters with the same no. of occurence will match: 1st 'e' and 1st 'e' will match, 2nd 'e' and 2nd 'e' will match, but 1st 'e' and 2nd 'e' will not match.
  - For example, 'id' from timid and giddy will not clump together because the 'id' from timid is the *2*nd 'i' + 1st 'd' and for giddy it is the *1*st 'i' + 1st 'd'. 
- A word that is invalid will flash red
- A word that after a lengthy animation, turns green, is correct and you win
  - Pressing enter when you win will reload the page and restart the game

### bottom bar
Bottom bar represents the remaining letters that could be in the mystery word but you haven't guessed them yet. Any letters that are proven absent from the mystery word will fade away from here.
- If you correctly guess a letter but you haven't guessed the next occurence of a letter the letter will be shown on the bottom bar.

### top-left number
Counts the number of tries.

### top-right number
Counts the number of remaining letters you haven't found. If you hover on this number, it will show how many letters are in the mystery word.
 
## other
Other not useful information about the game.
- If you find all the letters the bottom bar will disappear.
- If you win and hover on the top-right number it will display a checkmark.
- The mystery word is chosen randomly each reload from a list. Longer words are more likely to be chosen.
- A word longer than the screen will be clipped off.
- If the height of the main area exceeds the height of the screen the scroll bar will become active.
- The bottom bar and the numbers are fixed on the screen regardless of how you scroll
