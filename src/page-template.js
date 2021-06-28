const generateManager = manager => {
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
            <div class="flex-row justify-space-between">
    
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${manager.name}</h3>
                        <h3 class="portfolio-item-title text-light">ID: ${manager.id}</h3>
                        <h3 class="portfolio-item-title text-light">
                            Email: <a href ="mailto:${manager.email}">${manager.email}</a>
                        </h3>
                        <h3 class="portfolio-item-title text-light">Office Number: ${manager.officeNumber}</h3>
                    </div>
            </div>
        </section>
    `;
};    

const generateEngineers = engineerArray => {
    if(!engineerArray){
        return '';
    }
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Engineers</h2>
            <div class="flex-row justify-space-between">
            ${engineerArray
                .map(({name,id,email,github})=>{
                    return `
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h3 class="portfolio-item-title text-light">ID: ${id}</h3>
                        <h3 class="portfolio-item-title text-light">
                            Email: <a href ="mailto:${email}">${email}</a>
                        </h3>
                        <h3 class="portfolio-item-title text-light">
                            GitHub:<a href="https://github.com/${github}" target="_blank"> ${github}</a>
                        </h3>
                    </div>
                `;
                })
                .join('')}
            </div>
        </section>
    `;
}; 

const generateInterns = internArray => {
    if(!internArray){
        return '';
    }
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Interns</h2>
            <div class="flex-row justify-space-between">
            ${internArray
                .map(({name,id,email,school})=>{
                    return `
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h3 class="portfolio-item-title text-light">ID: ${id}</h3>
                        <h3 class="portfolio-item-title text-light">
                            Email: <a href ="mailto:${email}">${email}</a>
                        </h3>
                        <h3 class="portfolio-item-title text-light">Universit: ${school}</h3>
                    </div>
                `;
                })
                .join('')}
            </div>
        </section>
    `;
}; 

module.exports = templateData =>{

    const {engineers, interns, ...manager } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <title>Team Profile</title>
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>
    </body>
        
    <main class = "container my-5">
        ${generateManager(manager)}
        ${generateEngineers(engineers)}
        ${generateInterns(interns)}
    </main>
    </html>
    `
};