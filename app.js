const quotes = [
    {
        name: 'Nelson Mandela', 
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    },
    {
        name: 'Walt Disney',
        quote: "The way to get started is to quit talking and begin doing.",
    },
    {
        name: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        name: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor."
    },
    {
        name: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    },
    {
        name:  "James Cameron", 
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        name: "John Lennon", 
        quote: "Life is what happens when you're busy making other plans."
    },
    {
        name: "Mother Teresa", 
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    },
    {
        name: "Franklin D Roosevelt", 
        quote: "When you reach the end of your rope, tie a knot in it and hang on."
    },
    {
        name: "Margaret Mead", 
        quote: "Always remember that you are absolutely unique. Just like everyone else."
    },
    {
        name: "Robert Louis Stevenson", 
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant."
    },
    {
        name: "Eleanor Roosevelt", 
        quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        name: "Benjamin Franklin", 
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
    },
    {
        name: "Helen Keller", 
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."
    },
    {
        name: "Aristotle", 
        quote: "It is during our darkest moments that we must focus to see the light."
    }, 
    {
        name:  "Anne Frank", 
        quote: "Whoever is happy will make others happy too."
    },
    {
        name: "Ralph Waldo Emerson", 
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
    },
    {
        name: "Marilyn Monroe", 
        quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about."
    }, 
    {
        name: "James M. Barrie", 
        quote: "Life is a long lesson in humility."
    }, 
    {
        name: "Robert Frost", 
        quote: "In three words I can sum up everything I've learned about life: it goes on."
    },
    {
        name:  "Bob Marley", 
        quote: "Love the life you live. Live the life you love."
    },
    {
        name: "Helen Keller", 
        quote: "Life is either a daring adventure or nothing at all."
    },
    {
        name: "Dr. Seuss", 
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
    },
    {
        name: "Charles Dickens", 
        quote: "Life is made of ever so many partings welded together."
    }, 
    {
        name: "Steve Jobs", 
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking."
    }, 
    {
        name: "Ray Bradbury", 
        quote: "Life is trying things to see if they work."
    },
    {
        name: "Thomas A. Edison", 
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up."
    }] 

const mainContent = document.querySelector('h2')
const parah = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click', e => {
        const quoter = Math.floor(Math.random() * quotes.length)
        mainContent.textContent = `"${quotes[quoter].quote}"`
        parah.textContent = quotes[quoter].name
})

