/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Chart from 'chart.js/auto';

let canvas = document.getElementById('canvas')
let messages = JSON.parse(canvas.dataset.messages);  
let views  = JSON.parse(canvas.dataset.views);

console.log(Object.keys(views))






window.onload = function() {  
var ctx = document.getElementById("canvas").getContext("2d");  
window.myBar = new Chart(ctx, {  
    type: 'line', 
    data:{
        datasets:[{
            type:'line',
            label:'views',
            data:  Object.values(views)    
              
        }, {
            type: 'bar',
            label: 'Messaggi',
            data: Object.values(messages) ,
        }],
        labels: Object.keys(messages)

    },  
    options: { 
  
        
        elements: {  
            rectangle: {  
                borderWidth: 2,  
                borderColor: 'rgb(80, 255, 0)',  
                borderSkipped: 'bottom'  
            }  
        },  
        responsive: true,  
        title: {  
            display: true,  
            text: 'Monthly Website Visitor'  
        }  
    }  
});  

};  
