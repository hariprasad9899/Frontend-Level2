var user_feedback = document.getElementsByClassName('user-feedback')[0];
var user_name = document.getElementById('user-name');
var user_role = document.getElementById('user-role');
var img = document.getElementById('user_image');

const users = {
    feedbacks : {
        tanya: ' “I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        john: ' "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."' 
    },
    names: {
        tanya: 'Tanya Sinclair',
        john: 'John Tarkpor'
    },
    roles: {
        tanya: 'UX Engineer',
        john: 'Junior Front-end Developer'
    },
    images: {
        tanya: './images/image-tanya.jpg',
        john: './images/image-john.jpg'
    }
}

// index_array = Object.keys(users.feedbacks);
index_array = ["tanya","john"];


function change(val) {
    var person = index_array[val]
    user_feedback.innerText = users["feedbacks"][person];
    user_name.innerText = users["names"][person];
    user_role.innerText = users["roles"][[person]];
    img.src = users["images"][person];
}