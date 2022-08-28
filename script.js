const countLetters = y => [...y].map((w, i) => w+[...y.substring(0, i)].filter(z => z === w).length.toString())
var saved;
function keyType(key, randomWord, x){
	const wordElement = document.querySelector("div p:nth-last-child(2)"), word = wordElement.textContent;
	if(wordElement.classList.contains("reloadable")) location.reload();
	switch(key.key){
		case "Enter":
			wordElement.style.animation = 'none';
			if(word && x.search(new RegExp("\\s"+word+"\\s", "i")) !== -1){
				if(randomWord.join('') === countLetters(word).join('')){
					wordElement.style.animation = "win 1s " + ([...document.querySelectorAll("div p:not(:last-child,:nth-last-child(2))")].reverse().reduce((index, element) => {
						element.style.animation = "win-fade 2s " + index.toString() + "s forwards";
						return index + ![...element.children].every(el => el.classList.contains("fading"));
					}, 0) + 1) + "s 2 alternate"
					document.querySelector("div + div + div + div").textContent = "✓"
					wordElement.addEventListener("animationend", () => {
						wordElement.classList.add("reloadable")
					}, false);
				}
				else{
					wordElement.textContent = "";
					document.querySelector("style + div + div").textContent = parseInt(document.querySelector("style + div + div").textContent) + 1 || 1
					const resultingWordElement = document.createElement("p");
					countLetters(word).reduce((accumulator, currentValue) => {
						if(!randomWord.includes(currentValue)){
							const fadingSpan = document.createElement("span")
							fadingSpan.classList.add("fading")
							fadingSpan.textContent = currentValue[0];
							[...document.querySelector("div p:last-child").children].filter(el => el.textContent === currentValue[0])[0].classList.add("fading")
							resultingWordElement.append(fadingSpan);
							return
						}
						if(accumulator !== undefined && randomWord[accumulator + 1] === currentValue){
							resultingWordElement.lastChild.textContent += currentValue[0]
							document.querySelector("div + div + div").classList.add(accumulator + 1)
							return accumulator + 1
						}
						const regularSpan = document.createElement("span");
						regularSpan.textContent += currentValue[0]
						resultingWordElement.append(regularSpan);
						document.querySelector("div + div + div").classList.add(randomWord.indexOf(currentValue))
						return randomWord.indexOf(currentValue);
					}, undefined)
					document.querySelector("div + div + div").textContent = randomWord.length - document.querySelector("div + div + div").classList.length
					if(document.querySelector("div + div + div").textContent === "0"){
						document.querySelectorAll("div p:last-child span:not(.fading)").forEach(el => el.classList.add("fading"))
						document.querySelector("div p:last-child").style.background = "none";
					}
					document.querySelector("style + div").insertBefore(resultingWordElement, wordElement);
				}
			}
			else{
				wordElement.offsetHeight;
				wordElement.style.animation = "flashred 2s ease-in forwards"
			}
			break;
		case "Delete": case "Backspace":
			if(!document.querySelector("div p:not(:last-child,:nth-last-child(2))[style]")){
				wordElement.style.animation = 'none';
				wordElement.textContent = [...word].slice(0, -1).join('')
			}
			break;
		case "a": case "b": case "c": case "d": case "e": case "f": case "g": case "h": case "i": case "j": case "k": case "l": case "m": case "n": case "o": case "p": case "q": case "r": case "s": case "t": case "u": case "v": case "w": case "x": case "y": case "z":
			if(!document.querySelector("div p:not(:last-child,:nth-last-child(2))[style]")){
				wordElement.style.animation = 'none';
				wordElement.textContent += key.key.toUpperCase();
				const scrollingElement = (document.scrollingElement || document.body);
				scrollingElement.scrollTop = scrollingElement.scrollHeight;
			}
	}
}


fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt").then(x => x.text()).then(x => {
	const randomIndex = Math.floor(Math.random()*4234916)
	let randomWord = x.charAt(randomIndex).trim()
	for(let i = randomIndex + 1; x.charAt(i).trim(); i++){
		randomWord += x.charAt(i)
	}
	for(let i = randomIndex - 1; x.charAt(i).trim(); i--){
		randomWord = x.charAt(i) + randomWord
	}
	document.querySelector("div + div + div").textContent = randomWord.length;
	document.body.insertBefore(document.querySelector("div + div + div").cloneNode(true), document.querySelector("script"))
	document.addEventListener("keydown", key => keyType(key, countLetters(randomWord.toUpperCase()), x))
})