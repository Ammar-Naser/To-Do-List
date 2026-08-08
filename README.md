# 📝 To-Do List

A simple and interactive **To-Do List web application** built with **HTML, CSS, and vanilla JavaScript**.

The application provides a clean interface for organizing daily tasks. Users can add new tasks, mark tasks as completed, and delete tasks when they are no longer needed.

---

##  Features

*  Add new tasks
*  Mark tasks as completed
*  Toggle task completion status
*  Delete tasks
*  Confirmation before deleting a task
*  Add tasks using the **Enter** key
*  Prevent empty tasks from being added
*  Display tasks in an organized table
*  Custom styling with CSS
*  Responsive viewport configuration

---

##  Technologies

| Technology     | Purpose                                |
| -------------- | -------------------------------------- |
| **HTML5**      | Page structure and UI elements         |
| **CSS3**       | Styling and layout                     |
| **JavaScript** | Application logic and DOM manipulation |

The project does not require any external frameworks, libraries, or backend services.

---

##  Project Structure

```text
To-Do-List/
│
├── index.html      # Main HTML page
├── style.css       # Application styling
├── script.js       # To-do list functionality
└── README.md       # Project documentation
```

---

##  User Interface

The application contains:

```text
┌──────────────────────────────────────┐
│            To Do Organizer           │
│                                      │
│  ┌────────────────────┐  ┌───────┐  │
│  │    Enter Task      │  │  Add  │  │
│  └────────────────────┘  └───────┘  │
│                                      │
│  ┌──────┬────────────────┬─────────┐ │
│  │ Done │      Task      │ Delete  │ │
│  ├──────┼────────────────┼─────────┤ │
│  │  ☑   │ Study Java     │ Delete  │ │
│  │  ☐   │ Read a book    │ Delete  │ │
│  └──────┴────────────────┴─────────┘ │
│                                      │
└──────────────────────────────────────┘
```

The HTML page provides the task input, **Add** button, and a table containing the task list.

---

#  Getting Started

##  Prerequisites

No special software or dependencies are required.

You only need a modern web browser such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

##  Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ammar-Naser/To-Do-List.git
```

### 2. Navigate to the project

```bash
cd To-Do-List
```

### 3. Open the application

Simply open:

```text
index.html
```

in your web browser.

You can also use **VS Code Live Server** or any other local static web server.

---

#  How to Use

## ➕ Add a Task

Enter a task in the input field:

```text
Enter Task
```

Then click:

```text
Add
```

Alternatively, press **Enter** after typing the task.

The JavaScript implementation listens for both the button click and the Enter key.

---

## ✅ Complete a Task

Each task has a checkbox under the **Done** column.

Clicking the checkbox marks the task as completed.

The task text receives a `completed` CSS class when checked, and the class is removed when unchecked.

---

## 🗑️ Delete a Task

Each task has a **Delete** button.

When clicked, the application asks for confirmation:

```text
Are you sure you want to delete this task?
```

The task is removed only after the user confirms the deletion.

---

##  Empty Task Validation

The application prevents empty tasks from being added.

If the input is empty, the user receives:

```text
Please Enter a Task
```

The input is trimmed before validation, so whitespace-only input is also rejected.

---

#  How It Works

The application uses JavaScript to dynamically create and manage task elements.

### Task Creation Flow

```text
User enters task
       │
       ▼
Click "Add" / Press Enter
       │
       ▼
Validate input
       │
       ├── Empty ──► Show alert
       │
       ▼
Create table row
       │
       ├── Checkbox
       ├── Task text
       └── Delete button
       │
       ▼
Add row to task table
```

The task row is dynamically created using JavaScript and appended to the table body.

---

#  JavaScript Logic

The main JavaScript functionality is implemented in `script.js`.

The application:

1. Gets references to the task input and buttons.
2. Listens for the **Add** button click.
3. Listens for the **Enter** key.
4. Validates the task input.
5. Dynamically creates a new table row.
6. Adds a completion checkbox.
7. Adds a delete button.
8. Handles task completion.
9. Handles task deletion.

This provides a fully client-side implementation without requiring a backend.

---

#  Styling

The visual appearance of the application is handled by `style.css`.

The stylesheet is responsible for the layout and presentation of:

* Main container
* Task input
* Add button
* Task table
* Checkboxes
* Delete buttons
* Completed task styling

The HTML page imports the stylesheet directly:

```html
<link rel="stylesheet" href="style.css">
```

---

#  Data Storage

This version of the application stores tasks **in the browser's current page state only**.

There is no:

* Database
* Backend API
* Local Storage
* Authentication system

Therefore, tasks are not persisted after the page is refreshed or closed.

---

#  Learning Objectives

This project demonstrates fundamental **frontend web development** concepts, including:

* HTML page structure
* CSS styling
* JavaScript fundamentals
* DOM manipulation
* Event listeners
* Dynamic element creation
* Form/input validation
* Event handling
* CSS class manipulation
* User confirmation dialogs

---
