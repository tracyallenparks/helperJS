function convert_to_gold(copper){
    return (copper/100);
}
function display_price(price){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function price_seller(rarity,advanced){
    let result;
    if(!advanced){
        switch(true){
            case rarity === 0:
                result = (roll(6)+1)*(10*100);
                break;
            case rarity === 1:
                result = roll(6)*(100*100);
                break;
            case rarity === 2:
                result = (roll(10)+roll(10))*(1000*100);
                break;
            case rarity === 3:
                result = (roll(4)+1)*(10000*100);
                break
            case rarity >= 4:
                result = (roll(6)+roll(6))*(25000*100);
                break;
        }
    } else {
        switch(true){
            case rarity === 0:
                result = roll((60*100),(20*100));
                break;
            case rarity === 1:
                result = roll((600*100),(100*100));
                break;
            case rarity === 2:
                result = roll((20000*100),(2000*100));
                break;
            case rarity === 3:
                result = roll((50000*100),(20000*100));
                break
            case rarity >= 4:
                result = roll((300000*100),(50000*100)) * ((rarity-4)+1.5);
                break;
        }
    }    
    return result;
}
/* need to work on the buyer so that it works and works with a "shady" modifier

function price_buyer(rarity,shady){
    let result;
    let modifier = 1;
    if(shady){
        modifier = 2;
    }
    if(!advanced){
        switch(true){
            case rarity === 0:
                result = {
                    time: roll(4),
                    price: 100*(selling_magic(roll(100+10)))
                };
                break;
            case rarity === 1:
                result = {
                    time: roll(6),
                    price: (100*(selling_magic(roll(100))))*modifier
                };
                break;
            case rarity === 2:
                result = {
                    time: roll(8),
                    price: (100*(selling_magic(roll(100-10))))*modifier
                };
                break;
            case rarity === 3:
                result = (roll(4)+1)*(10000*100);
                break
            case rarity >= 4:
                result = (roll(6)+roll(6))*(25000*100);
                break;
        }
    }
    return result;
}
function selling_magic(r){
    let result;
    switch(true){
        case r <= 20:
            result = 0.1;
            break;
        case r >= 21 && r <= 40:
            result = 0.25;
            break;
        case r >= 41 && r <= 80:
            result = 0.5;
            break;
        case r >= 81 && r <= 90:
            result = 1;
            break;
        default:
            result = 1.5;
            break;
    }
    return result;
}
*/
function roll(max,min) {
    if(!min){ min=1; }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shop(){
    /*
    return:{
        name:
        proprietor:
        assistants:
        items_common:
        items_magic:
    };
    */
}