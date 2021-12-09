const quotes = ['No one is to blame for your future situation but yourself. If you want to be successful, then become Successful. ― Jaymin Shah',
'Everything comes to him who hustles while he waits.― Thomas Edison',
'Invest in your dreams. Grind now. Shine later. – Unknown',
'Hustlers dont sleep, they nap. – Unknown',
'Greatness only comes before hustle in the dictionary. – Ross Simmonds',
'Without hustle, talent will only carry you so far. – Gary Vaynerchuk',
'Work like there is someone working twenty-four hours a day to take it away from you. – Mark Cuban',
'Hustle in silence and let your success make the noise. – Unknown',
'Dreams don’t work unless you do. – John C. Maxwell',
'Go the extra mile. It’s never crowded there. – Dr. Wayne D. Dyer',
'Keep your face always toward the sunshine – and shadows will fall behind you. – Walt Whitman',
'What defines us is how well we rise after falling. – Lionel from Maid in Manhattan Movie',
'H.O.P.E. = Hold On. Pain Ends.',
'Make each day your masterpiece. – John Wooden',
'Wherever you go, go with all your heart – Confucius',
'Turn your wounds into wisdom – Oprah',
'We can do anything we want to if we stick to it long enough. – Helen Keller',
'Begin anywhere. – John Cage'
];




function generateMessage(){
  let buttonEl = document.getElementById("button-el")
  const randomGen = Math.floor(Math.random()*quotes.length)
  const randomQuote= quotes[randomGen]

  buttonEl.textContent =randomQuote

}
