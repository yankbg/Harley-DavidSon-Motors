let buttondropdown = document.getElementById('btndropdown');
let inputDropdown = document.getElementById('input-dropdown');
let paragraph2 = document.getElementById('secondpara');
let paragraph3 = document.getElementById('secondpara2');
let buttonMore = document.getElementById('moreinfo');
let timecont = document.getElementById('timeline');
let span1 = document.getElementById('time1');
let span2 = document.getElementById('time2');
let span3 = document.getElementById('time3');
let span03 = document.getElementById('time03');
let span4 = document.getElementById('time4');
let span5 = document.getElementById('time5');
let span6 = document.getElementById('time6');
let span7 = document.getElementById('time7');
let span8 = document.getElementById('time8');
let span9 = document.getElementById('time9');
let span10 = document.getElementById('time10');
let span11 = document.getElementById('time11');
let span12 = document.getElementById('time12');
let timeleft = document.getElementById('timeline1');
let timeright = document.getElementById('timeline3');
let Myarray2 = [span1,span2,span3,span03,span4,span5,span6,span7,span8,span9,span10,span11,span12];
let MyArray = [
    {
        pk: 'Incorporation and Growth',
        Title: ' Harley-Davidson Motor Company is officially incorporated.',
        Image: 'image/timeline1907.webp',
        Details: ' The company begins producing motorcycles on a larger scale, with production increasing to 150 bikes per year.'
    },
    {
        pk: 'World War I and Military Use',
        Title: 'Harley-Davidson supplies motorcycles for World War I.',
        Image: 'image/timeline1917.jpg',
        Details: ` The U.S. military orders over 20,000 motorcycles, including the Model J and Model W, for dispatch and reconnaissance missions. This solidifies Harley-Davidson's reputation for durability and reliability.`
    },
    {
        pk: 'The First Solo Seat Motorcycle',
        Title: ' Introduction of the first solo seat motorcycle.',
        Image: 'image/timeline1927.webp',
        Details: `  Harley-Davidson introduces the Model J with a solo seat, catering to individual riders and emphasizing the brand's focus on personal freedom and adventure.`
    },
    {
        pk: 'The Knucklehead Engine',
        Title: '  Launch of the Knucklehead engine.',
        Image: 'image/timeline1937.webp',
        Details: ' The Knucklehead engine, with its overhead valves and 61 cubic inch displacement, becomes an iconic feature of Harley-Davidson motorcycles, offering improved performance and cooling.'
    },
    {
        pk: ' Post-War Innovation',
        Title: ' Harley-Davidson introduces the Hydra-Glide front suspension.',
        Image: 'image/timeline1947.jpg',
        Details: ' The Hydra-Glide becomes the first Harley-Davidson motorcycle with a hydraulic front fork, providing a smoother ride and setting the stage for future innovations.'
    },
    {
        pk: 'The Sportster Legacy',
        Title: 'Launch of the Harley-Davidson Sportster',
        Image: 'image/timeline1957.jpg',
        Details: ' The Sportster, with its lightweight design and powerful engine, becomes a symbol of rebellion and freedom, appealing to a new generation of riders.'
    },
    {
        pk: ' The Shovelhead Engine',
        Title: ' Introduction of the Shovelhead engine.',
        Image: 'image/timeline1967.webp',
        Details: 'The Shovelhead engine replaces the Panhead, offering improved performance and reliability. It becomes a favorite among custom bike builders.'
    },
    {
        pk: ' The FXS Low Rider',
        Title: '  Launch of the FXS Low Rider.',
        Image: 'image/timeline1977.jpg',
        Details: '  The Low Rider, with its unique styling and low-slung design, becomes a cultural icon and a favorite among riders seeking a blend of performance and style.'
    },
    {
        pk: ' The Evolution Engine',
        Title: ' Introduction of the Evolution engine.',
        Image: 'image/timeline1987.jpg',
        Details: ' The Evolution engine, with its improved performance and reliability, marks a new era for Harley-Davidson, helping the company regain its reputation after the AMF years.'
    },
    {
        pk: 'The Fat Boy and Custom Culture',
        Title: ' The Fat Boy gains popularity.',
        Image: 'image/timeline1997.webp',
        Details: ` Featured in the movie Terminator 2: Judgment Day, the Fat Boy becomes one of Harley-Davidson's most iconic models, symbolizing the brand's dominance in custom motorcycle culture.`
    },
    {
        pk: ' The 105th Anniversary',
        Title: 'Harley-Davidson celebrates its 105th anniversary.',
        Image: 'image/timeline2007.jpg',
        Details: 'The company hosts a massive celebration in Milwaukee, attracting riders from around the world. Special edition models are released to commemorate the milestone.'
    },
    {
        pk: 'The Milwaukee-Eight Engine',
        Title: 'Launch of the Milwaukee-Eight engine',
        Image: 'image/timeline2017.jpg',
        Details: ' The Milwaukee-Eight engine, with its improved power and cooling, becomes the new standard for Harley-Davidson touring bikes, offering a smoother and more responsive ride.'
    },
    {
        pk: 'The Future of Harley-Davidson',
        Title: 'Continued innovation and expansion.',
        Image: 'image/timeline2025.jpg',
        Details: ' Harley-Davidson continues to innovate with new models, electric motorcycles, and a focus on sustainability. The brand remains a global symbol of freedom, adventure, and the open road.'
    }
];
buttondropdown.onclick = () => {
    
    if(inputDropdown.style.display === "none"){
        inputDropdown.style.display = 'block';
    }
    else{
        inputDropdown.style.display = 'none';
    }
}
buttonMore.onclick = () => {
    
    if(paragraph2.style.display === "none"){
        paragraph2.style.display = 'block';
        paragraph3.style.display = 'block';
    }
    else{
        paragraph2.style.display = 'none';
        paragraph3.style.display = 'none';
    }
}
let b = 0;
console.log(b);
for (let i = 0; i < Myarray2.length; i++) {
    
    
    Myarray2[i].onclick = () => {
        timecont.classList.add('rotate');
        timeleft.classList.add('rotate');
        timeright.classList.add('rotate');
        Myarray2[b].style.color = '#000000';
        Myarray2[b].style.backgroundColor = '#d3d3d3'; 
        console.log(`this is the 2nd b: ${b}`);
        console.log(`this is i: ${i}`);
        Myarray2[i].style.color = 'white';
        Myarray2[i].style.backgroundColor = " #007aff";
        let a;
        let c;
        if(i >= 0 || a == 12 || c == 0){
            a= i - 1;
            c = i + 1;
        }
        if(i == 12){
            c = 0;
        }
        if(i == 0){
            a = 12;
        }
        timeleft.innerHTML =
        `
            <h4>${MyArray[a].pk}</h4>
            <img src="${MyArray[a].Image}" alt="" class="timepic">
            <div class="textpart">
                <h4>${MyArray[a].Title}</h4>
                <p>
                    ${MyArray[a].Details}
                </p>
            </div>
        `

        timecont.innerHTML = 
        `
            <h4>${MyArray[i].pk}</h4>
            <img src="${MyArray[i].Image}" alt="" class="timepic">
            <div class="textpart">
                <h4>${MyArray[i].Title}</h4>
                <p>
                    ${MyArray[i].Details}
                </p>
            </div>
        `;

        timeright.innerHTML = 
        `
            <h4>${MyArray[c].pk}</h4>
            <img src="${MyArray[c].Image}" alt="" class="timepic">
            <div class="textpart">
                <h4>${MyArray[c].Title}</h4>
                <p>
                    ${MyArray[c].Details}
                </p>
            </div>
        `;
        b=i;    
        setTimeout(() => {
            timecont.classList.remove('rotate');
        timeleft.classList.remove('rotate');
        timeright.classList.remove('rotate');
        },3000)
    }
    
}


