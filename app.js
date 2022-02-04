

// Get Element

const click = document.getElementById('click');
const keep = document.getElementById('keep');
const discard = document.getElementById('discard');
const modal = document.querySelector('.mizan-modal');
const mcloes = document.querySelector('.mizan-modal .cloes');
const acloes = document.querySelector('.mizan-alert .cloes');
const alert = document.querySelector('.mizan-alert');
const body = document.querySelector('body')




click.addEventListener('click', function(e){
    e.preventDefault();

    modal.classList.add('active');
    body.classList.add('modal-open');
    
    
});

mcloes.addEventListener('click', function(){
    
    alert.style.display = 'flex'
});


acloes.addEventListener('click', function(){
    
    alert.style.display = 'none'
});

keep.addEventListener('click', function(){
    
    alert.style.display = 'none'
});

discard.addEventListener('click', function(){
    
    alert.style.display = 'none'
    modal.classList.remove('active');
    body.classList.remove('modal-open')
});


modal.addEventListener('click', function(e){

    if(e.target == this ){
        modal.classList.remove('active');

    }
    
    
});


