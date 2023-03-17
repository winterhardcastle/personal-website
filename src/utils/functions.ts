
export const hackerText = (evt:any) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval:any = null;

    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
    evt.target.innerText = evt.target.innerText
    .split("")
    .map((letter:any, index:any) => {
        if(index < iteration) {
            return evt.target.dataset.value[index];
        }
        if(letter === " "){
            return " "
        }
    return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
    
    if(iteration >= evt.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


export const scrollToElement = (el:any) => {
  const element = document.getElementById(el)
  return element ? (element.getBoundingClientRect().top ): 1000
}