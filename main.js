const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const autorText = document.getElementById('author')
const newQuoteButton = document.getElementById('new-quote')
const loader = document.getElementById('loader')

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

async function newQuote() {
  try {
    loading()
    const apiUrl = 'https://api.quotable.io/random'
    const response = await fetch(apiUrl)
    const newQuote = await response.json()
    console.log(newQuote)
    if (newQuote.content) {
      quoteText.textContent = newQuote.content

      if (newQuote.content && newQuote.content.length > 120) {
        quoteText.classList.add('long-quote')
      } else {
        quoteText.classList.remove('long-quote')
      }

      if (!newQuote.author) {
        autorText.textContent = 'Unknown'
      } else {
        autorText.textContent = newQuote.author;

      }
    }
    
  } catch (error) {

  } finally { 
    complete()
  }
}

newQuoteButton.addEventListener('click', newQuote)

newQuote()