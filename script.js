//team member data
const teamMembers = [
    {
        name: 'Zeus',
        romanName: 'Jupiter',
        titleDomain: ['King of the gods', 'Ruler of Olympus', 'god of the sky, lightning, thunder, law, order, and justice'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['thunderbolt', 'eagle', 'oak tree', 'bull', 'scepter', 'scales'],
        spouseName: 'Hera',
    },
    {
        name: 'Hera',
        romanName: 'Juno',
        titleDomain: ['Queen of the gods', 'goddess of marriage, women, childbirth, and family'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['peacock', 'cuckoo', 'cow'],
        spouseName: 'Zeus',
    },
    {
        name: 'Poseidon',
        romanName: 'Neptune',
        titleDomain: ['Earthshaker', 'god of the seas, water, storms, hurricanes, earthquakes, and horses'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['trident', 'horse', 'bull', 'dolphin'],
        spouseName: 'Amphitrite (Nereid)',
    },
    {
        name: 'Demeter',
        romanName: 'Ceres',
        titleDomain: ['goddess of harest, fertility, agriculture, nature, and the seasons'],
        father: 'Cronus',
        mother: 'Rhea',
        symbols: ['poppy', 'wheat', 'torch', 'cornucopia', 'pig'],
        spouseName: 'N/A',
    },
    {
        name: 'Athena',
        romanName: 'Minerva',
        titleDomain: ['goddess of wisdom, handicraft, and warfare'],
        father: 'Zeus',
        mother: 'Metis (Oceanid)',
        symbols: ['owl', 'olive tree'],
        spouseName: 'N/A',
    },
    {
        name: 'Hephaestus',
        romanName: 'Vulcan',
        titleDomain: ['Master blacksmith and craftsman of the gods', 'god of the forge, craftsmanship, invention, fire, and volcanoes'],
        father: 'Zeus (or N/A - born of asexual reproduction)',
        mother: 'Hera',
        symbols: ['fire', 'anvil', 'axe', 'donkey', 'hammer', 'tongs', 'quail'],
        spouseName: 'Aphrodite',
    },
    {
        name: 'Ares',
        romanName: 'Mars',
        titleDomain: ['god of war, violence, bloodshed, and manly virtues'],
        father: 'Zeus',
        mother: 'Hera',
        symbols: ['boar', 'serpent', 'dog', 'vulture', 'spear', 'sheild'],
        spouseName: 'N/A (in a relationship w/ Aphrodite)',
    },
    {
        name: 'Aphrodite',
        romanName: 'Venus',
        titleDomain: ['goddess of love, pleasure, passion, procreation, fertility, beauty, and desire'],
        father: 'Zeus',
        mother: 'Dione (Oceanid or Titaness)',
        symbols: ['dove', 'bird', 'apple', 'bee', 'swan', 'myrtle', 'rose'],
        spouseName: 'Hephaestus',
    },
    {
        name: 'Artemis',
        romanName: 'Diana',
        titleDomain: ['goddess of the hunt, the wilderness, virginity, the moon, archery, childbirth, protection, and plague'],
        father: 'Zeus',
        mother: 'Leto',
        symbols: ['the moon', 'horse', 'deer', 'hound', 'she-bear', 'cypress tree', 'bow and arrow'],
        spouseName: 'N/A',
    },
    {
        name: 'Apollo',
        romanName: 'Apollo',
        titleDomain: ['god of the sun, light, prophecy, philosophy, archery, truth, inspiration, poetry, music, arts, manly beauty, medicine, healing, and plague'],
        father: 'Zeus',
        mother: 'Leto',
        symbols: ['lyre', 'raven', 'swan', 'wolf', 'bow and arrow'],
        spouseName: 'N/A',
    },
    {
        name: 'Hermes',
        romanName: 'Mercury',
        titleDomain: ['Messenger of the gods', 'Guide of dead souls', 'god of travel, commerce, communication, borders, eloquence, diplomacy, thieves, and games'],
        father: 'Zeus',
        mother: 'Maia (Nymph)',
        symbols: ['the caduceus (his staff with 2 snakes on it)', 'winged sandals', 'stork', 'tortoise'],
        spouseName: 'N/A',
    },
    {
        name: 'Dionysus',
        romanName: 'Bacchus',
        titleDomain: ['god of wine, the grapevine, fertility, festivity, ecstasy, madness, and resurrection', 'patron god of arts and theater'],
        father: 'Zeus',
        mother: 'Semele (mortal Theban princess)',
        symbols: ['grapevine', 'ivy', 'cup', 'tiger', 'leopard', 'dolphin', 'goat', 'pinecone'],
        spouseName: 'Aridne (Cretan princess)',
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
                backgroundColor = '#aaaaaa'
                break
            case 'poseidon':
                backgroundColor = '#0096c7'
                break
            case 'demeter':
                backgroundColor = '#87ab69'
                break
            case 'athena':
                backgroundColor = 'gray'
                break
            case 'hephaestus':
                backgroundColor = '#d8863b'
                break
            case 'ares':
                backgroundColor = '#9b111e'
                break
            case 'aphrodite':
                backgroundColor = '#dea5a4'
                break
            case 'artemis':
                backgroundColor = 'silver'
                break
            case 'apollo':
                backgroundColor = 'gold'
                break
            case 'hermes':
                backgroundColor = '#e1914a'
                break
            case 'dionysus':
                backgroundColor = '#805b87'
                break
            default:
                backgroundColor = 'gray'
        }
        card.style.backgroundColor = backgroundColor

         //Create a list of titleDomain with <li> tags
    const titleDomainList = member.titleDomain
    .map(titleDomain => `<li> ${titleDomain} </li>`).join('')

        //Create a list of symbols with <li> tags
    const symbolsList = member.symbols
    .map(symbols => `<li> ${symbols} </li>`).join('')

        card.innerHTML=`
            <div class="card">
                <div   class = "card-header">
                    ${member.name}
                </div>
                <div class="card-body" style = "background-color:${backgroundColor};">
                    <p><strong>Roman Name:</strong> ${member.romanName}</p>
                    <p><strong>Title & Domain:</strong>
                        <ul>
                            ${titleDomainList}
                        </ul>
                    </p>
                    <p><strong>Father:</strong> ${member.father}</p>
                    <p><strong>Mother:</strong> ${member.mother}</p>
                    <p><strong>Symbols:</strong>
                        <ul>
                            ${symbolsList}
                        </ul>
                    </p>
                    <p><strong>Spouse Name:</strong> ${member.spouseName}</p>
                </div>
            </div>

        `

            
    teamCardsContainer.appendChild(card)
    });
}

window.onload = generateTeamCards()