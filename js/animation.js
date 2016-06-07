$(document).ready(function() {
    squareDiv = document.getElementsByClassName("squareDiv");
    task1Div = document.getElementsByClassName("task1Div");
    task2Div = document.getElementsByClassName("task2Div");

    // step0
    squareDiv[0].style.top = 50 + "px";
    squareDiv[0].style.left = 200 + "px";
    task1Div[0].style.left = 80 + "px";
    task1Div[0].style.top = -10 + "px";
    task2Div[0].style.left = 370 + "px";
    task2Div[0].style.top = -59 + "px";

    // step1
    squareDiv[1].style.top = -150 + "px";
    squareDiv[1].style.left = 200 + "px";
    task1Div[1].style.left = 80 + "px";
    task1Div[1].style.top = -215 + "px";
    task2Div[1].style.left = 370 + "px";
    task2Div[1].style.top = -265 + "px";

    // step2
    squareDiv[2].style.top = -250 + "px";
    squareDiv[2].style.left = 200 + "px";
    task1Div[2].style.left = 80 + "px";
    task1Div[2].style.top = -310 + "px";
    task2Div[2].style.left = 370 + "px";
    task2Div[2].style.top = -360 + "px";

    // step2
    /*
    task1Div[1].style.left = 100 + "px";
    task1Div[1].style.top = 0 + "px";
    task2Div[1].style.left = 400 + "px";
    task2Div[1].style.top = -100 + "px";
    */
    lockAnim();
    lockAnim2();

    function lockAnim() {
	if (parseInt(task1Div[1].style.left) < 200)
            task1Div[1].style.left = parseInt(task1Div[1].style.left) + 1 + 'px';
        if (parseInt(task2Div[1].style.left) > 250) {
	    task2Div[1].style.left = parseInt(task2Div[1].style.left) - 1 + 'px';
	    setTimeout(lockAnim, 20);
	} else {
	    clearTimeout(lockAnim);
	    setTimeout(reset, 700);
	    setTimeout(lockAnim, 1100);
	    //setTImeout(lockAnim, 20);
	    //setTimeout(lockAnim, 20);
	}
    }

    function lockAnim2() {
	if (parseInt(task1Div[2].style.left) < 160) {
            task1Div[2].style.left = parseInt(task1Div[2].style.left) + 1 + 'px';

	} 
	if (parseInt(task2Div[2].style.left) > 272) {
	    task2Div[2].style.left = parseInt(task2Div[2].style.left) - 1 + 'px';
	    setTimeout(lockAnim2, 20);
	} else {
	    clearTimeout(lockAnim2);
	    setTimeout(lockAnim3, 2000);
	}
    }

    function lockAnim3() {
	task1Div[2].style.visibility = "hidden";
	task2Div[2].style.left = parseInt(task2Div[2].style.left) - 1 + 'px';

	if (parseInt(task2Div[2].style.left) > 250) {
	    setTimeout(lockAnim3, 20);
	} else {
	    clearTimeout(lockAnim3);
	    setTimeout(hideTask2, 1300);
	    setTimeout(resetLastAnim, 1800);
	    setTimeout(lockAnim2, 1900);
	}
    }

    function reset() {
	//task1.style.visibility = "visible";
	//task2.style.visibility = "visible";
	task1Div[1].style.left = 80 + "px";
	task2Div[1].style.left = 370 + "px";
	/*
	task1Div[2].style.left = 80 + "px";
	task1Div[2].style.top = 0 + "px";
	task2Div[2].style.left = 370 + "px";
	task2Div[2].style.top = -50 + "px";
	*/
    }
    function hideTask2() {
	task2Div[2].style.visibility = "hidden";
    }

    function resetLastAnim() {
	task1Div[2].style.visibility = "visible";
	task2Div[2].style.visibility = "visible";
	task1Div[2].style.left = 80 + "px";
	task2Div[2].style.left = 370 + "px";

    }


})
