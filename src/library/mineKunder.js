export let mineKunder = {
    container: $('#displayMyClients'),
    displayItems: function(data) {
        // Clear table
        this.container.html('');
        // Sort array by company name
        data.sort((a, b) => (a.navn > b.navn) ? 1 : -1)
        // Display all items in array
        for (let i = 0; i < data.length; i++) {
            const newTr = $('<tr></tr>'),
                buttonTd = $('<td></td>'),
                editButton = $('<button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target=".client-details__modal">Rediger</button>');

            newTr.html(`
                <th scope="row">${data[i].navn}</th>
                <td>${data[i].organisasjonsnummer}</td>
                <td>${data[i].forretningsadresse.postnummer} ${data[i].forretningsadresse.poststed}</td>
            `);
            // Add event listener to button
            editButton.click(function() {
                
            });
            // Append button to each item
            buttonTd.append(editButton);
            newTr.append(buttonTd);
            mineKunder.container.append(newTr);
        }
    },
    load: function() {
        // Load existing clients into main table
        if (this.data.length > 0) {
            this.displayItems(this.data)
        } else {
            this.container.html(`
                <tr>
                    <td colspan="4">Ingen kunder å vise. Trykk på 'Legg til kunde' for å begynne.</td>
                </tr>
            `);
        }
        
    },
    add: function(item) {
        // Add item to array
        this.data.push(item);
        // Update 'mine kunder' table on main page
        this.displayItems(this.data)

    },
    data: [
        // {"organisasjonsnummer":"914637368","navn":"APPELONG","organisasjonsform":{"kode":"ENK","beskrivelse":"Enkeltpersonforetak","_links":{"self":{"href":"https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/ENK"}}},"hjemmeside":"www.appelong.no","registreringsdatoEnhetsregisteret":"2014-12-19","registrertIMvaregisteret":true,"naeringskode1":{"beskrivelse":"Interiørarkitekt, interiørdesign og interiørkonsulentvirksomhet","kode":"74.103"},"antallAnsatte":0,"forretningsadresse":{"land":"Norge","landkode":"NO","postnummer":"0368","poststed":"OSLO","adresse":["Jacob Aalls gate 15C"],"kommune":"OSLO","kommunenummer":"0301"},"institusjonellSektorkode":{"kode":"8200","beskrivelse":"Personlig næringsdrivende"},"registrertIForetaksregisteret":true,"registrertIStiftelsesregisteret":false,"registrertIFrivillighetsregisteret":false,"konkurs":false,"underAvvikling":false,"underTvangsavviklingEllerTvangsopplosning":false,"maalform":"Bokmål","_links":{"self":{"href":"https://data.brreg.no/enhetsregisteret/api/enheter/914637368"}}},
        // {"organisasjonsnummer":"924202467","navn":"APPEVENT AS","organisasjonsform":{"kode":"AS","beskrivelse":"Aksjeselskap","_links":{"self":{"href":"https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"}}},"registreringsdatoEnhetsregisteret":"2019-12-16","registrertIMvaregisteret":false,"naeringskode1":{"beskrivelse":"Konsulentvirksomhet tilknyttet informasjonsteknologi","kode":"62.020"},"antallAnsatte":0,"forretningsadresse":{"land":"Norge","landkode":"NO","postnummer":"4280","poststed":"SKUDENESHAVN","adresse":["Grødheimvegen 14"],"kommune":"KARMØY","kommunenummer":"1149"},"stiftelsesdato":"2019-12-03","institusjonellSektorkode":{"kode":"2100","beskrivelse":"Private aksjeselskaper mv."},"registrertIForetaksregisteret":true,"registrertIStiftelsesregisteret":false,"registrertIFrivillighetsregisteret":false,"konkurs":false,"underAvvikling":false,"underTvangsavviklingEllerTvangsopplosning":false,"maalform":"Bokmål","_links":{"self":{"href":"https://data.brreg.no/enhetsregisteret/api/enheter/924202467"}}}
    ]
}