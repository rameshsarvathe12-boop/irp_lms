# IRP LMS – Responsive Web Design & Core JavaScript Foundations

This repository contains the two parts required by the practical assignment.

## Project structure

```text
irp-web-development-assignment/
├── part-a-responsive-ui/
│   ├── index.html
│   └── style.css
├── part-b-javascript/
│   └── bank.js
└── README.md
```

## Part A: Responsive IRP LMS home page

1. Open `part-a-responsive-ui/index.html` in Google Chrome.
2. Scroll the page and confirm that the navigation bar remains at the top.
3. Open Developer Tools with `F12`, then enable the Device Toolbar.
4. Check a desktop viewport at 1200px or wider. The learning journey should display five columns.
5. Check mobile viewports at 375px and 390px. The hero and learning cards should stack vertically without horizontal overflow.
6. The page uses the hosted IRP LMS logo and hero illustration URLs specified in the assignment.

## Part B: JavaScript bank simulator

Install Node.js if it is not already installed. From the repository root, run:

```bash
node part-b-javascript/bank.js
```

The script runs the `parseAmount` test cases, demonstrates coercion and `typeof null`, and shows the requested `var`, `let`, `const`, hoisting, Temporal Dead Zone, function-hoisting, and asynchronous-loop behavior.

The timeout callbacks run after the synchronous statements. The expected loop output is three `var loop: 3` lines and `let loop: 0`, `let loop: 1`, `let loop: 2` (the relative ordering of the six callbacks is not guaranteed).

## Submission

Create a **public** GitHub repository named `irp-web-development-assignment`, add these files while preserving the directory structure, and submit the repository URL. Do not submit a ZIP file, screenshots, or a local filesystem path. Verify the public repository in an incognito/private browser window before submission.
"# irp_lms" 
