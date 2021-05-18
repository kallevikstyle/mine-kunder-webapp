import { mineKunder } from "./library/mineKunder.js";
import { searchBrreg } from "./library/searchBrreg.js";



(function() {
    // Load clients into table on main page
    mineKunder.load();
    // Start search in Brønnøysundregisteret
    searchBrreg.searchBtn.click(function() {
        // Clear results table
        searchBrreg.searchResults.html('');
        // Start new search
        searchBrreg.start();

        
    });

})();