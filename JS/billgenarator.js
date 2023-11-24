function reset()
{

    let x = document.getElementById('bn').value
    y = (x*1)+1
    document.getElementById('bn').value = y
    document.getElementById('cn').value=""
    document.getElementById('pn').value=''
    document.getElementById('qty').value=''
    document.getElementById('gst').value=''
    document.getElementById('da').value=''
    document.getElementById('ta').value=''
    document.getElementById('pp').value=''
    document.getElementById('fa').value=''
}

function result()
{
    let x = document.getElementById('qty').value
    let z = document.getElementById('pp').value
    let y = (x*z)
    document.getElementById('ta').value = y+".00"

    let m = (y*15.00/100)
,.    document.getElementById("da").value ="-"+Math.round(m)

    let n = (y*3/100)
    document.getElementById('gst').value="+"+Math.round(n)

    let o = (y-m+n)
    document.getElementById('fa').value= Math.round(o)+".00"

    let p = document.getElementById("pn").value
    if (p=="pen")
    {
        document.getElementById("pp").value = "12"
    }
    else if(p=="milk")
    {
        document.getElementById('pp').value = "32"
    }
    else if(p=="biscuts")
    {
        document.getElementById('pp').value = "10"
            }
    else if(p=="suger")
    {
        document.getElementById('pp').value = "25"
    }
    else 
    {
        document.getElementById('pp').value = ""
    }
}



function show()
{    
    let a = document.getElementById('bn').value
    document.getElementById('billno').innerHTML = a
    
    let b = document.getElementById('cn').value
    document.getElementById('cname').innerHTML = b 

    let c = document.getElementById('pn').value
    document.getElementById('pname').innerHTML = c 

    let d = document.getElementById('pp').value
    document.getElementById('perp').innerHTML = d

    let e = document.getElementById('qty').value
    document.getElementById('quant').innerHTML = e 

    let f = document.getElementById('ta').value
    document.getElementById('total').innerHTML = f 

    let g = document.getElementById('da').value
    document.getElementById('disa').innerHTML = g 

    let h = document.getElementById('gst').value
    document.getElementById('gsta').innerHTML = h 

    let i = document.getElementById('fa').value
    document.getElementById('fina').innerHTML = i
}
