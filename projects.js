const projectsData = [
    {
        title: "Matching Dice",
        description: "A puzzle game where player put dices with number into a grid",
        image: "images/dice.png",
        tag: ["All", "2D"],
        gitUrl: "/",
        previewUrl: "https://cdn.gamebatta.com/dice-puzzle/",
    },
    {
        title: "Celeste Clone",
        description: "An non-profit project use for school exam",
        image: "images/celeste.png",
        tag: ["All", "2D"],
        gitUrl: "/",
        previewUrl: "https://www.youtube.com/watch?v=c-tBwPkjQvE",
    },
    {
        title: "Weather game",
        description: "A small minigame for english beginner student",
        image: "images/weather.png",
        tag: ["All", "2D"],
        gitUrl: "/",
        previewUrl: "https://cdn.gamebatta.com/batta-weather/",
    },
    {
        title: "Falling Fruit",
        description: "A puzzle game where you drop 2 or more fruits with similar number to get the bigger number",
        image: "images/fruit.png",
        tag: ["All", "2D"],
        gitUrl: "/",
        previewUrl: "https://cdn.gamebatta.com/batta-faling-fruits/",
    },
    {
        title: "Overcooked Clone",
        description: "An non-profit project use for university graduation's exam",
        image: "images/cooking.png",
        tag: ["All", "3D"],
        gitUrl: "/",
        previewUrl: "https://www.youtube.com/watch?v=0Op6iBl0tKo",
    },
];

const list = document.getElementById("project-list");
const tagButtons = document.querySelectorAll(".tag-btn");

function renderProjects(filterTag = "All") {
    list.innerHTML = "";
    const filtered = projectsData.filter(p => p.tag.includes(filterTag));
    filtered.forEach(p => {
        list.innerHTML += `
      <li class="project-card">
        <div class="project-image" style="background-image:url('${p.image}')">
          <div class="overlay">
            <a href="${p.previewUrl}" target="_blank">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 5c-7.633 0-12 7-12 7s4.367 7 12 7 12-7 12-7-4.367-7-12-7zm0 11c-2.205 0-4-1.794-4-4s1.795-4 4-4c2.206 0 4 1.794 4 4s-1.794 4-4 4zm0-6.4A2.4 2.4 0 1 0 12 14a2.4 2.4 0 0 0 0-4.4z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="project-info">
          <h5>${p.title}</h5>
          <p>${p.description}</p>
        </div>
      </li>`;
    });
}

tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tagButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.tag);
    });
});

// initial load
renderProjects();
