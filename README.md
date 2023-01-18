# CMS-style Tech Blog

## Description

This project is a CMS style Tech Blog where you can view users posts and comments. You will however need to be logged in in order to create a blog post or make comments. This was built to enhance my skills combining the front and back end of an application. I learned much more about how user logins work as well as using authorization to give certain permissions.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To begin the application you will need to run the following to set up the database:

    mysql -u [user] -p

Enter your password and then run:

    source db/schema.sql;
    exit

Once you've exited mysql, run the following to seed the database:

    npm run seed

You are now ready to start your server, do so using:

    npm start

## Usage

Please see live application ![here](INSERT URL).

![Screenshot of blog page](***********/ASSETS/SCREENSHOT.PNG***********)

## Credits

- bcrypt: https://www.npmjs.com/package/bcrypt
- dotenv: https://www.npmjs.com/package/dotenv
- Express.js: https://www.npmjs.com/package/express
- Handlebars: https://www.npmjs.com/package/express-handlebars
- Express Session: https://www.npmjs.com/package/express-session
- Insomnia: https://insomnia.rest/
- MySQL: https://www.mysql.com/
- NodeJS: https://nodejs.org/en/
- Sequelize: https://sequelize.org/

## License

See license [here](./LICENSE)

    MIT License

    Copyright (c) 2023 Syre11

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
