//### Question 2 — Student Grade Calculator
//Problem: Take marks (0–100) and print the grade based on these rules:
//- 90 and above → A
//- 80–89 → B
//- 70–79 → C
//- 60–69 → D
//- Below 60 → Fail

let x = 59;

if (x >= 90){
    console.log("student got A grade with marks = "+x)
}else if(x>=80){
console.log("student got B grade with marks = "+x)
}else if(x>=70){
console.log("student got C grade with marks = "+x)
}else if(x>=60){
console.log("student got F grade with marks = "+x)
}else {
console.log("student got failed with marks = "+x)
}