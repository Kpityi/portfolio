const cvSkills = document.querySelector(".cv-skills");
const languagesBox = document.querySelector(".language");

const technologies = fetch("../Json/skills.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const skills = data.skills;
    const languages = data.languages;
    skills.forEach((skill) => {
      cvSkills.innerHTML += `
        <div class="row m-1">
          <span class="m-1">
            <i class="${skill.icon} me-1"></i>
            <span>${skill.name}</span>
          </span>
          <span
            class="progress p-1"
            role="progressbar"
            aria-label="${skill.name}"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100">
            <span class="progress-bar" style="width: ${skill.percent}%"></span>
          </span>
        </div>      
      `;
    });
    languages.forEach((language) => {
      languagesBox.innerHTML += `
      <div class="row m-1">
        <span class="m-1">
          <span>${language.name}</span>
        </span>
        <span
          class="progress p-1"
          role="progressbar"
          aria-label="${language.name}"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100">
          <span class="progress-bar" style="width: ${language.percent}%"></span>
        </span>
      </div>`;
    });
  })
  .catch((e) => console.log(e));
