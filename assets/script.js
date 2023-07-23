var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
//Updated variable with an array.
function listTopics() {
    for(var i =0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}
//Function that lists all types of topics.

function selectTopic(){
    if(randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if(randomTopic === 'CSS') {
        console.log("Let's study CSS");
    } else if(randomTopic === 'Git') {
        console.log ("Let's study Git!");
    } else if(randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
//Checks what topic is currently being studied.
    } else {
        console.log('Please try again!');
//Failsafe/bug detector in case something goes wrong.
    }
}
//Funtion that selects a topic for viewing.

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first');
selectTopic();