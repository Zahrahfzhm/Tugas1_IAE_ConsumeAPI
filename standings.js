async function fetchStandingsData() {
    try {
        const response = await fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=207&APIkey=9c3221435a90955c2255d2b0bcdd80f3caf29d2df74fd6786a1120f08de4e77d');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fillStandingsTable() {
    const standingsBody = document.getElementById('standings-body');
    const data = await fetchStandingsData();

    if (data) {
       
        data.forEach(team => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${team.overall_league_position}</td>
                <td><img src="${team.team_badge}" class="team-logo" width=40px height=40px> ${team.team_name}</td>
                <td>${team.overall_league_payed}</td>
                <td>${team.overall_league_W}</td>
                <td>${team.overall_league_D}</td>
                <td>${team.overall_league_L}</td>
                <td>${team.overall_league_GF - team.overall_league_GA}</td>
                <td>${team.overall_league_PTS}</td>
            `;
            standingsBody.appendChild(row);
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    fillStandingsTable();
});