let browser = ['explorer', 'edge', 'chrome', 'opera', 'brave', 'ff'];
let x = browser.length;
console.log(x);
let y = browser.indexOf("chrme");

for (i = 0; i < x; i++) {
    if (browser[i] === 'opera') {

        console.log("selenium will not support this browser  : " + browser[i]);
        break;
    } console.log(browser[i]);
}
console.log(y);