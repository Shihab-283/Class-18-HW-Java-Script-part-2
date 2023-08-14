// SIDEBAR-HW-START
document.getElementById('toggle').addEventListener('mouseenter', function(event){
    document.getElementById('sidebar').style.marginLeft = 0;
})
document.getElementById('toggle').addEventListener('mouseleave', function(event){
    document.getElementById('sidebar').style.marginLeft = '-300px';
})
// SIDEBAR-HW-END


document.write('<br>')


// GREAD-POINT-AVERAGE-HW-START

document.write('<h1>Name:Sadman Shahriar Shihab')

document.write('<br>')
document.write('<br>')



document.write('<h1>RESULT</h1>')

document.write('<br>')


// SUBJECT-NAME-START

let english = 80;
let math = 70;
let ict = 60;
let BGS = 75;

// SUBJECT-NAME-END

// ENGLISH-START

if (english >= 80 && english <=100){
    document.write('<h1>A+</h1>')
}else if(english >= 70 && english <80){
    document.write('<h1>A</h1>')
}else if(english >= 60 && english <70){
    document.write('<h1>A-</h1>')
}else if(english >= 50 && english <60){
    document.write('<h1>B</h1>')
}else if(english >= 40 && english <50){
    document.write('<h1>C</h1>')
}else if(english >= 33 && english <40){
    document.write('<h1>D</h1>')
}else if(english >= 0 && english <33){
    document.write('<h1>F</h1>')
}else{
    document.write('<h1>Invalid Number</h1>')

}

// ENGLISH-END

document.write('<br>')

// MATH-START

if (math >= 80 && math <=100){
    document.write('<h1>A+</h1>')
}else if(math >= 70 && math <80){
    document.write('<h1>A</h1>')
}else if(math >= 60 && math <70){
    document.write('<h1>A-</h1>')
}else if(math >= 50 && math <60){
    document.write('<h1>B</h1>')
}else if(math >= 40 && math <50){
    document.write('<h1>C</h1>')
}else if(math >= 33 && math <40){
    document.write('<h1>D</h1>')
}else if(math >= 0 && math <33){
    document.write('<h1>F</h1>')
}else{
    document.write('<h1>Invalid Number</h1>')

}

// MATH-END

document.write('<br>')

// ICT-START

if (ict >= 80 && ict <=100){
    document.write('<h1>A+</h1>')
}else if(ict >= 70 && ict <80){
    document.write('<h1>A</h1>')
}else if(ict >= 60 && ict <70){
    document.write('<h1>A-</h1>')
}else if(ict >= 50 && ict <60){
    document.write('<h1>B</h1>')
}else if(ict >= 40 && ict <50){
    document.write('<h1>C</h1>')
}else if(ict >= 33 && ict <40){
    document.write('<h1>D</h1>')
}else if(ict >= 0 && ict <33){
    document.write('<h1>F</h1>')
}else{
    document.write('<h1>Invalid Number</h1>')

}

// ICT-END

document.write('<br>')

// BGS-START

if (BGS >= 80 && BGS <=100){
    document.write('<h1>A+</h1>')
}else if(BGS >= 70 && BGS <80){
    document.write('<h1>A</h1>')
}else if(BGS >= 60 && BGS <70){
    document.write('<h1>A-</h1>')
}else if(BGS >= 50 && BGS <60){
    document.write('<h1>B</h1>')
}else if(BGS >= 40 && BGS <50){
    document.write('<h1>C</h1>')
}else if(BGS >= 33 && BGS <40){
    document.write('<h1>D</h1>')
}else if(BGS >= 0 && BGS <33){
    document.write('<h1>F</h1>')
}else{
    document.write('<h1>Invalid Number</h1>')

}

// BGS-END


// GREAD-POINT-AVERAGE-HW-END


document.write('<br>')


// average-start

var gpa = ((english + math + ict + BGS) / 4)

document.write(gpa);

// document.write((english + math + ict + BGS) / 4) 

// average-start