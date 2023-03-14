let form = document.querySelector("#form");

let bot = {
    TOKEN: "6239148251:AAG3oh8P-WLQVFstqypePopT2VtmwhkOJeQ",
    chatID: "-733873317",
}

form.addEventListener("submit", e => {
    e.preventDefault();

    let message = document.querySelector("#some_message");

    fetch('https://api.telegram.org/bot6239148251:AAG3oh8P-WLQVFstqypePopT2VtmwhkOJeQ/sendMessage?chat_id=${bot.chatID}&text=${message.value}',{
        method: "GET"
    })
    .then(success => {
        alert("message send successfully!")
    }, error => {
        alert ("message not send")
        console.log(error);
    })

    
})