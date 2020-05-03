<h1 align="center">Bengali-Alphabet</h1></br>

<p align="center">
<a href="https://github.com/lifeparticle/Bengali-Alphabet/issues"><img alt="contributions welcome" src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/></a>
</p>

Table of Contents
=================
   * [Introduction](#introduction)
   * [Vowels (স্বরবর্ণ)](#vowels-স্বরবর্ণ)
   * [Consonants (ব্যঞ্জনবর্ণ)](#consonants-ব্যঞ্জনবর্ণ)
   * [Numbers (সংখ্যা)](#numbers-সংখ্যা)
   * [Graphem](#graphem)
   * [Diacritics (অণুচিহ্ন)](#diacritics-অণুচিহ্ন)
   * [Vowel Diacritics](#vowel-diacritics)
   * [Consonant Diacritics](#consonant-diacritics)
   * [Conjunctive (যুক্তাক্ষর)](#conjunctive-যুক্তাক্ষর)
   * [All Unicode ranges (Ruby implementation)](#all-unicode-ranges-ruby-implementation)
   * [Resources](#resources)
   * [Bug Reports and Feature Requests](#bug-reports-and-feature-requests)
   * [Author](#author)
   * [License](#license)

Introduction
============
There are a total `50` letters, `11` vowels (স্বরবর্ণ) and `39` consonants (ব্যঞ্জনবর্ণ)

The Unicode block for Bengali is `U+0980 – U+09FF (2432-2559) (128 code points)`

Assigned: `96` code points

Unused: `32` reserved code points

Reserved code points are available for use, but are not yet assigned.

Vowels (স্বরবর্ণ)
============
There are `11` Vowels

```
অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, ঔ
```

Vowels can found at the beginning, at the end, and at the middle of the word.

```অলংকার, আউশ, বই```


Unicode range: `U+0985 - U+098B (2437 - 2443)`, `U+098F - U+0990 (2447 - 2448)` and `U+0993 - U+0994 (2451 - 2452)`
```
"\u0985", "\u0986", "\u0987", "\u0988", "\u0989", "\u098A", "\u098B", "\u098F", "\u0990", "\u0993", "\u0994"
```

Consonants (ব্যঞ্জনবর্ণ)
============
There are `39` Consonants

```
ক, খ, গ, ঘ, ঙ,
চ, ছ, জ, ঝ, ঞ,
ট, ঠ, ড, ঢ, ণ,
ত, থ, দ, ধ, ন,
প, ফ, ব, ভ, ম,
য, র, ল, শ, ষ,
স, হ, ড়, ঢ়, য়,
ৎ, ং, ঃ, ঁ
```

Consonants can found at the beginning, at the end, and at the middle of the word.

```কলম, সকল, আকাশ```

```ং, ঃ, ঁ``` are used after Vowels and before Consonants

Unicode range: `U+0995 - U+09A8 (2453 - 2472)`, `U+09AA - U+09B0	(2474 - 2480)`, `U+09B2	(2482)`, `U+09B6 - U+09B9	(2486 - 2489)`, `U+09DC - U+09DD (2524 - 2525)`, `U+09DF (2527)`, `U+09CE (2510`), `U+0981 - U+0983	(2433 - 2435)`

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

[Consonants](https://github.com/lifeparticle/Bengali-Alphabet/blob/master/consonants.md)

Numbers (সংখ্যা)
============
```
০, ১, ২, ৩, ৪, ৫, ৬, ৭, ৮, ৯
```

Unicode range: `U+09E6 - U+09EF (2534 - 2543)`

```
"\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"
```

Graphem
============
TODO

Diacritics (অণুচিহ্ন)
============
Diacritic is a sign that can be added to a letter to change its pronunciation. A diacritic can be added above or below of      a letter.

`কু` here `ু` is a vowel Diacritic

Vowel Diacritics (কার)
============
There are `10` Vowel Diacritics. There is no short form of অ. 

Unicode range: `U+09BE - U+09C3 (2494 - 2499)`, `U+09C7 - U+09C8 (2503 - 2504)`, `U+09CB - U+09CC (2507 - 2508)`

```
া, ি, ী, ু, ূ, ে, ৈ, ো, ৌ, ৃ
```

```
"\u09BE", "\u09BF", "\u09C0", "\u09C1", "\u09C2", "\u09C7", "\u09C8", "\u09CB", "\u09CC, "\u09C3""
```

[Vowel Diacritics](https://github.com/lifeparticle/Bengali-Alphabet/blob/master/vowel_diacritics.md)

Consonant Diacritics (ফলা)
============
There are `6` Consonant Diacritics

```
য-ফলা, ব-ফলা, ম-ফলা, ণ/ন-ফলা, র-ফলা, ল-ফলা
```

[Consonant Diacritics](https://github.com/lifeparticle/Bengali-Alphabet/blob/master/consonant_diacritics.md)

Conjunctive (যুক্তাক্ষর)
============

```
ক্ক, ক্ট, ক্ট্র, ক্ত, ক্ত্র, ক্ন, ক্ব, ক্ম, ক্য, ক্র, ক্ল, ক্ষ, ক্ষ্ণ, ক্ষ্ব, ক্ষ্ম, ক্ষ্ম্য, ক্ষ্য,
ক্স, খ্য, খ্র, গ্‌ণ, গ্ধ, গ্ধ্য, গ্ধ্র, গ্ন, গ্ন্য, গ্ব, গ্ম, গ্য, গ্র, গ্র্য, গ্ল, ঘ্ন, ঘ্য, ঘ্র, ঙ্ক,
ঙ্‌ক্ত, ঙ্ক্য, ঙ্ক্ষ, ঙ্খ, ঙ্খ্য, ঙ্গ, ঙ্গ্য, ঙ্ঘ, ঙ্ঘ্য, ঙ্ঘ্র, ঙ্ম, চ্চ, চ্ছ, চ্ছ্ব, চ্ছ্র, চ্ঞ, চ্ব,
চ্য, জ্জ, জ্জ্ব, জ্ঝ, জ্ঞ, জ্ব, জ্য, জ্র, ঞ্চ, ঞ্ছ, ঞ্জ, ঞ্ঝ, ট্ট, ট্ব, ট্ম, ট্য, ট্র, ড্ড, ড্ব,
ড্ম, ড্য, ড্র, ড়্গ, ঢ্য, ঢ্র, ণ্ট, ণ্ঠ, ণ্ঠ্য, ণ্ড, ণ্ড্য, ণ্ড্র, ণ্ঢ, ণ্ণ, ণ্ব, ণ্ম, ণ্য, ৎক, ৎখ,
ত্ত, ত্ত্র, ত্ত্ব, ত্ত্য, ত্থ, ত্ন, ৎপ, ত্ব, ত্ম, ত্ম্য, ত্য, ত্র, ত্র্য, ৎল, ৎস, থ্ব, থ্য, থ্র,
দ্গ, দ্ঘ, দ্দ, দ্দ্ব, দ্ধ, দ্ব, দ্ভ, দ্ভ্র, দ্ম, দ্য, দ্র, দ্র্য, ধ্ন, ধ্ব, ধ্ম, ধ্য, ধ্র, ন্ট, ন্ট্র, ন্ঠ,
ন্ড, ন্ড্র, ন্ত, ন্ত্ব, ন্ত্য, ন্ত্র, ন্ত্র্য, ন্থ, ন্থ্র, ন্দ, ন্দ্য, ন্দ্ব, ন্দ্র, ন্ধ, ন্ধ্য, ন্ধ্র, ন্ন,
ন্ব, ন্ম, ন্য, প্ট, প্ত, প্ন, প্প, প্য, প্র, প্র্য, প্ল, প্স, ফ্র, ফ্ল, ব্জ, ব্দ, ব্ধ, ব্ব, ব্য, ব্র,
ব্ল, ভ্ব, ভ্য, ভ্র, ভ্ল, ম্ন, ম্প, ম্প্র, ম্ফ, ম্ব, ম্ব্র, ম্ভ, ম্ভ্র, ম্ম, ম্য, ম্র, ম্ল, য্য, র্ক,
র্ক্য, র্গ, র্গ্য, র্ঘ্য, র্ঙ্গ, র্চ্য, র্জ্য, র্জ্জ, র্জ্ঞ, র্ণ্য, র্ত্য, র্থ্য, র্ব্য, র্ম্য, র্শ্য, র্ষ্য, র্হ্য,
র্খ, র্গ, র্গ্র, র্ঘ, র্চ, র্ছ, র্জ, র্ঝ, র্ট, র্ড, র্ণ, র্ত, র্ৎ, র্ত্ম, র্ত্র, র্থ, র্দ, র্দ্ব, র্দ্র, র্ধ,
র্ধ্ব, র্ন, র্প, র্ফ, র্ব, র্ভ, র্ম, র্য, র্ল, র্শ, র্শ্ব, র্ষ, র্ষ্ট, র্ষ্ণ, র্ষ্ণ্য, র্স, র্হ, র্হ্য, র্ঢ্য,
ল্ক, ল্ক্য, ল্গ, ল্ট, ল্ড, ল্প, ল্ফ, ল্ব, ল্ভ, ল্ম, ল্য, ল্ল, শ্চ, শ্ছ, শ্ন, শ্ব, শ্ম, শ্য, শ্র,
শ্ল, ষ্ক, ষ্ক্ব, ষ্ক্র, ষ্ট, ষ্ট্য, ষ্ট্র, ষ্ঠ, ষ্ঠ্য, ষ্ণ, ষ্ণ্ব, ষ্প, ষ্প্র, ষ্ফ, ষ্ব, ষ্ম, ষ্য, স্ক, স্ক্র,
স্খ, স্ট, স্ট্র, স্ত, স্ত্ব, স্ত্য, স্ত্র, স্থ, স্থ্য, স্ন, স্ন্য, স্প, স্প্র, স্প্‌ল, স্ফ, স্ব, স্ম, স্য,
স্র, স্ল, হ্ণ, হ্ন, হ্ব, হ্ম, হ্য, হ্র, হ্ল
```

[Conjunctive](https://github.com/lifeparticle/Bengali-Alphabet/blob/master/conjunctive.md)

All Unicode ranges (Ruby implementation)
============
<a href="https://github.com/lifeparticle/Bengali-Alphabet/blob/master/unicode.rb"><img alt="ruby-script" src="https://img.shields.io/badge/ruby-script-red.svg?style=flat"/></a>

Resources
============
1.  [Diacritic](https://en.wikipedia.org/wiki/Diacritic)
2.  [Vowel Diacritics in Bengali](https://en.wikibooks.org/wiki/Bengali/Script/Diacritics)
3.  [Bengali.AI Handwritten Grapheme Classification](https://tongxinw.github.io/bengali.ai/)
4.  [Grapheme](https://en.wikipedia.org/wiki/Grapheme)
5.  [Bengali.ai](https://bengali.ai/)
6.  [Unicode](https://www.unicode.org/charts/PDF/U0980.pdf)
7.  [Consonants](https://en.wikibooks.org/wiki/Bengali/Script/Consonants_1)
8.  [Bengali numerals](https://en.wikipedia.org/wiki/Bengali_numerals)
9.  [Conjunctive](https://bn.wikibooks.org/wiki/বাংলা_যুক্তাক্ষর)
10. [Fola](https://bn.wiktionary.org/wiki/ফলা)

Bug Reports and Feature Requests
============
Please create an issue with as much information you can. Thank you.

Author
============
Mahbub Zaman (https://mahbub.ninja)

License
============
MIT License
