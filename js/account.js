var account_col_2 = document.querySelector(".account .col-2")
var col_2_children = document.querySelectorAll(".account .col-2 *")
var account_list_li_a = document.querySelectorAll(".account .account-list ul li:not(:last-child) a")

account_list_li_a.forEach(a_el=>{
    col_2_children.forEach(all_el=>{
        a_el.addEventListener("click",function(){
            account_list_li_a.forEach(a_el =>{
                a_el.classList.remove("active")
            })
            a_el.classList.add("active")
            if(a_el.innerText === all_el.id){
                col_2_children.forEach(all_el => {
                    all_el.classList.add("active")
                });
                all_el.classList.remove("active")
            }
        })
    })
})