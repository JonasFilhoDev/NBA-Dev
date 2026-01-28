const botoesTimes = document.querySelectorAll('.conf-west button, .conf-east button');

botoesTimes.forEach(botao => {
    botao.addEventListener('click', () => {
        const img = botao.querySelector('img');

        const timeKey = img.alt.replace('logo-', '').toLowerCase().trim();

        const dados = informacoesTimes[timeKey];

        if (dados) {
            document.getElementById('nome-card').innerText = timeKey.toUpperCase();
            document.getElementById('logo-card').src = img.src;
            document.getElementById('info-cidade').innerText = `Cidade: ${dados.cidade}`;
            document.getElementById('info-titulos').innerText = `Títulos: ${dados.titulos}`;
            document.getElementById('info-rival').innerText = `Rival: ${dados.rival}`;

            const listaJogadores = document.getElementById('lista-jogadores');

            listaJogadores.innerHTML = dados.jogadores.map(j => `<li>${j}</li>`).join('');

            document.getElementById('card-time').classList.remove('hidden');
        }
    });
});


document.getElementById('close-card').addEventListener('click', () => {
    document.getElementById('card-time').classList.add('hidden');
});

const informacoesTimes = {
    "clippers": {
        cidade: "Los Angeles",
        titulos: 0,
        jogadores: ["Kawhi Leonard", "Chris Paul", "Blake Griffin", "Bob Mcdoo", "DeAndre Jordan"],
        rival: "Los Angeles Lakers"
    },
    "grizzlies": {
        cidade: "Memphis",
        titulos: 0,
        jogadores: ["Marc Gasol", "Mike Conley", "Zach Randolph", "Pau Gasol", "Tony Allen"],
        rival: "Dallas Mavericks"
    },
    "warriors": {
        cidade: "San Francisco",
        titulos: 7,
        jogadores: ["Stephen Curry", "Klay Thompson", "Draymond Green", "KRick Barry", "Wilt Chamberlain"],
        rival: "Cleveland Cavaliers"
    },
    "jazz": {
        cidade: "Salt Lake City",
        titulos: 0,
        jogadores: ["Karl Malone", "John Stockton", "Dominique Wilkins", "Adrian Dantley", "Pete Maravich"],
        rival: "Houston Rockets"
    },
    "kings": {
        cidade: "Sacramento",
        titulos: 1,
        jogadores: ["Chris Webber", "Sam Lacey", "Peja Stojakovic", "Mitch Richmond", "Oscar Robertson"],
        rival: "Golden State Warriors"
    },
    "lakers": {
        cidade: "Los Angeles",
        titulos: 17,
        jogadores: ["LeBron James", "Jerry West", "Magic Johnson", "Kobe Bryant", "Kareem Abdul-Jabbar"],
        rival: "Boston Celtics"
    },
    "mavericks": {
        cidade: "Dallas",
        titulos: 1,
        jogadores: ["Dirk Nowitzki", "Luka Doncic", "Jason Kidd", "Michael Finley", "Mark Aguirre"],
        rival: "San Antonio Spurs"
    },
    "new orleans": {
        cidade: "New Orleans",
        titulos: 0,
        jogadores: ["Anthony Davis", "Zion Williamson", "Chris Paul", "David West", "Jrue Holiday"],
        rival: "Miami Heat"
    },
    "nuggets": {
        cidade: "Denver",
        titulos: 0,
        jogadores: ["Nikola Jokic", "Alex English", "Dan Issel", "Carmelo Anthony", "David Thompson"],
        rival: "Utah Jazz"
    },
    "okc": {
        cidade: "Oklahoma City",
        titulos: 1,
        jogadores: ["Shai Gilgeous-Alexander", "James Harden", "Serge Ibaka", "Russell Westbrook", "Kevin Durant"],
        rival: "Portland Trail Blazers"
    },
    "portland": {
        cidade: "Portland",
        titulos: 0,
        jogadores: ["Damian Lillard", "Clyde Drexler", "Bill Walton", "Arvydas Sabonis", "Rasheed Wallace"],
        rival: "Oklahoma City Thunder"
    },
    "rockets": {
        cidade: "Houston",
        titulos: 2,
        jogadores: ["Hakeem Olajuwon", "Moses Malone", "James Harden", "Clyde Drexler", "Rudy Tomjanovich"],
        rival: "San Antonio Spurs"
    },
    "spurs": {
        cidade: "San Antonio",
        titulos: 5,
        jogadores: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "David Robinson", "Kawhi Leonard"],
        rival: "Dallas Mavericks"
    },
    "suns": {
        cidade: "Phoenix",
        titulos: 0,
        jogadores: ["Steve Nash", "Devin Booker", "Kevin Johnson", "Charles Barkley", "Shaw Marion"],
        rival: "San Antonio Spurs"
    },
    "timberwolves": {
        cidade: "Minneapolis",
        titulos: 0,
        jogadores: ["Kevin Garnett", "Karl-Anthony Towns", "Kevin Love", "Sam Cassell", "Anthony Edwards"],
        rival: "Memphis Grizzlies"
    },
    "76ers": {
        cidade: "Philadelphia",
        titulos: 3,
        jogadores: ["Wilt Chamberlain", "Julius Erving", "Allen Iverson", "Charles Barkley", "Moses Malone"],
        rival: "Boston Celtics"
    },
    "hawks": {
        cidade: "Atlanta",
        titulos: 1,
        jogadores: ["Dominique Wilkins", "Bob Pettit", "Pete Maravich", "Cliff Hagan", "Lou Hudson"],
        rival: "Orlando Magic"
    },
    "nets": {
        cidade: "Brooklyn",
        titulos: 0,
        jogadores: ["Julius Erving", "Jason Kidd", "Buck Williams", "Brook Lopez", "Vince Carter"],
        rival: "New York Knicks"
    },
    "bucks": {
        cidade: "Milwaukee",
        titulos: 2,
        jogadores: ["Kareem Abdul-Jabbar", "Giannis Antetokounmpo", "Sidney Moncrief", "Marques Johnson", "Oscar Robertson"],
        rival: "Chicago Bulls"
    },
    "bulls": {
        cidade: "Chicago",
        titulos: 6,
        jogadores: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman", "Derrick Rose", "Jerry Sloan"],
        rival: "Detroit Pistons"
    },
    "cavs": {
        cidade: "Cleveland",
        titulos: 1,
        jogadores: ["LeBron James", "Kyrie Irving", "Mark Price", "Brad Daugherty", "Kevin Love"],
        rival: "Golden State Warriors"
    },
    "celtics": {
        cidade: "Boston",
        titulos: 18,
        jogadores: ["Bill Russell", "Larry Bird", "John Havlicek", "Kevin McHale", "Bob Cousy"],
        rival: "Los Angeles Lakers"
    },
    "hornets": {
        cidade: "Charlotte",
        titulos: 0,
        jogadores: ["Larry Johnson", "Kemba Walker", "Alonzo Mourning", "Glen Rice", "Mugsy Bogues"],
        rival: "Orlando Magic"
    },
    "magic": {
        cidade: "Orlando",
        titulos: 0,
        jogadores: ["Shaquille O'Neal", "Penny Hardaway", "Dwight Howard", "Tracy McGrady", "Nick Anderson"],
        rival: "Miami Heat"
    },
    "heat": {
        cidade: "Miami",
        titulos: 3,
        jogadores: ["Dwyane Wade", "LeBron James", "Chris Bosh", "Shaquille O'Neal", "Alonzo Mourning"],
        rival: "New York Knicks"
    },
    "knicks": {
        cidade: "New York",
        titulos: 2,
        jogadores: ["Patrick Ewing", "Walt Frazier", "Willis Reed", "Dave DeBusschere", "Carmelo Anthony"],
        rival: "Brooklyn Nets"
    },
    "pacers": {
        cidade: "Indiana",
        titulos: 0,
        jogadores: ["Reggie Miller", "George McGinnis", "Paul George", "Jermaine O'Neal", "Tyrese Haliburton"],
        rival: "Detroit Pistons"
    },
    "pistons": {
        cidade: "Detroit",
        titulos: 3,
        jogadores: ["Isiah Thomas", "Joe Dumars", "Dennis Rodman", "Bill Laimbeer", "Ben Wallace"],
        rival: "Chicago Bulls"
    },
    "raptors": {
        cidade: "Toronto",
        titulos: 1,
        jogadores: ["Chris Bosh", "DeMar DeRozan", "Kyle Lowry", "Vince Carter", "Kawhi Leonard"],
        rival: "Philadelphia 76ers"
    },
    "wizards": {
        cidade: "Washington D.C.",
        titulos: 1,
        jogadores: ["John Wall", "Bradley Beal", "Earl Monroe", "Elvin Hayes", "Gus Johnson"],
        rival: "Cleveland Cavaliers"
    },    
};


window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const card = document.getElementById('card-time');
        if (!card.classList.contains('hidden')) {
            card.classList.add('hidden');
        }
    }
});