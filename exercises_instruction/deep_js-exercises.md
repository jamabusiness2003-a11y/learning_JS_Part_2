## 🟤 Exercise 9: Random Quote Generator

### 🎯 Goal

Display a random quote each time a button is clicked.

### 📄 HTML

- Container for quote text

- Button to get a new quote

### 🎨 CSS

- Style quote container with border/box-shadow

- Add button hover effect

### 🧠 JavaScript

- Store multiple quotes in an array

- Generate a random index when button is clicked

- Update DOM with the chosen quote

### 💡 Bonus

- Animate quote fade in/out

- Prevent repeating the same quote consecutively

## 🟤 Exercise 10: Image Carousel / Slider
### 🎯 Goal

Create a slideshow of images that cycles automatically and manually.

### 📄 HTML

- Container for images

- Next/Previous buttons

- Optional indicators (dots)

### 🎨 CSS

- Smooth transition between images

- Highlight active dot

### 🧠 JavaScript

- Store images in an array

- Display only the current image

- Implement next/prev button click events

- Auto-cycle with setInterval

### 💡 Bonus

- Pause carousel on hover

- Wrap around at first/last image

## 🟤 Exercise 11: Simple Calculator
### 🎯 Goal

Create a calculator with basic arithmetic: +, -, *, /

### 📄 HTML

- Display screen

- Buttons for numbers and operators

- Equals button

### 🎨 CSS

- Button grid layout

- Pressed effect on buttons

### 🧠 JavaScript

- Store current input and operator

- Update display on each button click

- Calculate result on equals

- Handle edge cases (division by zero)

### 💡 Bonus

- Keyboard support (0–9, +, -, *, /, Enter)

- Clear / backspace button

## 🟤 Exercise 12: Todo List with Categories & Filtering
### 🎯 Goal

Create a more advanced todo app with categories.

### 📄 HTML

- Input for task

- Dropdown for category

- Add button

- Task list with category displayed

- Filter dropdown

### 🎨 CSS

- Category color coding

- Completed task style

### 🧠 JavaScript

- Store tasks as objects: {text, category, completed}

- Add task to DOM with category

- Filter tasks by selected category

- Mark complete / delete

### 💡 Bonus

- Save tasks in localStorage

- Restore state on page reload

## 🟤 Exercise 13: Countdown Timer
### 🎯 Goal

Create a countdown timer that counts down from a user-defined time.

### 📄 HTML

- Input for minutes/seconds

- Start / Pause / Reset buttons

- Timer display

### 🎨 CSS

- Large timer display

- Color change as time runs low

### 🧠 JavaScript

- Use setInterval to decrement time

- Update display each second

- Stop at zero and show alert/message

### 💡 Bonus

- Play sound when timer reaches zero

- Allow multiple timers

## 🟤 Exercise 14: Drag and Drop List
### 🎯 Goal

Reorder items in a list by dragging and dropping.

### 📄 HTML

- List of items (ul/li)

### 🎨 CSS

- Highlight the item being dragged

- Smooth visual movement

### 🧠 JavaScript

- Use drag events: dragstart, dragover, drop

- Swap items dynamically in DOM

- Update underlying array if needed

### 💡 Bonus

- Persist order in localStorage

## 🟤 Exercise 15: Memory Card Game
### 🎯 Goal

Create a simple memory match game with cards.

### 📄 HTML

- Grid of hidden cards

- Cards contain symbols/images

### 🎨 CSS

- Card flipping animation

- Highlight matched cards

### 🧠 JavaScript

- Store card values in an array and shuffle

- Flip two cards on click

- Check for match

- Keep matched cards visible

- Reset game when completed

### 💡 Bonus

- Track number of moves

- Add timer

## 🟤 Exercise 16: Weather Fetcher (API)
### 🎯 Goal

Fetch and display weather data for a city using a public API.

### 📄 HTML

- Input for city name

- Button to fetch

- Display area for weather info

### 🎨 CSS

- Weather card layout

- Responsive design

### 🧠 JavaScript

- Use fetch API to get weather data

- Parse JSON and update DOM

- Handle errors (city not found / network errors)

### 💡 Bonus

- Display icons for weather conditions

- Save last searched city in localStorage

# 🟤 Exercise 17: Global State Manager (Vanilla JS)

## 🎯 Goal
Manage shared state between multiple UI components.

## 📄 HTML
- Multiple UI sections (counter, toggle, text display)  
- Buttons that update shared data  

