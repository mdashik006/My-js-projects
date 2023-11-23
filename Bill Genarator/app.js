function get()
{
    //first we get the values
    let x = document.getElementById('input').value;
    let y = document.getElementById('input2').value;

    // second we create a element 
    const node = document.createElement("tr");
    const node2 = document.createElement("tr");

    // third we create a text for the element
    const textnode = document.createTextNode(x);
    const textnode2 = document.createTextNode(y);

    // fouth we append or link the element with value
    node.appendChild(textnode);
    node2.appendChild(textnode2);

    // finally we display or print the appended thing in html document
    document.getElementById("row1").appendChild(node);
    document.getElementById("row2").appendChild(node2);

    // this is for clear the input screen
    document.getElementById('input').value = " "
    document.getElementById('input2').value = " "



}
