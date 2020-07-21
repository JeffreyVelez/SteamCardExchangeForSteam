// ==UserScript==
// @name         SteamCardExchange
// @version      1.0.0
// @description  Add SteamCardExchange Links to Badges Page For Each Badge Linked
// @author       Circuit
// @match        https://steamcommunity.com/id/*/badges
// @match        https://steamcommunity.com/id/*/badges/
// @grant        none
// ==/UserScript==


const badgerows = document.querySelectorAll('.badge_row.is_link');
badgerows.forEach(badge => {
    var splitted = badge.querySelector('a').href.split('/');

    var id = splitted[6];
   //  console.log(id);

    var earnCard = badge.querySelector('.badge_title_stats_drops');
    var element = badge.querySelector('.badge_title_stats_playtime');
    var sce = document.createElement('div');
    var a = document.createElement('a');
    var linkText = document.createTextNode("[  Steam Card Exchange  ]");
    a.classList = 'whiteLink how_to_get_card_drops';
    a.appendChild(linkText);
    a.target='_blank'
    a.href = "https://www.steamcardexchange.net/index.php?inventorygame-appid-" + id;
    sce.appendChild(a);

     element.append(sce);

     element.appendChild(earnCard)
    // sce.('how_to_get_card_drops_ctn')
     // document.querySelectorAll('how_to_get_card_drops_ctn')

     /*
     function removeElement(how_to_get_card_drops_ctn) {
        // Removes an element from the document
        var element = document.querySelectorAll('how_to_get_card_drops_ctn');
        element.parentNode.removeChild(element);
    } */

   // element.parentNode.removeChild(element);
    //element.classList.remove('progress_info_bold')
        //eliminar este badge_title_stats_drops
    earnCard.parentNode.removeChild(earnCard);

    });