## 🎨 CSS
- Clear separation between components  
- Visual indication of state changes  

## 🧠 JavaScript
- Create a global state object  
- Update state from multiple places  
- Re-render UI when state changes  

## 💡 Bonus
- Add a subscribe / notify system  

---

# 🟤 Exercise 18: Undo / Redo System

## 🎯 Goal
Allow users to undo and redo actions.

## 📄 HTML
- Action button  
- Undo button  
- Redo button  
- Output display  

## 🎨 CSS
- Disabled state for buttons  
- Clear action feedback  

## 🧠 JavaScript
- Use stacks to store past and future states  
- Push state on each action  
- Restore previous state on undo  

## 💡 Bonus
- Limit history size  

---

# 🟤 Exercise 19: Multi-Step Form Wizard

## 🎯 Goal
Split a form into multiple steps with navigation.

## 📄 HTML
- Multiple form sections  
- Next / Back buttons  
- Progress indicator  

## 🎨 CSS
- Step transitions  
- Active step highlight  

## 🧠 JavaScript
- Track current step index  
- Persist form data between steps  
- Validate step before advancing  

## 💡 Bonus
- Skip steps conditionally  

---

# 🟤 Exercise 20: Dynamic Data Table

## 🎯 Goal
Display data with sorting, filtering, and pagination.

## 📄 HTML
- Table  
- Search input  
- Pagination controls  

## 🎨 CSS
- Table styling  
- Active sort indicator  

## 🧠 JavaScript
- Store table data in arrays  
- Sort by column  
- Filter rows dynamically  
- Paginate results  

## 💡 Bonus
- Multi-column sorting  

---

# 🟤 Exercise 21: Debounced Search Input

## 🎯 Goal
Optimize search input performance.

## 📄 HTML
- Search input  
- Result list  

## 🎨 CSS
- Loading indicator  
- Smooth result updates  

## 🧠 JavaScript
- Implement debounce function  
- Delay search execution  
- Cancel previous timers  

## 💡 Bonus
- Compare debounce vs throttle  

---

# 🟤 Exercise 22: Retryable Fetch Request

## 🎯 Goal
Automatically retry failed network requests.

## 📄 HTML
- Fetch button  
- Status display  

## 🎨 CSS
- Loading / error states  
- Retry feedback  

## 🧠 JavaScript
- Wrap fetch in retry logic  
- Limit retry attempts  
- Handle final failure  

## 💡 Bonus
- Exponential backoff  

---

# 🟤 Exercise 23: Parallel vs Sequential Fetching

## 🎯 Goal
Understand async performance differences.

## 📄 HTML
- Load button  
- Result containers  

## 🎨 CSS
- Side-by-side layout  

## 🧠 JavaScript
- Fetch data sequentially  
- Fetch data in parallel using `Promise.all`  
- Measure completion time  

## 💡 Bonus
- Visual loading timeline  

---

# 🟤 Exercise 24: Loading State Machine

## 🎯 Goal
Model async UI states explicitly.

## 📄 HTML
- Load button  
- Status display  

## 🎨 CSS
- Styles for idle / loading / success / error  

## 🧠 JavaScript
- Implement state enum  
- Switch UI based on state  
- Prevent invalid transitions  

## 💡 Bonus
- Log state transitions  

---

# 🟤 Exercise 25: Request Cancellation

## 🎯 Goal
Cancel outdated network requests.

## 📄 HTML
- Search input  
- Results area  

## 🎨 CSS
- Loading feedback  

## 🧠 JavaScript
- Use `AbortController`  
- Cancel previous fetch on new input  
- Handle abort errors cleanly  

## 💡 Bonus
- “Latest request wins” logic  

---

# 🟤 Exercise 26: Keyboard Shortcut System

## 🎯 Goal
Add global keyboard shortcuts.

## 📄 HTML
- Action buttons  
- Status display  

## 🎨 CSS
- Shortcut hint styling  

## 🧠 JavaScript
- Listen to `keydown` events  
- Detect modifier keys  
- Trigger actions programmatically  

## 💡 Bonus
- Allow custom shortcut mapping  

---

# 🟤 Exercise 27: Event Delegation Engine

## 🎯 Goal
Handle events efficiently for many elements.

## 📄 HTML
- Large list of items  
- Container element  

## 🎨 CSS
- Hover and active styles  

## 🧠 JavaScript
- Attach one event listener to parent  
- Detect event target  
- Perform action based on clicked item  

