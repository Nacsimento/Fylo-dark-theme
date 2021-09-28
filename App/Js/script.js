function ValidateEmail()
{
    var x = document.getElementById("form1").elements[0].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(x.match(mailformat))
{
    document.getElementById("demo").innerHTML="Received";
return true;
}
else
{
    document.getElementById("demo").innerHTML="Please enter a valid email address";
    document.form1.text1.focus();
return false;
}

}

