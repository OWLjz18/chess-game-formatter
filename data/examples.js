const examples = new Map();

examples.set('blitzData', `
[Event "Dayrre vs. JAZA_18"]
[Site "Chess.com"]
[Date "2022-10-05"]
[White "Dayrre"]
[Black "JAZA_18"]
[Result "0-1"]
[WhiteElo "334"]
[BlackElo "866"]
[TimeControl "blitz"]
[Termination "JAZA_18 won on time"]
1. e4 Nf6 2. d4 Nc6 3. Nf3 g6 4. Nc3 Bg7 5. Bb5 b6 6. Bg5 Bb7 7. Nd5 O-O 8. O-O
Nxd5 9. Bxe7 Qxe7 10. Ng5 Qxg5 11. f4 Qd8 12. Bc4 Nf6 13. h4 Qe7 14. b3 Ng4 15.
Be2 Bf6 16. Bxg4 Bc8 17. Bxd7 Bxd7 18. Qh5 Bxd4+ 0-1
`.trim());

examples.set('blitzFormatted', `
⬜ Dayrre (334) vs JAZA_18 (866) ⬛
-----------------------------------

⡇ 1  ⡇ e4   ⡇ Nf6   ⡇
⡇ 2  ⡇ d4   ⡇ Nc6   ⡇
⡇ 3  ⡇ Nf3  ⡇ g6    ⡇
⡇ 4  ⡇ Nc3  ⡇ Bg7   ⡇
⡇ 5  ⡇ Bb5  ⡇ b6    ⡇
⡇ 6  ⡇ Bg5  ⡇ Bb7   ⡇
⡇ 7  ⡇ Nd5  ⡇ O-O   ⡇
⡇ 8  ⡇ O-O  ⡇ Nxd5  ⡇
⡇ 9  ⡇ Bxe7 ⡇ Qxe7  ⡇
⡇ 10 ⡇ Ng5  ⡇ Qxg5  ⡇
⡇ 11 ⡇ f4   ⡇ Qd8   ⡇
⡇ 12 ⡇ Bc4  ⡇ Nf6   ⡇
⡇ 13 ⡇ h4   ⡇ Qe7   ⡇
⡇ 14 ⡇ b3   ⡇ Ng4   ⡇
⡇ 15 ⡇ Be2  ⡇ Bf6   ⡇
⡇ 16 ⡇ Bxg4 ⡇ Bc8   ⡇
⡇ 17 ⡇ Bxd7 ⡇ Bxd7  ⡇
⡇ 18 ⡇ Qh5  ⡇ Bxd4+ ⡇

Type: Blitz.
Date: 2022-10-05.

Result: 0-1.
JAZA_18 won on time.
`.trim());

examples.set('dataComplete1', `
[Event "JAZA_18 vs. Dayrre"]
[Site "Chess.com"]
[Date "2022-10-04"]
[White "JAZA_18"]
[Black "Dayrre"]
[Result "1/2-1/2"]
[WhiteElo "702"]
[BlackElo "314"]
[TimeControl "standard"]
[Termination "Game drawn by agreement"]
1. g3 e5 2. Nf3 d5 3. Bg2 Nf6 4. O-O Nc6 5. Nc3 Bf5 6. d3 Bc5 7. e4 Bxe4 8. dxe4
Nxe4 9. Nxe4 dxe4 10. Nh4 Bd4 11. Nf3 Qc8 12. a4 Kf8 13. Ra3 Nb4 14. Nxd4 Nxc2
15. Qxc2 e3 16. fxe3 e4 17. Bxe4 c6 18. Qf2 g5 19. Bf5 Qd8 20. e4 Rb8 21. Bxg5
Qxg5 22. h4 Qg8 23. Rf3 h6 24. Rf4 Re8 25. Qe1 b6 26. Rg4 c5 27. b4 Qxg4 28.
Bxg4 c4 29. Rf5 f6 30. Bh5 Re7 31. b5 c3 32. Kg2 c2 33. Qb4 c1=Q 34. Nf3 Qc8 35.
  Rd5 Qc6 36. bxc6 f5 37. exf5 b5 38. Re5 Rh7 39. Qxe7+ Rxe7 40. Rxe7 Kxe7 41. Ne5
Kd6 42. Nc4+ Kxc6 43. f6 Kd5 44. f7 Kxc4 45. f8=Q Kd3 46. Kf2 Ke4 47. Qe8+ Kd3
48. Qe2+ Kc3 49. Ke3 Kb3 50. Kd3 Kxa4 51. Qb2 Ka5 52. Kc3 Ka6 53. Kb4 Kb6 54.
Bf3 Kc7 55. Qc2+ Kd7 56. Bg4+ Kd6 57. Qd2+ Kc6 58. Bf5 a5+ 1/2-1/2
`.trim());

