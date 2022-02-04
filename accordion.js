// Accordion Get element area

const accordion = document.querySelectorAll('.accordion-header')

console.log(accordion);

accordion.forEach(item =>{

    item.addEventListener('click', function(){

       
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');
    

        accordion.forEach(item => {
            if(item != this){
                item.classList.remove('active');
                item.nextElementSibling.classList.remove('active');
            }
        })

        

    });


});
