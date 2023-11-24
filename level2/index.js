function reset()
{

    let x = document.getElementById('bn').value
    y = (x*1)+1
    document.getElementById('bn').value = y
    document.getElementById('cn').value=''
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

    let m = (y*9/100)
    document.getElementById("da").value ="-"+Math.round(m)

    let n = (y*3/100)
    document.getElementById('gst').value="+"+Math.round(n)

    let o = (y-m+n)
    document.getElementById('fa').value= Math.round(o)+".00"

    let p = document.getElementById("pn").value
    if (p=="poomaxcut85")
    {
        document.getElementById("pp").value = "107"
    }
    else if(p=="poomaxcut90")
    {
        document.getElementById('pp').value = "107"
    }
    else if(p=="poomaxcut95")
    {
        document.getElementById('pp').value = "123"
            }
    else if(p=="poomaxcut100")
    {
        document.getElementById('pp').value = "123"
    }
    else if(p=="tea powder")
    {
        document.getElementById('pp').value = "25"
    }
    else if(p=="coffie powder")
    {
        document.getElementById('pp').value = "25"
    }
    else if(p=="ginger")
    {
        document.getElementById('pp').value = "25"
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
    let billno = document.getElementById('bn').value
    let proname = document.getElementById('pn').value
    let quan = document.getElementById('qty').value
    let ppp = document.getElementById('pp').value
    let tot = document.getElementById('ta').value
    let ddd = document.getElementById('da').value  
    let fff = document.getElementById('fa').value
    let nnn = document.getElementById('cn').value  

    const node= document.createElement("tr")
    const node1= document.createElement("tr")
    const node2 = document.createElement("tr")
    const node3 = document.createElement("tr")
    const node4 = document.createElement("tr")
    const node5 = document.createElement("tr")
    const node6 = document.createElement("tr")
    const node7 = document.createElement("tr")

    const textnode= document.createTextNode(nnn)
    const textnode1= document.createTextNode(billno)
    const textnode2 = document.createTextNode(proname)
    const textnode3= document.createTextNode(quan)
    const textnode4= document.createTextNode(ppp)
    const textnode5= document.createTextNode(tot)
    const textnode6= document.createTextNode(ddd)
    const textnode7= document.createTextNode(fff)
    node.appendChild(textnode)
    node1.appendChild(textnode1)
    node2.appendChild(textnode2)
    node3.appendChild(textnode3)
    node4.appendChild(textnode4)
    node5.appendChild(textnode5)
    node6.appendChild(textnode6)
    node7.appendChild(textnode7)

    document.getElementById('myrow').appendChild(node)
    document.getElementById('myrow1').appendChild(node1)
    document.getElementById('myrow2').appendChild(node2)
    document.getElementById('myrow3').appendChild(node3)
    document.getElementById('myrow4').appendChild(node4)
    document.getElementById('myrow5').appendChild(node5)
    document.getElementById('myrow6').appendChild(node6)
    document.getElementById('myrow7').appendChild(node7)

}
