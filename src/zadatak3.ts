import * as readline from 'readline';

function smallestDivisor(nums: number[], threshold: number): number {
    const calculateSum = (divisor: number): number => {
        return nums.reduce((sum, num) => sum + Math.ceil(num / divisor), 0);
    };

    let a = 1;
    let b = Math.max(...nums);

    while (a < b) {
        const mid = Math.floor((a + b) / 2);
        const sum = calculateSum(mid);

        if (sum > threshold) {
            a = mid + 1;
        } else {
            b = mid;
        }
    }

    return a;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function getUserInputs(): Promise<{ nums: number[]; threshold: number }> {
    const numsString = await questionAsync('Enter array of integers (comma-separated): ');
    const thresholdString = await questionAsync('Enter the threshold: ');

    const nums = numsString.split(',').map(Number);
    const threshold = parseInt(thresholdString, 10);

    return { nums, threshold };
}

async function main() {
    const { nums, threshold } = await getUserInputs();
    const result = smallestDivisor(nums, threshold);

    console.log(`The smallest divisor is: ${result}`);

    rl.close();
}

main();
