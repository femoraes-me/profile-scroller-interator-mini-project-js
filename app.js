// data API
const data = [
    {
        name : 'John Doe',
        age : 32,
        gender : 'male',
        lookingFor : 'female',
        location : 'Boston MA',
        image : 'https://randomuser.me/api/portraits/men/10.jpg'
    },
    {
        name : 'Brad Pitt',
        age : 40,
        gender : 'male',
        lookingFor : 'female',
        location : 'Los Angeles CA',
        image : 'https://randomuser.me/api/portraits/men/36.jpg'
    },
    {
        name : 'Megan Fox',
        age : 30,
        gender : 'female',
        lookingFor : 'male',
        location : 'Miami FL',
        image : 'https://randomuser.me/api/portraits/women/10.jpg'
    },
];

const profiles = profileIterator(data);

nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender}</li>
                <li class="list-group-item">looking for: ${currentProfile.lookingFor}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    } else {
        window.location.reload();
    }
    
}

//Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0

    return {
        next: function() {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}