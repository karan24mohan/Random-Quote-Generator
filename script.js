var arr = [
    'The purpose of our lives is to be happy. — Dalai Lama',
    'Life is what happens when you’re busy making other plans. — John Lennon',
    'Get busy living or get busy dying. — Stephen King',
    'You only live once, but if you do it right, once is enough. — Mae West',
    'Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison',
    'If you want to live a happy life tie it to a goal not to people or things – Albert Einstein',
    'Never let the fear of striking out keep you from playing the game.– Babe Ruth',
    'Money and success don’t change people; they merely amplify what is already there. — Will Smith',
    'Our time is limited, so don’t waste it living someone else’s life.  – Steve Jobs'
]


function gen() {
    var a = arr.length;
    for (let b = 0; b <= a; b++) {
        var c = (Math.floor(Math.random() * b));
        document.getElementById("container").innerHTML = arr[c];
    }
}

document.getElementById("sexybutton").onclick = function () {
    gen();
}

/*var Day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function dayl(number) {
    return (Day[number - 1]);
}

dayl(3);
*/