## 💡 Bonus
- Dynamically add items without new listeners  

---

# 🟤 Exercise 28: Gesture Detection

## 🎯 Goal
Detect swipe and long-press gestures.

## 📄 HTML
- Gesture area  
- Output display  

## 🎨 CSS
- Touch feedback animations  

## 🧠 JavaScript
- Track pointer start/end  
- Measure distance and time  
- Identify gesture type  

## 💡 Bonus
- Support mouse + touch  

---

# 🟤 Exercise 29: Custom Array Methods

## 🎯 Goal
Rebuild core array utilities.

## 📄 HTML
- Input data display  
- Output display  

## 🎨 CSS
- Code-style formatting  

## 🧠 JavaScript
- Implement custom `map`  
- Implement custom `filter`  
- Implement custom `reduce`  

## 💡 Bonus
- Match native behavior exactly  

---

# 🟤 Exercise 30: Priority Task Queue

## 🎯 Goal
Execute tasks based on priority.

## 📄 HTML
- Task input  
- Priority selector  
- Queue display  

## 🎨 CSS
- Priority color coding  

## 🧠 JavaScript
- Store tasks with priority values  
- Sort queue dynamically  
- Execute highest-priority task first  

## 💡 Bonus
- Pause / resume execution  

---

# 🟤 Exercise 31: Memoization System

## 🎯 Goal
Cache expensive function results.

## 📄 HTML
- Input field  
- Compute button  
- Result display  

## 🎨 CSS
- Cache hit indicator  

## 🧠 JavaScript
- Use closures for cache storage  
- Return cached results when available  
- Track cache size  

## 💡 Bonus
- Cache expiration logic  

---

# 🟤 Exercise 32: Permission-Based UI

## 🎯 Goal
Show or hide features based on user roles.

## 📄 HTML
- Role selector  
- Feature buttons  

## 🎨 CSS
- Disabled / hidden styles  

## 🧠 JavaScript
- Define permission rules  
- Conditionally render UI  
- Prevent unauthorized actions  

## 💡 Bonus
- Nested permissions  

---

# 🟤 Exercise 33: Plugin Architecture

## 🎯 Goal
Allow features to be added dynamically.

## 📄 HTML
- Core app UI  
- Plugin list  

## 🎨 CSS
- Plugin section styling  

## 🧠 JavaScript
- Register plugins dynamically  
- Execute plugin hooks  
- Isolate plugin logic  

## 💡 Bonus
- Enable / disable plugins at runtime  

---

# 🟤 Exercise 34: Feature Flag System

## 🎯 Goal
Toggle features without changing core logic.

## 📄 HTML
- Feature toggles  
- Feature UI sections  

## 🎨 CSS
- Disabled feature indicators  

## 🧠 JavaScript
- Store flags in config object  
- Conditionally enable features  
- Update flags dynamically  

## 💡 Bonus
- Persist flags in `localStorage`  

---

# 🟤 Exercise 35: Time-Travel Debugger

## 🎯 Goal
Replay past application states.

## 📄 HTML
- Action buttons  
- Timeline slider  

## 🎨 CSS
- Timeline visualization  

## 🧠 JavaScript
- Store immutable state history  
- Navigate backward / forward  
- Restore UI from snapshot  

## 💡 Bonus
- Label each state change  

---

# 🟤 Exercise 36: Autosave System

## 🎯 Goal
Automatically save user progress safely.

## 📄 HTML
- Editable input  
- Save status indicator  

## 🎨 CSS
- Saving / saved feedback  

## 🧠 JavaScript
- Detect input changes  
- Debounce save calls  
- Persist data to `localStorage`  

## 💡 Bonus
- Recovery after refresh  

---

# 🟤 Exercise 37: Chat App Logic (No Backend)

## 🎯 Goal
Simulate real chat behavior locally.

## 📄 HTML
- Message input  
- Chat window  

## 🎨 CSS
- Message bubbles  
- Pending / sent states  

## 🧠 JavaScript
- Optimistic UI updates  
- Message state tracking  
- Simulated delays/errors  

## 💡 Bonus
- Message retry system  

---

# 🟤 Exercise 38: Job Queue Simulator

## 🎯 Goal
Simulate background job processing.

## 📄 HTML
- Job input  
- Queue display  
- Status output  

## 🎨 CSS
- Processing indicators  

## 🧠 JavaScript
- Queue data structure  
- Process jobs sequentially  
- Simulate execution time  

## 💡 Bonus
- Concurrent workers  