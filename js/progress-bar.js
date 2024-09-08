const li_s = document.querySelectorAll("li")
const p_s = document.querySelectorAll("li > p")
const progress_s = document.querySelectorAll(".progress")
const icon_s = document.querySelectorAll("li > i")

li_s.forEach(el => {
    el.addEventListener("click",function(){
        var progress_bar_array = ["1","2","3","4","5"]
        var current_p = el.querySelector("p")
        var current_p_number = current_p.textContent
        progress_bar_array.forEach(element =>{
            var sliced_arr = progress_bar_array.slice(parseInt(current_p_number))
            for(let i = 0 ; i < sliced_arr.length ; i++){
                p_s[parseInt(sliced_arr[i])-1].classList.remove("active")
                progress_s[parseInt(sliced_arr[i])-1].classList.remove("active")
                icon_s[parseInt(sliced_arr[i])-1].classList.remove("active")
            }
            if(element === current_p_number){
                for(let i = 0 ; i < parseInt(current_p_number) ; i++){
                    p_s[i].classList.add("active")
                    progress_s[i].classList.add("active")
                    icon_s[i].classList.add("active")
                }
            }
        })
    })
});
