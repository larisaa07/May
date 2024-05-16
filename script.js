//team member data
const teamMembers = [
    {
        name: 'Zeus',
        romanName: 'Jupiter',
        titleDomain: ['King of the gods', 'Ruler of Olympus', 'god of the sky, lightning, thunder, law, order, and justice'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['thunderbolt', 'eagle', 'oak tree', 'bull', 'scepter', 'scales'],
        spouce: true,
        spouceName: 'Hera',
    },
    {
        name: 'Hera',
        romanName: 'Juno',
        titleDomain: ['Queen of the gods', 'goddess of marriage, women, childbirth, and family'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['peacock', 'cuckoo', 'cow'],
        spouse: true,
        spouceName: 'Zeus',
    },
    {
        name: 'Poseidon',
        romanName: 'Neptune',
        titleDomain: ['Earthshaker', 'god of the seas, water, storms, hurricanes, earthquakes, and horses'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['trident', 'horse', 'bull', 'dolphin'],
        spouce: true,
        spouceName: 'Amphitrite (Nereid)',
    },
    {
        name: 'Demeter',
        romanName: 'Ceres',
        titleDomain: ['goddess of harest, fertility, agriculture, nature, and the seasons'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['poppy', 'wheat', 'torch', 'cornucopia', 'pig'],
        spouce: false,
        spouceName: 'N/A',
    },
    {
        name: 'Athena',
        romanName: 'Minerva',
        titleDomain: ['goddess of wisdom, handicraft, and warfare'],
        father: 'Zeus',
        mother: 'Metis (Oceanid)',
        symbols: ['owl', 'olive tree'],
        spouce: false,
        spouceName: 'N/A',
    },
    {
        name: 'Hephaestus',
        romanName: 'Vulcan',
        titleDomain: ['Master blacksmith and craftsman of the gods', 'god of the forge, craftsmanship, invention, fire, and volcanoes'],
        father: 'Zeus (or N/A - born of asexual reproduction)',
        mother: 'Hera',
        symbols: ['fire', 'anvil', 'axe', 'donkey', 'hammer', 'tongs', 'quail'],
        spouce: true,
        spouceName: 'Aphrodite',
    },
    {
        name: 'Ares',
        romanName: 'Mars',
        titleDomain: ['god of war, violence, bloodshed, and manly virtues'],
        father: 'Zeus',
        mother: 'Hera',
        symbols: ['boar', 'serpent', 'dog', 'vulture', 'spear', 'sheild'],
        spouce: false,
        spouceName: 'N/A (in a relationship w/ Aphrodite)',
    },
    {
        name: 'Aphrodite',
        romanName: 'Venus',
        titleDomain: ['goddess of love, pleasure, passion, procreation, fertility, beauty, and desire'],
        father: 'Zeus',
        mother: 'Dione (Oceanid or Titaness)',
        symbols: ['dove', 'bird', 'apple', 'bee', 'swan', 'myrtle', 'rose'],
        spouce: true,
        spouceName: 'Hephaestus',
    },
    {
        name: 'Artemis',
        romanName: 'Diana',
        titleDomain: ['goddess of the hunt, the wilderness, virginity, the moon, archery, childbirth, protection, and plague'],
        father: 'Zeus',
        mother: 'Leto',
        symbols: ['the moon', 'horse', 'deer', 'hound', 'she-bear', 'cypress tree', 'bow and arrow'],
        spouce: false,
        spouceName: 'N/A',
    },
    {
        name: 'Apollo',
        romanName: 'Apollo',
        titleDomain: ['god of the sun, light, prophecy, philosophy, archery, truth, inspiration, poetry, music, arts, manly beauty, medicine, healing, and plague'],
        father: 'Zeus',
        mother: 'Leto',
        symbols: ['lyre', 'raven', 'swan', 'wolf', 'bow and arrow'],
        spouce: false,
        spouceName: 'N/A',
    },
    {
        name: 'Hermes',
        romanName: 'Mercury',
        titleDomain: ['Messenger of the gods', 'Guide of dead souls', 'god of travel, commerce, communication, borders, eloquence, diplomacy, thieves, and games'],
        father: 'Zeus',
        mother: 'Maia (Nymph)',
        symbols: ['the caduceus (his staff with 2 snakes on it)', 'winged sandals', 'stork', 'tortoise'],
        spouce: false,
        spouceName: 'N/A',
    },
    {
        name: 'Dionysus',
        romanName: 'Bacchus',
        titleDomain: ['god of wine, the grapevine, fertility, festivity, ecstasy, madness, and resurrection', 'patron god of arts and theater'],
        father: 'Zeus',
        mother: 'Semele (mortal Theban princess)',
        symbols: ['grapevine', 'ivy', 'cup', 'tiger', 'leopard', 'dolphin', 'goat', 'pinecone'],
        spouce: true,
        spouceName: 'Aridne (Cretan princess)',
    }
]

function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards');

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //style the GB color of the cards based on person
        let backgroundColor
        switch(member.name.toLowerCase()) {
            case 'zeus':
                backgroundColor = 'yellow'
                break
            case 'hera':
                backgroundColor = 'gray'
                break
            case 'poseidon':
                backgroundColor = 'blue'
                break
            case 'demeter':
                backgroundColor = 'red'
                break
            case 'athena':
                backgroundColor = 'gray'
                break
            case 'hephaestus':
                backgroundColor = 'orange'
                break
            case 'ares':
                backgroundColor = 'red'
                break
            case 'aphrodite':
                backgroundColor = 'pink'
                break
            case 'artemis':
                backgroundColor = 'gray'
                break
            case 'apollo':
                backgroundColor = 'yellow'
                break
            case 'hermes':
                backgroundColor = 'orange'
                break
            case 'dionysus':
                backgroundColor = 'purple'
                break
            default:
                backgroundColor = 'gray'
        }
        card.style.backgroundColor = backgroundColor

        card.innerHTML=`
            <div class="card">
                <div   class = "card-header">
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