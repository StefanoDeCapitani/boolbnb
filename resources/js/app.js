/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Chart from 'chart.js/auto';
let canvas = document.getElementById('canvas')
var messages = canvas.dataset.messages;  
let views  = canvas.dataset.views
console.log(messages)


window.onload = function() {  
var ctx = document.getElementById("canvas").getContext("2d");  
window.myBar = new Chart(ctx, {  
    type: 'bar',  // horizontalBar, pie, line 
    data:{
        labels:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
        datasets:[{
            label:'views',
            data:[
                124049012,
                193847819,
                283747829,
                12731432,
                26312,
                351361
            ]
        }]
    },  
    options: {  
        elements: {  
            rectangle: {  
                borderWidth: 2,  
                borderColor: 'rgb(0, 255, 0)',  
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
console.log(ctx)