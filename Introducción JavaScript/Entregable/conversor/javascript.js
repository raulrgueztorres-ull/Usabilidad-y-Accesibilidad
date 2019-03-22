var input = "";
var output = "";

var val = {"values":[{name: "eur", rate: {usd: 1.13923, bgp: 0.86649}}, { name: "usd", rate: {eur: 0.87768, bgp: 0.76056 }}, { name: "bgp", rate: {eur: 1.15379, usd: 1.31458}}]};
var sym = {"symbols": [ {type: {eur: "€", usd: "$", bgp: "£"}}]};

function selector_in(from)
{
    input = from;
}

function selector_out(to)
{
    output = to;
}

function conversor()
{
    var number = document.getElementById("box").value;
    for(var i = 0; i < val.values.length; ++i)
    {
        if(val.values[i].name == input)
        {
            number = val.values[i].rate[output] * number;
            console.log(number.toFixed(2));
            document.getElementById("box").value = number.toFixed(2) + " " + sym.symbols[0].type[output];
        }
    }
    
}