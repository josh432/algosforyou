//let vs. var
//var gets hoisted to top, put on global window object
//let doesn't get hoisted to top or put on global window object

//if var behaves differently. let looks for block scope. let is in own universe within {}
//apple is different inside and outside the curly braces

//this keeps apple as 2
function maple() {
    let apple = 2;
    if (apple === 2) {
        let apple = 6;
    }
    console.log(apple);
}

maple();

//this changes apple to 6 due to var usage. hoisted to top of function
function oak() {
    var apple = 2;
    if (apple === 2) {
        var apple = 6
    }
    console.log(apple);
}

oak();
