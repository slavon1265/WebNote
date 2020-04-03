let dots = document.querySelectorAll('.dot');



for(let i=0; i<dots.length; i++){
    dots[i].addEventListener('mouseon', function(event){
        event.stopPropagation();
        let parentBlock = this.parentElement;
        let child = parentBlock.children;
        console.log(child[i])
        return ()=>{
            console.log('finish')
        }
    })
}