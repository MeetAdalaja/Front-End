console.log('hello');

// data is an array of objects which contains information of candidates
const data = [
    {
        name: "raj",
        age: 18,
        city: "ahmedabad",
        languages: "HTML",
        frameworks:"DJango",
        image:'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: "arth",
        age: 19,
        city: "ahmedabad",
        languages: "python",
        frameworks:"Angular",
        image:'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: "pavan",
        age: 18,
        city: "mumbai",
        languages: "java",
        frameworks:"DJango",
        image:'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        name: "devang",
        age: 12,
        city: "deli",
        languages: "CSS",
        frameworks:"React",
        image:'https://randomuser.me/api/portraits/men/81.jpg'
    },
    {
        name: "meet",
        age: 15,
        city: "kolkata",
        languages: "C",
        frameworks:"vue",
        image:'https://randomuser.me/api/portraits/men/5.jpg'
    }
]

// CV Interator
function cvIterataor(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profiles.length ? 
            {value: profiles[nextIndex++], done:false} : {done:true}
        }
    };
}

const candidate = cvIterataor(data);

nextCV();

// button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidate.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>   
        <li class="list-group-item">${currentCandidate.age} Years old</li>   
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>   
        <li class="list-group-item">mainly works on ${currentCandidate.languages}</li>   
        <li class="list-group-item">with ${currentCandidate.frameworks} framework</li>   
      </ul>`
    }
    else{
        alert('khatammmm...!!!!');
        window.location.reload();
    }
    
    
}