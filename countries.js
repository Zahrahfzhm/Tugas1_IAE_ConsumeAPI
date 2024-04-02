async function fetchCountriesData() {
    try {
        const response = await fetch('https://apiv3.apifootball.com/?action=get_countries&APIkey=9c3221435a90955c2255d2b0bcdd80f3caf29d2df74fd6786a1120f08de4e77d');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fillCountriesTable() {
    const countriesBody = document.getElementById('countries-body');
    const data = await fetchCountriesData();

    if (data) {
       
        data.forEach(country => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${country.country_id}</td>
                <td>${country.country_name}</td>
                <td><img src="${country.country_logo}" class="country-logo" width=40px height=40px> ${country.country_name}</td>
            `;
            countriesBody.appendChild(row);
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    fillCountriesTable();
});