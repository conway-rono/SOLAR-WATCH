let allPosts=[
    {
        heading: "Mercury: The Swift Messenger",
        note: "In the scorching heat of the closest planet to the Sun, Mercury...",
        imageUrl: "../images/mercury.jpg",
        likes:0,
        dislikes:0,
        comments:[{by:"Mike",says:"Hail mercury"},{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"}],
        date:"Mon 9/7"
    },
    {
        heading: "Venus: The Enigmatic Goddess",
        note: "A thick shroud of clouds enshrouds the mysterious planet Venus...",
        imageUrl: "https://cdn.pixabay.com/photo/2016/04/25/01/30/venus-1351056_1280.png",
        likes:0,
        dislikes:0,
        comments:[{by:"user",says:"jibber jabber"},{by:"Carl",says:"Venus rhymes with..."},{by:"user",says:"jibber jabber"}],
        date:"Tue 9/7"
    },
    {
        heading: "Earth: The Blue Jewel",
        note: "Amidst the vastness of the cosmos, our home planet Earth...",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFydGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        likes:0,
        dislikes:0,
        comments:[{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"},{by:"Me",says:"We love the Earth!"}],
        date:"Wed 9/7"
    },
    {
        heading: "Mars: The Red Planet",
        note: "With its rusty, barren landscape, Mars beckons explorers...",
        imageUrl: "https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        likes:0,
        dislikes:0,
        comments:[{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"}],
        date:"Thur 9/7"
    },
    {
        heading: "Jupiter: Journey Through the Enigmatic Majesty",
        note:"Once upon a time, in the vast expanse of space, a brave group of astronauts embarked on a perilous mission to explore the mysterious and awe-inspiring planet Jupiter. They had heard tales of its majestic size, swirling storms, and its captivating beauty.As their spacecraft approached the colossal gas giant, they were in awe of its sheer magnitude. Jupiter's vivid bands of swirling clouds mesmerized the astronauts, each layer revealing a different palette of colors, from deep blues to fiery reds. It was a sight unlike anything they had ever witnessed before.As they descended deeper into Jupiter's atmosphere, the astronauts encountered tumultuous storms, colossal hurricanes that dwarfed anything seen on Earth. Lightning bolts crackled across the skies, illuminating the swirling chaos of the tempests. Despite the danger, the astronauts felt a sense of exhilaration, knowing they were witnessing nature's most awe-inspiring display of power.Deep within the clouds, the astronauts discovered massive cyclones, spinning relentlessly, their colossal eye staring back at them with an intense gaze. These swirling vortices were like portals into another world, filled with unimaginable energy and raw force. The astronauts marveled at the sheer scale of these atmospheric phenomena, realizing that Jupiter was a planet of extremes.But amidst the turbulent storms and breathtaking displays, the astronauts discovered something unexpected—a delicate dance of ethereal auroras. They shimmered with vibrant hues of green and purple, illuminating the planet's upper atmosphere with a celestial glow. It was a rare sight, a moment of tranquility amidst the chaos.As the astronauts reluctantly prepared to depart from Jupiter, they couldn't help but feel humbled and awestruck by the planet's grandeur. Jupiter had revealed its true nature, a world of breathtaking beauty and unfathomable power. They knew that their journey would forever be etched in history, their tales of Jupiter captivating the imaginations of future generations.And so, the astronauts bid farewell to Jupiter, carrying with them memories of its majestic storms, its swirling clouds, and the mesmerizing dance of auroras. They left with a deeper understanding of the wonders of the universe, forever inspired by their encounter with the dramatic and enchanting planet that is Jupiter",
        imageUrl: "https://images.unsplash.com/photo-1590564137344-c1ce51ae38fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1cGl0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        likes:0,
        dislikes:0,
        comments:[{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"}],
        date:"Fri 9/7"
    },
    {
        heading: "Saturn: The Ringed Wonder",
        note: "With its magnificent rings encircling the gas giant, Saturn...",
        imageUrl: "https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2F0dXJufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        likes:0,
        dislikes:0,
        comments:[{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"}],
        date:"Sat 9/7"
    },
    {
        heading: "Uranus: The Tilted Ice Giant",
        note: "As one ventures farther into the outer reaches of the solar system, they encounter the peculiar planet Uranus...",
        imageUrl: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJhbnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        likes:0,
        dislikes:0,
        comments:[{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"}],
        date:"Tue 9/7"
    },
    {
        heading: "Neptune: The Mystic Blue",
        note: "In the farthest reaches of our solar system, where frigid winds howl and methane-rich clouds swirl, lies the captivating planet Neptune...",
        imageUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwdHVuZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        likes:0,
        dislikes:0,
        comments:[{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"},{by:"user",says:"jibber jabber"}],
        date:"Mon 9/7"
    }
]
function feedRender(){
    let feedContainer=document.querySelector('.container');
    allPosts.forEach((e)=>{
        let newFeedElement=`
        <div class="cards">
        <div class="feed-image">
        <div class="image" style="background: url(${e.imageUrl}) no-repeat center/cover"></div>
        </div>
        <div class="feed-text">
        <p>
        <h3>${e.heading}<h3>
        ${e.note}
        </p>
        </div>
        </div>
        `;
        feedContainer.innerHTML+=newFeedElement;
    })
}
feedRender();

function postRender(num){
    document.querySelector('.post-heading').textContent=`${allPosts[num].heading}`;
    document.querySelector('.image-pad').style.background=`url(${allPosts[num].imageUrl}) no-repeat center/cover`;
    document.querySelector('.note-pad').innerHTML=`<p>${allPosts[num].note}</p>`;
    document.querySelector('.description').textContent=`${allPosts[num].date}`;    
    
    var element='<h5><u>Comments</u></h5>';
    allPosts[num].comments.forEach((x)=>{
        element+=`<div class="comment"><h3>${x.by}</h3><p>${x.says}</p></div>`;
    })
    document.querySelector('.comments').innerHTML=element;
}
let init=localStorage.getItem("SW_endFrame")!=null?JSON.parse(localStorage.getItem("SW_endFrame")):0;
postRender(init);

document.querySelectorAll('.cards').forEach((e,index)=>{
    e.onclick=()=>{
        postRender(index);
        localStorage.setItem("SW_endFrame",JSON.stringify(index));
    }
})

