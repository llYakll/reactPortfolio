# React Portfolio

This project is a single-page application portfolio built with React, showcasing the work samples of a web developer. The portfolio includes sections for "About Me," "Portfolio," "Contact," and "Resume," allowing potential employers to assess the developer's skills and experience.

## Live Demo

View the live demo of the portfolio [here](https://main--deluxe-nougat-dff37f.netlify.app/).

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## User Story

As an employer looking for candidates with experience building single-page applications, I want to view a potential employee's deployed React portfolio of work samples so that I can assess whether they're a good candidate for an open position.

## Acceptance Criteria

- The portfolio should be a single-page application.
- The portfolio should have a header, a section for content, and a footer.
- The header should display the developer's name and navigation with titles corresponding to different sections of the portfolio.
- The navigation titles should include "About Me," "Portfolio," "Contact," and "Resume," and the title corresponding to the current section should be highlighted.
- Clicking on a navigation title should display the corresponding section below the navigation without the page reloading, and the title should be highlighted.
- When the portfolio is loaded for the first time, the "About Me" title and section should be selected by default.
- The "About Me" section should display a recent photo or avatar of the developer and a short bio about them.
- The "Portfolio" section should display titled images of six of the developer's applications with links to both the deployed applications and the corresponding GitHub repositories.
- The "Contact" section should display a contact form with fields for a name, an email address, and a message. When moving the cursor out of a form field without entering text, a notification should indicate that the field is required. Entering an invalid email address should also trigger a notification.
- The "Resume" section should display a link to a downloadable resume and a list of the developer's proficiencies.
- The footer should display text or icon links to the developer's GitHub and LinkedIn profiles, as well as their profile on a third platform (Stack Overflow, Twitter).

## Features

- Single-page application portfolio
- Interactive navigation
- Dynamic content loading without page reloading
- Contact form validation
- Responsive design for mobile and desktop

## Technologies Used

- React
- HTML
- CSS
- JavaScript

## Deployment

The portfolio is deployed on Netlify. 
[View the live demo](https://main--deluxe-nougat-dff37f.netlify.app/).

## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please create a new issue or submit a pull request.
known issue: 
images are broken on deployment!
only one time is my project prop used in the portfolio component.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.