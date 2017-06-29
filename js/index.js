var userNum = Number(prompt('Enter fibonacci "n" number (recursion method)'));

function prn(msg) {
    document.write('<h3>Example 1 (recursion)</h3> Sequence number = ' + userNum + '; <br> Fibonacci numberic = ' + msg + ';<br><br>')
}

function fibN(n) {
    if (n == 1) return 1;
    if (n == 2) return 1;
    else return fibN(n - 2) + fibN(n - 1);
}
prn(fibN(userNum));


