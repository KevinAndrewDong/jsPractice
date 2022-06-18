var char = 'a';
(function() {
    if (typeof char === 'undefined') {
        var char = 'b'
        console.log(char)
    } else {
        console.log(char)
    }
})()