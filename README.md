# Bengali-Alphabet

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lifeparticle/Bengali-Alphabet/issues)

1. There are a total `50` letters, `11` vowels (স্বরবর্ণ) and `39` consonants (ব্যঞ্জনবর্ণ)

2. The Unicode block for Bengali is `U+0980 – U+09FF (2432-2559) (128 code points)`

   Assigned: `96` code points

   Unused: `32` reserved code points

   Reserved code points are available for use, but are not yet assigned.


3. `11` Vowels

   Unicode range: `U+0985 - U+098B (2437 - 2443)`, `U+098F - U+0990 (2447 - 2448)` and `U+0993 - U+0994 (2451 - 2452)`

   ```
   'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'
   ```

   ```
   "\u0985", "\u0986", "\u0987", "\u0988", "\u0989", "\u098A", "\u098B", "\u098F", "\u0990", "\u0993", "\u0994"
   ```


4.  `39` Consonants

    Unicode range: `U+0995 - U+09A8 (2453 - 2472)`, `U+09AA - U+09B0	(2474 - 2480)`, `U+09B2	(2482)`, `U+09B6 - U+09B9	(2486 - 2489)`, `U+09DC - U+09DD (2524 - 2525)`, `U+09DF (2527)`, `U+09CE (2510`), `U+0981 - U+0983	(2433 - 2435)`

    ```
    'ক', 'খ', 'গ', 'ঘ', 'ঙ',
    'চ', 'ছ', 'জ', 'ঝ', 'ঞ',
    'ট', 'ঠ', 'ড', 'ঢ', 'ণ',
    'ত', 'থ', 'দ', 'ধ', 'ন',
    'প', 'ফ', 'ব', 'ভ', 'ম',
    'য', 'র', 'ল', 'শ', 'ষ',
    'স', 'হ', 'ড়', 'ঢ়', 'য়',
    'ৎ', 'ং', 'ঃ', '‍ঁ'
    ```

    ```
    "\u0995", "\u0996", "\u0997", "\u0998", "\u0999",
    "\u099A", "\u099B", "\u099C", "\u099D", "\u099E",
    "\u099F", "\u09A0", "\u09A1", "\u09A2", "\u09A3",
    "\u09A4", "\u09A5", "\u09A6", "\u09A7", "\u09A8",
    "\u09AA", "\u09AB", "\u09AC", "\u09AD", "\u09AE",
    "\u09AF", "\u09B0", "\u09B2", "\u09B6", "\u09B7",
    "\u09B8", "\u09B9", "\u09DC", "\u09DD", "\u09DF",
    "\u09CE", "\u0982", "\u0983", "\u0981"
    ```

5. Digits

   Unicode range: `U+09E6 - U+09EF (2534 - 2543)`

   ```
   ০
   ১
   ২
   ৩
   ৪
   ৫
   ৬
   ৭
   ৮
   ৯
   ```

   ```
   "\u09E6",
   "\u09E7",
   "\u09E8",
   "\u09E9",
   "\u09EA",
   "\u09EB",
   "\u09EC",
   "\u09ED",
   "\u09EE",
   "\u09EF"
   ```

6. All Unicode ranges (Ruby implementation)

   ```ruby
   [*2437..2443, *2447..2448, *2451..2452].map {|c| c.chr(Encoding::UTF_8)}

   [*2534..2543].map {|c| c.chr(Encoding::UTF_8)}

   [*2453..2472, *2474..2480, 2482, *2486..2489, *2524..2525, 2527, 2510, *2433..2435].map {|c| c.chr(Encoding::UTF_8)}
   ```

   ```ruby
   [*2437..2443, *2447..2448, *2451..2452, *2534..2543, *2453..2472, *2474..2480, 2482, *2486..2489, *2524..2525, 2527, 2510, *2433..2435].map {|c| c.chr(Encoding::UTF_8)}
   ```

7. Vowel Diacritics in Bengali



Resources
============
1. [Diacritic](https://en.wikipedia.org/wiki/Diacritic)
2. [Vowel Diacritics in Bengali](https://en.wikibooks.org/wiki/Bengali/Script/Diacritics)
3. [Bengali.AI Handwritten Grapheme Classification](https://tongxinw.github.io/bengali.ai/)
4. [Grapheme](https://en.wikipedia.org/wiki/Grapheme)
5. [Bengali.ai](https://bengali.ai/)
6. [Unicode](https://www.unicode.org/charts/PDF/U0980.pdf)

Bug Reports and Feature Requests
============
Please create an issue with as much information you can. Thank you.

Author
============
Mahbub Zaman (https://mahbub.ninja)

License
============
MIT License
