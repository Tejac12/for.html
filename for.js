//1.Use switch case and take Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday as cases and any expression related to case 

switch ("tuesday") {
    case ("monday"):
        console.log("monday is weekday")
        break
    case ("tuesday"):
        console.log("Tuesday is a 2nd day in a week")
        break
    case ("wednesday"):
        console.log("wednesday is a 3rd in a week")
        break
    case ("thursday"):
        console.log("thursday is a 4th day in a week")
        break
    case ("friday"):
        console.log("friday is a 5th day in a week")
        break
    case ("saturday"):
        console.log("saturday is a 6th in a week")
        break
    case ("sunday"):
        console.log("sunday is last day of week")
        break
    default:
        console.log("there a seven days in a week for every year")
}

//For of loop:-- iterate array of elements having number 1  to 5

var a = [1, 2, 3, 4, 5];
for (var elements of a) {
    console.log(elements)
}

//For of loop:-- take string Nd iterate characters

var b = "shiro";
var result = ""
for (var char of b) {
    //console.log(char)
    result = result + char
}
console.log(result)

