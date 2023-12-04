let button=document.querySelector("button");
let joke_display=document.querySelector("p");
const fun=button.onClick=()=>{
    console.log("Hello anju i am going to tell u some jokes");
}     
button.addEventListener("click",fun);      

const jokes=["Why did the scarecrow win an award? Because he was outstanding in his field!"," A told my girlfriend she drew her eyebrows too high. She seemed surprised.","Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.","Always borrow money from a pessimist. They’ll never expect it back.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "How do you organize a space party? You planet!",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why don't eggs tell jokes? Because they might crack up.",
    "I used to play piano by ear, but now I use my hands.",
    "Did you hear about the kidnapping at the park? They woke up!",
    "What do you call an alligator detective? An investi-gator!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you make holy water? You boil the hell out of it!",
    "I used to play piano by ear, but now I use my hands.",
    "What's Forrest Gump's password? 1forrest1",
    "Did you hear about the guy who invented Lifesavers? He made a mint!",
    "I'm reading a book on anti-gravity - it's impossible to put down.",
    "Why don't we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "I told my wife she should do lunges to stay in shape. That would be a big step forward.",
    "What's a computer's favorite snack? Microchips!",
    "What do you call a bear with no teeth? A gummy bear!"]

    button.addEventListener("click",()=>{
        const randomjoke=jokes[ Math.floor(Math.random() * jokes.length)]
        joke_display.innerHTML=randomjoke;
    })