const form = document.getElementById('countryForm');
const countryNameInput = document.getElementById('countryName');
const countryDataDiv = document.getElementById('countryData');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const countryName = countryNameInput.value;

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();

        // Verificar se a resposta possui dados de país
        if (response.ok && data.length > 0) {
            const country = data[0];
            const countryInfo = `
                <h2>${country.name.common}</h2>
                <p>Capital: ${country.capital}</p>
                <p>População: ${country.population}</p>
                <p>Região: ${country.region}</p>
                <!-- Outros dados que você deseja exibir -->
            `;
            countryDataDiv.innerHTML = countryInfo;
        } else {
            countryDataDiv.innerHTML = '<p>País não encontrado.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        countryDataDiv.innerHTML = '<p>Erro ao buscar dados.</p>';
    }
});