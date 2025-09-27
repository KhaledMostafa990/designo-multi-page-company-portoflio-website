# Designo agency portfolio website

A solution to the [Designo agency website **Guru** challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT).

## Table of contents

- [The challenge](#the-challenge)
- [Screenshots](#screenshots)
- [Links](#links)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Useful resources](#useful-resources)

## The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

## Screenshots

![Designo Home](./screenshot/designo_home.png)
![Responsive home screen](./screenshot/responsive-home-screen.png)
![Send contact form](./screenshot/contact-form-send.png)
![Contact receive ](./screenshot/contact-receive.png)

### Links

- Live Site URL: [designo-company-portfolio.vercel.app](https://designo-portfolio-website.vercel.app/)
- Solution URL: [www.frontendmentor.io](https://www.frontendmentor.io/solutions/designo-multi-page-website-portfolio-mfxrYwp8Wm)

## Getting started

1. Clone the repository to your local machine from your terminal:

```
git clone https://github.com/KhaledMostafa990/designo-multi-page-company-portoflio-website.git
```

This will create a copy of the project on your local machine.

2. Navigate to the project directory:

```
cd <your-repo-name>
```

This will change your current working directory to the project directory.

3. Install the dependencies:

```
npm install
```

This will install all the necessary dependencies required for running the project.

4. Start the development server:

```
npm run dev
```

5. Setup .env.local file to store your sercet values for contact form

This will start the development server at http://localhost:3000.

For Mac

```
touch .env.local
```

For Win

```
type nul > .env.local
```

To set up your email environment variables, you'll need to gather the necessary information for the following variables:

```
SMTP_HOST= SMTP server hostname: smtp.gmail.com for Gmail.
SMTP_PORT= The SMTP server port number. For example, 587 for Gmail.
SMTP_USERNAME= Your email account username.
SMTP_PASSWORD= Your email account password.
SMTP_FROM_ADDRESS= The email address you want to use as the sender.
SMTP_TO_ADDRESS= The email address you want to use as the recipient.
```

## Built with

- Semantic HTML5 markup
- CSS
- Js
- Mobile-first workflow
- React - JS library
- Next.js 13 - React framework
- TawilindCss - CSS Library for styles
- Formik.js, libphonenumber-js and Yup - for contact form
- nodemailer.js - for send contact form information

## Useful resources

- [Elzero Web School](https://www.youtube.com/@ElzeroWebSchool) - for Arab developers
- [Maxmilian Academind ](https://www.youtube.com/@academind) - for Javascript
- [FrontendExpert & AlgoExpert](https://www.algoexpert.io/frontend) - for frontend developers
- [Meta Frontend Developer](https://www.coursera.org/professional-certificates/meta-front-end-developer) - for frontend developers
- [Dave Grey](https://www.youtube.com/@DaveGrayTeachesCode) - for Typescript
- [Traversy Media](https://www.youtube.com/@TraversyMedia) - for Javasciprt and CSS
- [TailwindCSS](https://tailwindcss.com/) - for TailwindCSS
- [Linkedin Learning](https://www.linkedin.com/learning/) - for every developers
