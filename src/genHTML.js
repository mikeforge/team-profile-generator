genHTML = (info) => {
    
    team = [];

    for (let i = 0; i < info.length; i++) {
        const employee = info[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const managerCard = genManager(employee);
            team.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = genEngineer(employee);
            team.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = genIntern(employee);
            team.push(internCard);
        }

    }

    const employeeCards = team.join('');
    const genTeam = genTeamPage(employeeCards);
    return genTeam;
}

const genTeamPage = (employeeCards) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Crimson+Pro">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1 class="header">Team Members</h1>
    </header>
    <div class="container-fluid">
    <div class="row"> 
    ${employeeCards}
    </div>
    </div>
    <script src="../index.js"></script>
</body>
</html>`;
}  


const genManager = (manager) => {
    return `
<div class="col">
        <div class="card">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager<span class="material-icons">
                </span></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
}


const genEngineer = (engineer) => {
    return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer<span class="material-icons">
                </span></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`;
}


const genIntern = (intern) => {
    return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern<span class="material-icons">
                </span>
                </h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
      </div>
</div>`;
}

module.exports = genHTML;