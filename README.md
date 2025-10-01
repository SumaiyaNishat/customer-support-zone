
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-007

### 📅 Deadline For 60 marks: 27th September, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks 

### 📅 Deadline For 30 marks: Any time after 27th September , 2025 (11:59pm⏱️).

---

# Private Repository: https://classroom.github.com/a/VVl8VKya

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 # JSX (JavaScript XML) is a syntax extension for JavaScript used in React.It allows you to write HTML-like code inside JavaScript. It makes components easier to read and understand, and React converts it into JavaScript behind the scenes.

 - What is the difference between State and Props?
 # State is data that lives inside a component and can change over time. It is managed by the component itself and is updated using hooks like useState. When state changes, React re-renders the component to show the updated UI. Props are inputs passed from a parent component to a child component. They are read-only and cannot be changed by the child, making them useful for passing data, functions, or configuration.State is internal and mutable, while Props are external and immutable.

 - What is the useState hook, and how does it work?
 # The useState hook lets functional components have their own state. It gives you two things: the current value and a function to update that value.
 When you call the update function, React re-renders the component so the UI always shows the latest state.

 - How can you share state between components in React?
 # we can share state in React by lifting the state up to the nearest common parent and passing it down as props.
 - How is event handling done in React?
 # In React, event handling is done by using functions with camelCase names like onClick, onChange, or onSubmit. Instead of writing code directly inside HTML, we pass a function reference to handle the event when it happens. React also provides a synthetic event object, which is a wrapper around the browser’s native event, making event handling consistent across all browsers.

---

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 


---


