# Ceramics Tailwind Landing Page

[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-000000?style=for-the-badge&logo=vercel)](https://thi-nguyen167.github.io/tailwindcss-ceramics-landing-page/)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A premium, highly interactive landing page designed for a minimalist ceramics and home objects studio. It was built with a focus on editorial design, smooth typography, and advanced front-end interactions to mimic high-end architectural and design portfolios.

## Interface Preview

<details>
  <summary><b>Click to view full Desktop Version</b></summary>
  <br/>
  <img alt="Desktop Preview" src="https://github.com/user-attachments/assets/38d7906e-adc2-473c-a46d-fbefbd16ff53" />
</details>

<details>
  <summary><b>Click to view full Mobile Version</b></summary>
  <br/>
  <img alt="Mobile Preview" src="https://github.com/user-attachments/assets/b7cd2116-d3a8-41fb-a832-2822e3c1c33c" />
</details>


## Description
This project is a sophisticated, interactive landing page tailored for artisanal and minimalist home objects. It focuses on editorial design, smooth typography (using EB Garamond, Inter, and Space Grotesk), and advanced front-end interactions. Key features include a custom dynamic cursor, scroll-triggered reveal animations via Intersection Observer, parallax image effects, and a highly responsive smart navbar that blurs the background and reacts to scroll stops. It relies purely on Vanilla JavaScript and Tailwind CSS, keeping the codebase lightweight and performant without heavy external animation libraries.


## Getting Started

### Dependencies
* OS: Windows 10/11, macOS, or Linux.
* Node.js and npm installed (required to compile Tailwind CSS).
* A modern web browser (Chrome, Firefox, Safari, Edge).

### Installing
* Clone the repository to your local machine:
  ```bash
  git clone https://github.com/thi-nguyen167/tailwindcss-ceramics-landing-page.git
  ```
* Navigate into the project directory:
  ```bash
  cd tailwindcss-ceramics-landing-page
  ```

* Install the necessary npm packages:
  ```bash
  npm install
  ```

  
### Executing program
* To run the project locally and compile CSS changes, start the Tailwind CLI watcher:
  ```bash
  npx tailwindcss -i ./styles.css -o ./output.css --watch
  ```

* Open the index.html file in your web browser. Alternatively, use an extension like VS Code Live Server for automatic hot-reloading as you make changes.

### Help
* If you notice that your Tailwind classes are not applying to the HTML, ensure the Tailwind CLI watcher is actively running in your terminal.
* If the scroll animations feel laggy, verify that the requestAnimationFrame logic is intact in your script.js file.
  ```bash
  # Check if Tailwind CLI is running and watching for changes
  npm run dev # (If configured in package.json)
  ```

### Author
Thi Anh Thi Nguyen
[@thi-nguyen167](https://github.com/thi-nguyen167)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
* [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/tailwind-cli)
* [Google Fonts](https://fonts.google.com/)
* Inspiration from premium architectural and editorial design (Awwwards).
