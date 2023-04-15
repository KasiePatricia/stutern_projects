// Questions on OBJECTS

/* 1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
        Handle of author
        content, 
        An image link posted by the author of the post
        Number of views, 
        Number of likes
*/

function InstagramPost(handle, content, img, numOfViews, numOfLikes) {
    this.handle = handle;
    this.content = content;
    this.img = img;
    this.numOfViews = numOfViews;
    this.numOfLikes = numOfLikes
}


// 2. Create 2 Instagram post objects from the constructor function you created above

const myInstagramPost = new InstagramPost("moonlight", "a passionate frontend developer", "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg", 100, 500)

console.log(myInstagramPost);

const yourInstagramPost = new InstagramPost("Hannah", "We're kind of all on the same team. Let's make sure we're working together vs. working against each other.", "https://t3.ftcdn.net/jpg/04/67/95/40/360_F_467954064_qFJxeuLVPcXon6X478v9hdgHrRlNgzDB.jpg", 1100, 2000)

console.log(yourInstagramPost);


/*
    3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
    ENG - 70
    GOVT - 85
    LIT - 82
    CRK - 94

    Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
    Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

*/

//a
const createPerson = (name, age, location) => {
    return {
        name: name,
        age: age,
        location: location
    };
}

const musaDetails = createPerson('Musa', 30, 'Abuja');
console.log(musaDetails);


//b
const createJambScores = (ENG, GOVT, LIT, CRK) => {
    return {
      ENG: ENG,
      GOVT: GOVT,
      LIT: LIT,
      CRK: CRK  
    };
}

const musaJambScore = createJambScores(70, 85, 82, 94);
console.log(musaJambScore);

const musaSchoolDetails = {...musaDetails, musaJambScore}
console.log(musaSchoolDetails);


// 4. What are the different ways you can clone an object? Give examples for each of them.

// Cloning an object means creating a copy of an existing object with identical properties and values. There are several ways to clone an object:

// a. Using the spread operator: This method creates a shallow copy of an object by spreading its properties into a new object.
const myDetails = { name: 'Kassy', age: 25 };
const newDetails = { ...myDetails };
console.log(newDetails);

// b. Using Object.assign(): This method creates a shallow copy of an object by copying its properties to a new object.
const mySchool = { name: 'UNN', dateFounded: 1960 };
const allAboutMySchool = Object.assign({}, mySchool);
console.log(allAboutMySchool);

// c. Using JSON.parse() and JSON.stringify(): This method creates a deep copy of an object by converting it to a JSON string and then back to an object.
const myPC = { name: 'Annabel', age: 1 }; 
const myPCInfo = JSON.parse(JSON.stringify(myPC));

// d. Using Object.create(): This method creates a new object with the specified prototype object and properties.
const moreAboutMe = { likes: 'cooking', dislikes: 'dishonesty' };
const isItGettingInterested = Object.create(moreAboutMe);


/*
    5. As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
        const presidentialCandidates = {
            AAC: 'Omoyele Sowore',
            ACCORD: 'Christopher Imumolen',
            APC: 'Bola Ahmed Tinubu',
            LP: 'Peter Obi',
            NNPP: 'Rabiu Kwankwaso',
            PDP: 'Atiku Abubakar',
        }
        Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	    ’Omoyele Sowore is the presidential candidate of AAC’
*/
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for(const party in presidentialCandidates) {
    //console.log(party);
    //console.log(presidentialCandidates[party]);

    const details =  `${presidentialCandidates[party]} is the presidential candidate of ${party}`;
    console.log(details);
    
}
