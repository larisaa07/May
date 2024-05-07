//team member data
const teamMembers = [
    {
        name: 'Lionel Messi',
        age: 36,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'One of the greatest players of all time'
    }
]

function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards');

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //style the GB color of the cards based on person
        let backgroundColor
        switch(member.position.toLowerCase()) {
            case 'forward':
                backgroundColor = 'red'
                break
            case 'mid':
                backgroundColor = 'green'
                break
            case 'defender':
                backgroundColor = 'blue'
                break
            default:
                backgroundColor = 'gray'
        }
        card.style.backgroundColor = backgroundColor

        card.innerHTML=`
            <div class="card">
                <div class = "card-header">
                    ${member.name}
                </div>
                <div class="card-body" style = "background-color:${backgroundColor};">
                    <p><strong>Position:</strong> ${member.position}</p>
                </div>
            </div>

        `
    teamCardsContainer.appendChild(card)
    });
}

window.onload = generateTeamCards()