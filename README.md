## 🎯 Crack the Code - Logic Game!  

## 🏆 My First Ever Website!  

"Crack the Code" is my very first web project, inspired by this simple yet intriguing image:  

<p align="center">
  <img src="https://github.com/user-attachments/assets/647fb639-4e51-4c81-9440-8141bc619ad5" width="500">
</p>  

Since it's my first website, it features a **minimalistic design** and **straightforward logic**.  
Despite its simplicity, building it **from scratch** was quite a challenge! 💡  

---

## 🧩 How Does the Game Work?  

The game revolves around **breaking a secret code** by deciphering hints.  

🔹 **A set of three digits is randomly generated.**  
🔹 Two key indexes are used to evaluate guesses:  

- **💙 Collision Index (`InC`)** → Number of digits that exist in the key set (but not necessarily in the correct position).  
- **❤️ Truth Index (`InT`)** → Number of digits that are both correct **and** correctly placed.  

---

## 🔍 The Algorithm Behind the Game  

1️⃣ **A hint set is generated** to guide the player toward the correct solution.  
2️⃣ **Hints are given** based on specific rules:  

| Condition | Action |
|-----------|--------|
| **`InT = 3`** or **`InC = 3`** | 🔄 Repeat |
| **`InT = 2`** and **`InC = 2`** | 🔄 Repeat |
| **`InT = 1`** and **`InC = 2`** | 🔄 Repeat |
| **`InT = 0`** and **`InC = 2`** | ➡️ Use **Hint III** |
| **`InT = 1`** and **`InC = 1`** | ➡️ Use **Hint I** |
| **`InT = 0`** and **`InC = 1`** | ➡️ Use **Hint II** (if `x = C`) |
| **`InT = 0`** and **`InC = 1`** | ➡️ Use **Hint V** (if `x* ≠ C`) |
| **`InT = 0`** and **`InC = 0`** | ➡️ Use **Hint IV** |

This logic ensures a **fast and effective** solution while keeping the challenge engaging! 🎯  

---

## 🚀 Try It Out!  

🔗 **Play the game now on my GitHub Pages repository!**  
🕵️‍♂️ Can you crack the code? Good luck! 🍀  


