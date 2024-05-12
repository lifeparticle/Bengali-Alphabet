const encode = (list: number[]): void => {
    const arr: string[] = [];
    for (let i = 0; i < list.length; i++) {
        let a: string = String.fromCharCode(list[i]);
        arr.push(a);
    }
    console.log(arr);
}

// Vowels (স্বরবর্ণ)
const vowels: number[] = [2437, 2438, 2439, 2440, 2441, 2442, 2443, 2447, 2448, 2451, 2452];

// Numbers (সংখ্যা)
const numbers: number[] = [2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543];

// Consonants (ব্যঞ্জনবর্ণ)
const consonants: number[] = [2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2482, 2486, 2487, 2488, 2489, 2524, 2525, 2527, 2510, 2433, 2434, 2435];

// Vowel Diacritics (কার)
const vowelDiacritics: number[] = [2494, 2495, 2496, 2497, 2498, 2499, 2503, 2504, 2507, 2508];

// Vowels + Numbers + Consonants + Vowel Diacritics
const all: number[] = [...vowels, ...numbers, ...consonants, ...vowelDiacritics];

encode(vowels);
encode(numbers);
encode(consonants);
encode(vowelDiacritics);
encode(all);
