const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')

const img_list = ["1","2","3","4"] 
let index = 0;

btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left'))
        {
            index--;
            if(index<0){
                index = img_list.length-1
            }
            container.style.background = `url("./images/${img_list[index]}.jpg") center/cover`
        }
        else
        {
            index++;
            if(index>=img_list.length)
            {
                index = 0;
            }
            container.style.background= `url("./images/${img_list[index]}.jpg") center/cover`
        }
    })
})