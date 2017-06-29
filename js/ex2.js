var userNum = Number(prompt('Enter fibonacci "n" number (cycle method)'));

function prn(msg) {
    document.write('<h3>Example 2 (cycle)</h3> Sequence number = ' + userNum + '; <br> Fibonacci numberic = ' + msg + ';<br><br>')
}

function fibN(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
prn(fibN(userNum));
