/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numDaySelected = 0;
let costTotal = 0;

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');

const calculatedCost = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function buttonStatesset(element){
    const daySelectCheck = element.classList.contains('clicked');
    if (daySelectCheck=== true){
        element.classList.remove('clicked');
        numDaySelected-=1;
        recalculate();
    } else {
        element.classList.add('clicked');
        numDaySelected+=1;
        recalculate();
        }

}

function dayOfWeekSelected(event){
    event.preventDefault();
    const target = event.target;
    buttonStatesset(target);
    console.log(target);
}

mondayButton.onclick = dayOfWeekSelected;
tuesdayButton.onclick = dayOfWeekSelected;
wednesdayButton.onclick = dayOfWeekSelected;
thursdayButton.onclick = dayOfWeekSelected;
fridayButton.onclick = dayOfWeekSelected;
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDaysbutton(){
    mondayButton.classList.remove('clicked');
    tuesdayButton.classList.remove('clicked');
    wednesdayButton.classList.remove('clicked');
    thursdayButton.classList.remove('clicked');
    fridayButton.classList.remove('clicked');
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    costPerDay = 35;
    numDaySelected = 0;
    recalculate();
}

clearButton.onclick = clearDaysbutton;

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function setHalfButton(e){
    e.preventDefault();
    fullButton.classList.remove('clicked');
    halfButton.classList.add('clicked');
    costPerDay = 20;
    recalculate();
}

halfButton.onclick = setHalfButton;

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function setFullButton(e){
    e.preventDefault();
    halfButton.classList.remove('clicked');
    fullButton.classList.add('clicked');
    costPerDay = 35;
    recalculate();    
}

fullButton.onclick = setFullButton;

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    costTotal = numDaySelected*costPerDay;
    calculatedCost.textContent = `${costTotal.toFixed(0)}`;
}
