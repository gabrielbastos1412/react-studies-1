export function timeToSeconds(tempo:string){
    const [h = '0', m = '0', s = '0'] = tempo.split(":");

    const H = Number(h) * 3600;
    const M = Number(m)* 60;
    const S = Number(s);

    return H+M+S;
}