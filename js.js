var answerMaster = [
    "Try Again!",
    "Who Cares!!",
    "Better Luck Next Time!!",
    "100% Maybe!!",
    "Not in a Million Years!!",
    "I See Nothing!!",
    "Absolutely!!",
    "My Chips say Yes!!",
    "Output Fair!!",
    "Hard Drive Stuck Try Again!!",
    "Without a Doubt Maybe!!",
];

num = answerMaster.length;

var answerRendered = document.getElementById('h3');

var handler = function (_event) {
    for (var i = 0; i < num; i++) {

        var x = Math.floor(Math.random() * num);

        var quoteText = answerMaster[x];

    }
    answerRendered.innerHTML = quoteText;

};

var button = document.getElementById('but');

button.addEventListener('click', handler);