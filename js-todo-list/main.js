// TO DO
document.addEventListener('DOMContentLoaded', ()=>{
  var selc = document.querySelector(".checked");
  const ul = document.querySelector("ul");

  // console.log(ul);
  // 寫死li點擊位置, 點擊->加上class="checked"
  // li[0].classList.add("checked");
  // li[2].classList.add("checked");

  // 寫死ul.children點擊位置, 點擊->加上class="checked"
  // ul.children[0].classList.add("checked")

  // 使用迴圈判斷
  // 點擊, 就選取

 /*
  ul.addEventListener('click', ()=>{
    for (let i = 0; i < selc.length; i++){
      ul.children[i].classList.add("checked");
    }
  })
  */

  
  // 使用Event.target
  ul.addEventListener('click', (e) =>{
    console.log(e.target);
  if (e.target && e.target.className === "checked") {

      e.target.classList.remove("checked");
    }
    else{
      e.target.classList.add("checked");
  
    }
  })
 })
// className & classList 差異
// className: 比對class名稱
// classList: 新增(add)/刪除(remove) class




  // selc.addEventListener("click",() =>{
  //   console.log(11);

  // })
  
 
   
