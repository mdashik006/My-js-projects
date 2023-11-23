
function func()
{
    let fvlaue = document.getElementById('f-value').value 
    let evlaue = document.getElementById('e-value').value 
    let c1 = document.getElementById('c-value1').value  
    let c2 = document.getElementById('c-value2').value  
    irtous = c1*84
    aedtousd = c1*3.6
    irtousd = c1*0.012
    thbtousd = c1*34.6
    usdtoir = c1/84
    aedtoir=c1*0.044
    thbtoir = c1/2.3
    usdtoaed = c1*0.2722
    irtoaed=c1/0.0444
    thbtoaed = c1*9.48
    usdtothb = c1/34.6
    irtothb=c1*2.3
    aedtothb=c1/9.48
    if(fvlaue=="USD")
    {
        if(evlaue=="INR")
        {
            document.getElementById('c-value2').value = irtous
        }
        else if(evlaue=="AED")
        {
            document.getElementById('c-value2').value =aedtousd
        }
        else if(evlaue=="THB")
        {
            document.getElementById('c-value2').value =thbtousd
        }
        else if(evlaue=="USD")
        {
            document.getElementById('c-value2').value = c1
        }
        else
        {
            document.getElementById('c-value2').value = "NULL"
        }
    }
    else if(fvlaue=="INR")
    {
        if(evlaue=="USD")
        {
            document.getElementById('c-value2').value =usdtoir
        }
        else if(evlaue=="AED")
        {
            document.getElementById('c-value2').value =aedtoir 
        }
        else if(evlaue=="THB")
        {
            document.getElementById('c-value2').value =thbtoir 
        }
        else if(evlaue=="INR")
        {
            document.getElementById('c-value2').value = c1
        }
    }
    else if(fvlaue=="AED")
    {
       
        if(evlaue=="USD")
        {
            document.getElementById('c-value2').value =usdtoaed
        }
        else if(evlaue=="AED")
        {
            document.getElementById('c-value2').value =c1 
        }
        else if(evlaue=="THB")
        {
            document.getElementById('c-value2').value =thbtoaed 
        }
        else if(evlaue=="INR")
        {
            document.getElementById('c-value2').value = irtoaed
        } 
    }
    else if(fvlaue=="THB")
    {
        if(evlaue=="USD")
        {
            document.getElementById('c-value2').value =usdtothb
        }
        else if(evlaue=="AED")
        {
            document.getElementById('c-value2').value =aedtothb 
        }
        else if(evlaue=="THB")
        {
            document.getElementById('c-value2').value =c1 
        }
        else if(evlaue=="INR")
        {
            document.getElementById('c-value2').value = irtothb
        } 
    }
    else
    {
        document.getElementById('c-value2').value = "null"

    }
}
