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

        card.innerHTML=`
            <div class="card">
                <div class = "card-header">
                    ${member.name}
                </div>
                <div class="card-body">
                    <p><strong>Position:</strong> ${member.position}</p>
                </div>
            </div>

        `
    teamCardsContainer.appendChild(card)
    });
}

window.onload = generateTeamCards()