const cards=document.querySelectorAll('.card');const copyMessage=document.getElementById('copyMessage');
cards.forEach(c=>{c.addEventListener('click',()=>{navigator.clipboard.writeText(c.textContent).then(()=>{
copyMessage.classList.add('show');setTimeout(()=>copyMessage.classList.remove('show'),2000);});});});
const searchBox=document.getElementById('searchBox');if(searchBox){searchBox.addEventListener('input',()=>{
const val=searchBox.value.toLowerCase();document.querySelectorAll('.card').forEach(card=>{
card.style.display=card.textContent.toLowerCase().includes(val)?'block':'none';});});}
