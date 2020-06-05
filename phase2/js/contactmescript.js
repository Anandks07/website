function myFunction() {
    var day;
    var time= new Date().getHours();
    switch(true)
    {
        case (time<12):
            day="Morning";
            break;
        case (time<14):
            day="Afternoon";
            break;
        case (time<20):
            day="Evening";
            break;
        case(time>=20):
            day="Night";
            break;
        default:
            day="unknown";

    }
    if (document.getElementById("myForm").elements[0].value == "" || document.getElementById("myForm").elements[1].value == "")
    {
        alert("some values have not been entered");
    }
    else
    {
        alert("Good "+day +" " + document.getElementById("myForm").elements[0].value + " ,"  + "Thankyou for contacting me.I will get back to you soon.");
    }
}