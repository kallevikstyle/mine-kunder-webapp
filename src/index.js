// import "./sass/index.scss";
import { searchBrreg } from "./library/searchBrreg.js";



(function() {
    // Start search in Brønnøysundregisteret
    searchBrreg.searchBtn.click(function() {
        // Clear results table
        searchBrreg.searchResults.html('');
        // Start new search
        searchBrreg.start();
    });

})();