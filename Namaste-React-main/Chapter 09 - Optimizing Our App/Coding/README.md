
---

## 🔥 What Are Custom Hooks in React?

A **custom hook** is simply a JavaScript function whose name **starts with `use`** and that can call **other hooks** (like `useState`, `useEffect`, etc.) inside it.

```js
function useCustomLogic() {
  const [state, setState] = useState(0);
  // any logic or effects here
  return [state, setState];
}
```

---

## 🧠 But Why Do We Need Custom Hooks?

Let’s break it down into *real problems* and how custom hooks solve them.

---

### 🧩 Problem 1: Repeating Logic Across Components

Imagine you want to track **window width** in two components.

#### ❌ Without Custom Hook — logic duplication:

```js
// In Component A
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

Then you write the *same thing again* in Component B. 😩  
This breaks the **DRY principle** (Don't Repeat Yourself).

---

### ✅ With Custom Hook

```js
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
```

Now in any component:

```js
const width = useWindowWidth();
```

🎯 **You encapsulated the logic once, reused it anywhere!**

---

### 🧩 Problem 2: Logic is Hard to Test or Maintain

Custom Hooks break up **complex components** into **smaller, testable units**.

Imagine a component doing:

- Fetching data
- Debouncing input
- Managing auth token

All in one place = 💀 hard to read, test, debug.

---

### ✅ With Custom Hooks, you do this:

```js
const user = useFetchUser();
const searchTerm = useDebouncedInput(input);
const isLoggedIn = useAuthToken();
```

Your main component is now **clean, declarative, and readable.**

---

## ✅ Summary: Why We Use Custom Hooks

| Problem | How Custom Hook Helps |
|--------|------------------------|
| Code duplication | Encapsulates and reuses logic |
| Hard-to-read logic | Breaks into small focused functions |
| Not testable | Custom hooks can be tested like any function |
| Messy components | Makes code declarative and clean |
| Sharing side-effects (like timers, subscriptions) | Makes shared effects composable |

---

## 💡 Custom Hook = Logic Component

Think of a **custom hook** as a **"logic component"** – it doesn’t return JSX, but handles state, effects, and behavior.

---

## 🧪 Real-World Examples of Custom Hooks

| Hook | What it Does |
|------|--------------|
| `useOnlineStatus()` | Tracks whether the user is online/offline |
| `useFetch(url)` | Handles fetching from an API with loading/error states |
| `useLocalStorage(key)` | Syncs a value with localStorage |
| `useDebounce(value, delay)` | Debounces user input (great for search bars) |
| `useDarkMode()` | Toggles dark/light mode using system preferences |

---

## 🛠️ Basic Example: `useCounter` Hook

```js
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}
```

### Usage:

```js
const { count, increment, decrement } = useCounter();
```

---

## 🚨 Rules of Custom Hooks

1. Name must start with `use` → `useAuth`, `useFetch`
2. Can use other hooks like `useState`, `useEffect` inside
3. Must follow [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

---

## 🔚 Final Thoughts

> Custom Hooks give you **superpowers** to extract logic, write cleaner components, and reuse behavior just like reusable components help with JSX.

If you're writing the same `useEffect`/`useState` logic in 2+ places — that's a **signal** to extract a custom hook.

---

Would you like me to walk you through building **your own custom `useGithubUser()` hook** for the API you used before?



That's absolutely right – and your tutor is giving great practical advice here. Let me break it down clearly and in-depth so it really clicks for you:

---

### ✅ **What are Hooks, really?**

> 💡 **Hooks are just normal JavaScript functions** — but with **two special powers**:
1. They **start with the word `use`** (`useState`, `useEffect`, `useRestaurantMenu`)
2. They **can call other hooks inside them** (like `useState`, `useEffect` etc.)

They are just **utility functions** with access to **React’s internal state and lifecycle** system.

---

### 🔧 Why are custom hooks created in separate files?

Because we want **clean code architecture** — *just like we separate components*, we should also:

| Concern | File |
|--------|------|
| Component UI logic | `RestaurantMenu.jsx` |
| Data fetching logic | `useRestaurantMenu.js` |
| Auth logic | `useAuth.js` |
| Online status check | `useOnlineStatus.js` |
| Debounced input | `useDebounce.js` |

This helps with:

- 🔁 **Reusability** – same hook used across multiple components
- 🧪 **Testability** – test your hook separately from the UI
- 🧠 **Readability** – separation of concerns
- 🚀 **Scalability** – as app grows, logic stays clean

---

### ✅ Real-World Example: `useRestaurantMenu`

Let’s say you need to display the menu not only in `<RestaurantMenu />`, but also in `<Cart />` or `<Favorites />`.  
If your fetch logic is only in one component, you’ll have to **duplicate** it. Bad idea.

Instead, with a custom hook:

```js
const { restaurant, menuItems } = useRestaurantMenu(resId);
```

You just use it **wherever** you need it. 💫

---

### ✅ Recap: What makes a good custom hook?

1. 🔁 **Reused in multiple places**
2. 💡 **Encapsulates logic**: fetching, debounce, scroll position, etc.
3. 🧪 **Easier to test** than a UI component
4. ⚙️ **Can use state and other hooks inside it**

---

### 🧪 Is it required to extract it?

No. But it’s **best practice** and it helps you become a **professional full-stack developer** with scalable projects.

---










