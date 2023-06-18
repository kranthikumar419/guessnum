var r = Math.floor(Math.random()*50)+1;
var count=0;
document.getElementById("check").onclick =function()
{
    var g=parseInt(document.getElementById("number").value);
    if(g==r)
    {
        document.getElementById("message").innerHTML="You Got The Number In "+count+" Tries."
        count++;
    }
    else if(g>r)
    {
        document.getElementById("message").innerHTML="Your Number Is High Try Lower One"
        count++;
    }
    else{
        document.getElementById("message").innerHTML="Your Number Is Low Try Higher One"
        count++;
    }
}
