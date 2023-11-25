import readline from 'readline';

let lo = 0;
let hi = 0;
let k = 0;

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r2.question('Enter low:', (low: string) => {
    lo = Number(low);

    r2.question('Enter high:', (high: string) => {
        hi = Number(high);

        r2.question('Enter limit:', (limit: string) => {
            k = Number(limit);

            const result = maxXor(lo, hi, k);

            console.log(`The maximum XOR value for ${lo} ≤ a < b ≤ ${hi} and a ⊕ b ≤ ${k} is: ${result}`);

            r2.close();
        });
    });
});


function maxXor(lo: number, hi: number, k: number): number {
    let maxXorValue = 0;

    for (let a = lo; a <= hi; a++) {
        for (let b = a + 1; b <= hi; b++) {
            const currentXor = a ^ b;
            if (currentXor > maxXorValue && currentXor <= k) {
                maxXorValue = currentXor;
            }
        }
    }

    return maxXorValue;
}
