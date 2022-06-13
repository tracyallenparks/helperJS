function get_rnd_num_frequency_json(data) {
    //for JSON array data = {item:frequency,item:frequency,item:frequency...}
    const arr=[];
    for (let entry in data) {
        for (let i=0; i<data[entry]; i++) {
            arr.push(entry);
        }
    }
    return () => arr[Math.floor(Math.random()*arr.length)];
}
function get_rnd_num_frequency_arr(data) {
    //for an array data = [{item:value,frequency:value},{item:value,frequency:value},{item:value,frequency:value}...]
    //if no frequency is specified, it is assumed to be 1
    const arr=[];
    data.forEach(entry => {
        for (let i=0; i<(entry.frequency||1); i++) {
            arr.push(entry);
        }
    });
    return arr[Math.floor(Math.random()*arr.length)];
}