examples.set('dataComplete2', `
[Event "Dayrre vs. Jejjjwnsbaj"]
[Site "Chess.com"]
[Date "2022-10-08"]
[White "Dayrre"]
[Black "Jejjjwnsbaj"]
[Result "0-1"]
[WhiteElo "314"]
[BlackElo "487"]
[TimeControl "standard"]
[Termination "Jejjjwnsbaj won by checkmate"]
1. d4 c6 2. e4 Qa5+ 3. Nc3 c5 4. b3 cxd4 5. Qxd4 Nc6 6. Qd2 g6 7. Bd3 Bh6 8. Nf3
Bxd2+ 9. Kxd2 b6 10. Ke1 Ba6 11. Kf1 Qc5 12. Kg1 Qxc3 13. Rb1 g5 14. Bd2 Qc5 15.
  Rf1 g4 16. Bxa6 gxf3 17. Be3 Qe5 18. Bd3 Nb4 19. a3 Nxd3 20. cxd3 Qb2 21. Bc1
  Qxb3 22. Bd2 Qxa3 23. e5 Rc8 24. d4 Qa2 25. Be1 Rc2 26. d5 Qxd5 27. e6 fxg2 28.
  Bb4 Rc1 29. Ba3 gxf1=Q# 0-1
`.trim());

examples.set('dataWithoutEvent', `
[Site "Chess.com"]
[Date "2022-10-05"]
[White "Dayrre"]
[Black "JAZA_18"]
[Result "0-1"]
[WhiteElo "334"]
[BlackElo "866"]
[TimeControl "blitz"]
[Termination "JAZA_18 won on time"]
1. e4 Nf6 2. d4 Nc6 3. Nf3 g6 4. Nc3 Bg7 5. Bb5 b6 6. Bg5 Bb7 7. Nd5 O-O 8. O-O
Nxd5 9. Bxe7 Qxe7 10. Ng5 Qxg5 11. f4 Qd8 12. Bc4 Nf6 13. h4 Qe7 14. b3 Ng4 15.
Be2 Bf6 16. Bxg4 Bc8 17. Bxd7 Bxd7 18. Qh5 Bxd4+ 0-1
`.trim());

examples.set('dataWithoutDate', `
[Event "AnarcPunk338 vs. Dayrre"]
[Site "Chess.com"]
[White "AnarcPunk338"]
[Black "Dayrre"]
[Result "1-0"]
[WhiteElo "425"]
[BlackElo "314"]
[TimeControl "standard"]
[Termination "AnarcPunk338 won by checkmate"]
1. e4 e5 2. d4 Nc6 3. d5 d6 4. dxc6 bxc6 5. Nc3 Bb7 6. g3 Qe7 7. Qg4 Nf6 8. Qh4
Bc8 9. Bh3 d5 10. exd5 cxd5 11. Bxc8 Rxc8 12. Bg5 a5 13. Nxd5 c6 14. Nxe7 Kxe7
15. Bxf6+ Ke8 16. Qg4 h5 17. Qxc8# 1-0
`.trim());

