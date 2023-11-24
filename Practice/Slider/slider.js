const conatiner = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')
const imglist = ["1","2","3","4"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0)
            {
                index = imglist.length-1;
            }
            conatiner.style.background = `url("imges/${imglist[index]}.jpg") top/cover no-repeat`
        }
        else
        {
            index++;
            if(index===imglist.length)
            {
                index = 0;
            }
            conatiner.style.background = `url("imges/${imglist[index]}.jpg") top/cover no-repeat`
        }
    })
})