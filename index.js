const button = document.querySelectorAll('.main-text-1');
const m1 = document.getElementById('main-1');
const h1 = document.querySelector('.one-hidden');
const c1 = document.getElementById('chck1');
const button2 = document.querySelectorAll('.main-text-2');
const m2 = document.getElementById('main-2');
const h2 = document.querySelector('.two-hidden');
const button3 = document.querySelectorAll('.main-text-3');
const m3 = document.getElementById('main-3');
const h3 = document.querySelector('.three-hidden');
const button4 = document.querySelectorAll('.main-text-4');
const m4 = document.getElementById('main-4');
const h4 = document.querySelector('.four-hidden');
const button5 = document.querySelectorAll('.main-text-5');
const m5 = document.getElementById('main-5');
const h5 = document.querySelector('.five-hidden');



function check(){
    if (getComputedStyle(h1).display === 'none') {
        h1.style.display = 'block';
        m1.style.color = '#4a4b5e';
        console.log('shown');
        c1.className = 'fa-solid fa-angle-up';
    }else{
        h1.style.display = 'none';
        console.log('hidden');
        m1.style.color = '#787887';
    }
}

function check2(){
    if (getComputedStyle(h2).display === 'none') {
        h2.style.display = 'block';
        console.log('shown');
        m2.style.color = '#4a4b5e';
    }else{
        h2.style.display = 'none';
        console.log('hidden');
        m2.style.color = '#787887';
    }
}

function check3(){
    if (getComputedStyle(h3).display === 'none') {
        h3.style.display = 'block';
        console.log('shown');
        m3.style.color = '#4a4b5e';
    }else{
        h3.style.display = 'none';
        console.log('hidden');
        m3.style.color = '#787887';
    }
}

function check4(){
    if (getComputedStyle(h4).display === 'none') {
        h4.style.display = 'block';
        console.log('shown');
        m4.style.color = '#4a4b5e';
    }else{
        h4.style.display = 'none';
        console.log('hidden');
        m4.style.color = '#787887';
    }
}

function check5(){
    if (getComputedStyle(h5).display === 'none') {
        h5.style.display = 'block';
        console.log('shown');
        m5.style.color = '#4a4b5e';
    }else{
        h5.style.display = 'none';
        console.log('hidden');
        m5.style.color = '#787887';
    }
}