examples.set('dataFormatted', `\`\`\`
⬜ JAZA_18 (702) vs Dayrre (314) ⬛
-----------------------------------

⡇ 1  ⡇ g3    ⡇ e5   ⡇
⡇ 2  ⡇ Nf3   ⡇ d5   ⡇
⡇ 3  ⡇ Bg2   ⡇ Nf6  ⡇
⡇ 4  ⡇ O-O   ⡇ Nc6  ⡇
⡇ 5  ⡇ Nc3   ⡇ Bf5  ⡇
⡇ 6  ⡇ d3    ⡇ Bc5  ⡇
⡇ 7  ⡇ e4    ⡇ Bxe4 ⡇
⡇ 8  ⡇ dxe4  ⡇ Nxe4 ⡇
⡇ 9  ⡇ Nxe4  ⡇ dxe4 ⡇
⡇ 10 ⡇ Nh4   ⡇ Bd4  ⡇
⡇ 11 ⡇ Nf3   ⡇ Qc8  ⡇
⡇ 12 ⡇ a4    ⡇ Kf8  ⡇
⡇ 13 ⡇ Ra3   ⡇ Nb4  ⡇
⡇ 14 ⡇ Nxd4  ⡇ Nxc2 ⡇
⡇ 15 ⡇ Qxc2  ⡇ e3   ⡇
⡇ 16 ⡇ fxe3  ⡇ e4   ⡇
⡇ 17 ⡇ Bxe4  ⡇ c6   ⡇
⡇ 18 ⡇ Qf2   ⡇ g5   ⡇
⡇ 19 ⡇ Bf5   ⡇ Qd8  ⡇
⡇ 20 ⡇ e4    ⡇ Rb8  ⡇
⡇ 21 ⡇ Bxg5  ⡇ Qxg5 ⡇
⡇ 22 ⡇ h4    ⡇ Qg8  ⡇
⡇ 23 ⡇ Rf3   ⡇ h6   ⡇
⡇ 24 ⡇ Rf4   ⡇ Re8  ⡇
⡇ 25 ⡇ Qe1   ⡇ b6   ⡇
⡇ 26 ⡇ Rg4   ⡇ c5   ⡇
⡇ 27 ⡇ b4    ⡇ Qxg4 ⡇
⡇ 28 ⡇ Bxg4  ⡇ c4   ⡇
⡇ 29 ⡇ Rf5   ⡇ f6   ⡇
⡇ 30 ⡇ Bh5   ⡇ Re7  ⡇
⡇ 31 ⡇ b5    ⡇ c3   ⡇
⡇ 32 ⡇ Kg2   ⡇ c2   ⡇
⡇ 33 ⡇ Qb4   ⡇ c1=Q ⡇
⡇ 34 ⡇ Nf3   ⡇ Qc8  ⡇
⡇ 35 ⡇ Rd5   ⡇ Qc6  ⡇
⡇ 36 ⡇ bxc6  ⡇ f5   ⡇
⡇ 37 ⡇ exf5  ⡇ b5   ⡇
⡇ 38 ⡇ Re5   ⡇ Rh7  ⡇
⡇ 39 ⡇ Qxe7+ ⡇ Rxe7 ⡇
⡇ 40 ⡇ Rxe7  ⡇ Kxe7 ⡇
⡇ 41 ⡇ Ne5   ⡇ Kd6  ⡇
⡇ 42 ⡇ Nc4+  ⡇ Kxc6 ⡇
⡇ 43 ⡇ f6    ⡇ Kd5  ⡇
⡇ 44 ⡇ f7    ⡇ Kxc4 ⡇
⡇ 45 ⡇ f8=Q  ⡇ Kd3  ⡇
⡇ 46 ⡇ Kf2   ⡇ Ke4  ⡇
⡇ 47 ⡇ Qe8+  ⡇ Kd3  ⡇
⡇ 48 ⡇ Qe2+  ⡇ Kc3  ⡇
⡇ 49 ⡇ Ke3   ⡇ Kb3  ⡇
⡇ 50 ⡇ Kd3   ⡇ Kxa4 ⡇
⡇ 51 ⡇ Qb2   ⡇ Ka5  ⡇
⡇ 52 ⡇ Kc3   ⡇ Ka6  ⡇
⡇ 53 ⡇ Kb4   ⡇ Kb6  ⡇
⡇ 54 ⡇ Bf3   ⡇ Kc7  ⡇
⡇ 55 ⡇ Qc2+  ⡇ Kd7  ⡇
⡇ 56 ⡇ Bg4+  ⡇ Kd6  ⡇
⡇ 57 ⡇ Qd2+  ⡇ Kc6  ⡇
⡇ 58 ⡇ Bf5   ⡇ a5+  ⡇

Type: Standard.
Date: 2022-10-04.

Result: 1/2-1/2.
Game drawn by agreement.
\`\`\``);

export default examples;
