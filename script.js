const display = document.getElementById("display");

function appendToDisplay(input)
{
    // TO SHOW DISPLAY ON INPUT (ONCLICK)
    display.value += input;
};

function calculate()
{
    // TO DO THE CALCULATIONS
    try
    {
        display.value = eval(display.value);
    }

    catch(error)
    {
        display.value = "Math Error!"
    }
};

// TO CLEAR DISPLAY INPUT AS OPPOSED TO REFRESHING
// function clearDisplay()
// {
//     display.value = ""
// }