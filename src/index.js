import { mineKunder } from "./library/mineKunder.js";
import { searchBrreg } from "./library/searchBrreg.js";

(function() {
    // Load clients into table on main page
    mineKunder.load();

    // Start search in Brønnøysundregisteret (search button)
    searchBrreg.searchBtn.click(function() {
        // Clear results table
        searchBrreg.searchResults.html('');
        // Start new search
        searchBrreg.start();
    });

    // Start search in Brønnøysundregisteret (ENTER key)
    searchBrreg.searchField.keyup(function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            // Clear results table
            searchBrreg.searchResults.html('');
            // Start new search
            searchBrreg.start();
        }
    });
})();