module.exports = {
    homePage : function () {
        const html = `
        <html>
            <title>
                Acme: Home
            </title>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
            </head>
            <body>
                <div class="container">
                    <h1>
                        Acme Web
                    </h1>
                    <ul class="nav nav-tabs" style="margin-bottom: 20px">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">
                            Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/employees" class="nav-link active">
                            Employees
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/contact" class="nav-link active">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <h2>
                        Welcome to the Home Page
                    </h2>
                    <div>
                        So looking forward to having you browser our site
                    </div>
                    <hr>
                </div>
            </body>
        </html>
        `
        return html;
    },

    employeesPage : function () {
        const html =`
        <html>
            <title>
                Acme: Employees
            </title>
            <head>
                <link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h1>
                        Acme Web
                    </h1>
                    <ul class="nav nav-tabs" style="margin-bottom: 20px">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">
                            Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/employees" class="nav-link active">
                            Employees
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/contact" class="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <h2>
                        <a href="/users/1">
                        Moe
                        </a>
                    </h2>
                    <div>Moe is our CEO!!!</div>
                    <h2>
                        <a href="/users/2">
                        Larry
                        </a>
                    </h2>
                    <div>Larry is our CTO!!!</div>
                    <h2>
                        <a href="/users/3">
                        Curly
                        </a>
                    </h2>
                    <div>Curly is the COO!!!</div>
                    <hr>
                </div>
            </body>
        </html>
        `
        return html;
    },
    
    contact : function () {
        const html = `
        <html>
            <head>
                <title>Acme: Contact</title>
                <link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h1>
                        Acme Web
                    </h1>
                    <ul class="nav nav-tabs" style="margin-bottom: 20px">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">
                            Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/employees" class="nav-link active">
                            Employees
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/contact" class="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <h2>Phone</h2>
                    <div>call us 212-555-1212</div>
                    <h2>Fax</h2>
                    <div>fax us 212-555-1212</div>
                    <hr>
                </div>
            </body>
        </html>
        `
        return html;
    }


}