import axios from "axios";
import { mineKunder } from "./mineKunder.js";

export let searchBrreg =  {
    apiUrl: 'https://data.brreg.no/enhetsregisteret/api/enheter',
    searchField: $('#searchBrreg'),
    searchBtn: $('#searchBtn'),
    searchResults: $('#searchResults'),
    showingResults: $('#showingResults'),
    getQuery: function() {
        return this.searchField.val();
    },
    loadApi: async function(query) {
        try {
            const response = await axios.get(this.apiUrl + query),
                totalElements = response.data.page.totalElements;
            
                // Display results
                if (response.data.page.totalElements === 0) {
                    this.searchResults.html(`
                    <tr>
                        <td colspan="4">Ingen resultater å vise.</td>
                    </tr>
                `);
                } else {
                    this.displayResults(response.data._embedded.enheter, totalElements, query);
                }

        }
        catch (err) {
            console.log("There was an error loading the API")
            this.searchResults.html(`
                <tr>
                    <td colspan="4">Det oppstod en feil ved lasting av data fra Enhetsregisteret. Vennligst prøv igjen.</td>
                </tr>
            `);
        }
    },
    displayResults: function(data, totalElements, query) {
        // Display amount of items found
        if (totalElements > data.length) {
            const showAll = $('<a href="#">(Vis alle)</a>');

            this.showingResults.html(`
                Viser ${data.length} av ${totalElements} resultater.
            `);
            showAll.click(function() {
                // Show all results
                query += `&size=${totalElements}`;
                searchBrreg.loadApi(query);
            });
            this.showingResults.append(showAll);
        } else {
            this.showingResults.html(`
                Fant ${data.length} resultater
            `);
        }
        // Display each item in array
        for (let i = 0; i < data.length; i++) {
            const newTr = $('<tr></tr>'),
                buttonTd = $('<td></td>'),
                addButton = $('<button class="btn btn-sm btn-primary">Legg til</button>');
            // Create and append new table row
            try {
                newTr.html(`
                <th scope="row">${data[i].navn}</th>
                <td>${data[i].organisasjonsnummer}</td>
                <td>${data[i].forretningsadresse.postnummer} ${data[i].forretningsadresse.poststed}</td>
                    `);

                // Add event listener to button
                addButton.click(function() {
                    // Add item to 'mine kunder' object
                    mineKunder.add(data[i]);
                });
                // Append button to each item
                buttonTd.append(addButton);
                newTr.append(buttonTd);
                this.searchResults.append(newTr);
            }
            catch (err) {
                console.log(err + `Fikk ikke hentet inn informasjon om ${data[i].navn}`);
            } 
        }
    },
    start: async function() {
        // Construct API query
        const query = `?navn=${this.getQuery()}`;
        
        this.loadApi(query);
    }
}