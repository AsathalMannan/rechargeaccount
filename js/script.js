// DATE
var today = new Date();
var date = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

// SALES CALCULATOR
var total; 
var row_count;
// $('#attable tr:not(:first-child, :last-child)').on("DOMSubtreeModified", function(){ 
//     console.log('entered event dom');
//     var amount = document.querySelectorAll('#attable .amount');
//     total = 0;
//     for (var i = 0; i < amount.length; i++)
//     {
//         total += parseInt(amount[i].innerText);
//     }
// })
// console.log(total);
// document.getElementById('atcalcsales').innerHTML = total;

var list = document.getElementById("attable");

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
            console.log("mutation!", mutation);
            var amount = document.querySelectorAll('#attable .amount');
            total = 0;
            for (var i = 0; i < amount.length; i++)
            {
                total += parseInt(amount[i].innerText);
            }
            
        }
    });
});
document.getElementById('atcalcsales').innerHTML = total;

observer.observe(list, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
});

// LOAD STOCK
$('#loadstock').click(function(){
    var loadstock_carrier = document.getElementById("loadstock_carrier").value;
    var loadstock_amount = document.getElementById('loadstock_amount').value;
    var inserthtml = "<tr class=\"htmlentry\"><td><span class=\"lnr lnr-circle-minus delete-row\" ></span></td><td>"+date+"-"+month+"</td><td>Stock Purchase</td><td class=\"amount\">"+loadstock_amount+"</td></tr>";
    if (loadstock_carrier == "airtel") {
        $(inserthtml).insertAfter($("#athtmlentry"));
    }
    else if (loadstock_carrier == "jio") {
        $(inserthtml).insertAfter($("#jiohtmlentry"));
    }
    else if (loadstock_carrier == "vodafone") {
        $(inserthtml).insertAfter($("#vohtmlentry"));
    }
    else if (loadstock_carrier == "idea") {
        $(inserthtml).insertAfter($("#idhtmlentry"));
    }
    else if (loadstock_carrier == "bsnl") {
        $(inserthtml).insertAfter($("#bsnlhtmlentry"));
    }
    else if (loadstock_carrier == "multi") {
        $(inserthtml).insertAfter($("#multihtmlentry"));
    }
})

// CURRENT BALANCE
$('#currentbalance').click(function(){
    var balance_carrier = document.getElementById("balance_carrier").value;
    var balance_amount = document.getElementById('balance_amount').value;
    console.log(balance_amount);
    if (balance_carrier == "airtel") {
        document.querySelector("#balance_at").innerHTML = balance_amount;
    }
    else if (balance_carrier == "jio") {
        document.querySelector("#balance_jio").innerHTML = balance_amount;
    }
    else if (balance_carrier == "vodafone") {
        document.querySelector("#balance_vo").innerHTML = balance_amount;
    }
    else if (balance_carrier == "idea") {
        document.querySelector("#balance_id").innerHTML = balance_amount;
    }
    else if (balance_carrier == "bsnl") {
        document.querySelector("#balance_bsnl").innerHTML = balance_amount;
    }
    else if (balance_carrier == "multi") {
        document.querySelector("#balance_multi").innerHTML = balance_amount;
    }
})

// DELETE STOCK
// function deleterow() {
//     $("table").find('.delete-row').each(function(){
//         $(this).parents('tr').remove();
//     })
// };

$("table").on('click', '.delete-row', function() {
    $(this).parents('tr').remove();
})

// CASH IN LEDGER
var totalcash, tcashcalc, c2000ans, c500ans, c200ans, c100ans, c50ans, c20ans, c10ans, c10cans, c5ans, c2ans, c1ans = 0;
$(":input").bind("keyup change", function(e) {
    document.querySelector('#c2000ans').innerHTML = c2000ans = 2000 * document.querySelector('#c2000').value;
    document.querySelector('#c500ans').innerHTML = c500ans = 500 * document.querySelector('#c500').value;
    document.querySelector('#c200ans').innerHTML = c200ans = 200 * document.querySelector('#c200').value;
    document.querySelector('#c100ans').innerHTML = c100ans = 100 * document.querySelector('#c100').value;
    document.querySelector('#c50ans').innerHTML = c50ans = 50 * document.querySelector('#c50').value;
    document.querySelector('#c20ans').innerHTML = c20ans = 20 * document.querySelector('#c20').value;
    document.querySelector('#c10ans').innerHTML = c10ans = 10 * document.querySelector('#c10').value;
    document.querySelector('#c10cans').innerHTML = c10cans = 10 * document.querySelector('#c10c').value;
    document.querySelector('#c5ans').innerHTML = c5ans = 5 * document.querySelector('#c5').value;
    document.querySelector('#c2ans').innerHTML = c2ans = 2 * document.querySelector('#c2').value;
    document.querySelector('#c1ans').innerHTML = c1ans = 1 * document.querySelector('#c1').value;
    tcashcalc = c2000ans + c500ans + c200ans + c100ans + c50ans + c20ans + c10ans + c10cans + c5ans + c2ans + c1ans;
    totalcash = document.querySelectorAll('#tcashcalc');
    for (var i = 0; i < totalcash.length; i++) {
        totalcash[i].innerHTML = tcashcalc;
    }
    
})

// SALES CALCULATOR
var expcash, totalsales, lastcash, atsales, jiosales, vosales, idsales, bsnlsales, multisales = 0;
$(".sales").change(function(e) {
    lastcash = document.querySelector('#lastcash');
    document.querySelector('#atsales').innerHTML = atsales = document.querySelector('#atcalcsales').value;
    document.querySelector('#jiosales').innerHTML = jiosales = document.querySelector('#jiocalcsales').value;
    document.querySelector('#vosales').innerHTML = vosales = document.querySelector('#vocalcsales').value;
    document.querySelector('#idsales').innerHTML = idsales = document.querySelector('#idcalcsales').value;
    document.querySelector('#bsnlsales').innerHTML = bsnlsales = document.querySelector('#bsnlcalcsales').value;
    document.querySelector('#multisales').innerHTML = multisales = document.querySelector('#multicalcsales').value;
    totalsales = atsales + jiosales + vosales + idsales + bsnlsales + multisales;
    expcash = totalsales + lastcash;
    document.querySelector('#expcash').innerHTML = expcash;
});