

async function getCourse() {
     
    const data=await fetch("/json/courses.json")
    const course=await data.json()
 




const courses = document.querySelector('.grid')

for (let i = 0; i < course.length; i++) {
    const card = document.createElement("div")
    card.classList.add("grid-card")
    let htm = `<img src="${course[i].img}"/> 
    <div class="card">
    <p class="h">${course[i].topic}</p>
    <img  class="fav" alt="favourite" src="/icons/favourite.svg" role="checkbox"
                        aria-checked="true" tabindex="0" />
                    <p><span>${course[i].sub}</span>Grade ${course[i].grade}</p>
                    <p>
                        <strong>${course[i].units}</strong> units <strong>${course[i].lesons}</strong> lessons
                        <strong>${course[i].topics}</strong> topics
                    </p>
                    <select>
                        <option>${course[i].Prof}</option>
                    </select>
                    <p><span>${course[i].students}</span>${course[i].Date}</p>
                </div>
                <div class="card-footer">
                    <img src="/icons/preview.svg" alt="preview" style="opacity:${course[i].icons[0]}%" role="button" tabindex="0" aria-pressed="false" />
                    <img src="/icons/manage.svg" alt="manage" style="opacity:${course[i].icons[1]}%" role="button" tabindex="0" aria-pressed="false" />
                    <img src="/icons/grade.svg" alt="grade" style="opacity:${course[i].icons[2]}%" role="button" tabindex="0" aria-pressed="false" />
                    <img src="/icons/reports.svg" alt="report" style="opacity:${course[i].icons[3]}%" role="button" tabindex="0" aria-pressed="false" />
    </div>`

    card.innerHTML = htm
    courses.appendChild(card)

}
}
getCourse()
function click(){
    
    
    const subli=document.getElementById("in")
    subli.style.display="block"
    console.log("executed",subli)
    
}
