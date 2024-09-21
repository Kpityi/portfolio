const skillBox = document.querySelector(".skill-box");

const technologies = fetch("../Json/technologies.json")
  .then((response) => response.json())
  .then((data) => {
    data = data.technologies;
    data.forEach((technologi) => {
      skillBox.innerHTML += `
        <div class="skill-card">
          <div class="skill-title">${technologi.name}</div>
          <img
            src="./img/technologi/${technologi.logo}"
            alt="${technologi.name}"
            title="${technologi.name}" />
        </div>
      `;
    });
  })
  .catch((e) => console.log(e));
