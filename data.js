class NBA {
    constructor(teamname, location){
        this._teamname = teamname
        this._location = location 
    }
    get teamname(){
        return this._teamname
    }
    get location(){
        return this._location
    }
}
class Roster extends NBA {
    constructor(teamname, location, pg, sg, sf, pf, c, sixthMan){
        super(teamname, location)
        this._pg = pg
        this._sg = sg
        this._sf = sf
        this._pf = pf
        this._c = c
        this._sixthMan = sixthMan
    }
       // Getter function for pg
       get pg() {
        return this._pg;
    }

    // Getter function for sg
    get sg() {
        return this._sg;
    }

    // Getter function for sf
    get sf() {
        return this._sf;
    }

    // Getter function for pf
    get pf() {
        return this._pf;
    }

    // Getter function for c
    get c() {
        return this._c;
    }

    // Getter function for sixthMan
    get sixthMan() {
        return this._sixthMan;
    }
}



 class Players {
    constructor(name, position, yearsPlayed, height, weight, ppg, reb, ast, stl, blk, fg, threePerc, funFact, img){
        this._name = name
        this._position = position
        this._yearsPlayed = yearsPlayed
        this._height = height
        this._weight = weight
        this._ppg = ppg
        this._reb = reb
        this._ast = ast
        this._stl = stl
        this._blk = blk
        this._fg = fg
        this._threePerc = threePerc
        this._funFact = funFact
        this._img = img
    }
    get name(){
        return this._name
    }
    get position(){
        return this._position
    }
    get yearsPlayed(){
        return this._yearsPlayed
    }
    get height(){
        return this._height
    }
    get weight(){
        return this._weight
    }
    get ppg(){
        return this._ppg
    }
    get ast(){
        return this._ast
    }
    get reb(){
        return this._reb
    }
    get stl(){
        return this._stl
    }
    get blk(){
        return this._blk
    }
    get fg(){
        return this._fg
    }
    get threePerc(){
        return this._threePerc
    }
    get funFact(){
        return this._funFact
    }
    get img(){
        return this._img
    }
}



//rosters 
//atlanta hawks
//PG
const traeYoung = new Players('trae young', 'point guard', '2018-Present', '6\'1"', '180lbs', 25.6, 3.6, 9.4, 1.0, 0.1, '43.6%', '35.1%', 'He has averaged 25.6 points, 9.4 assists and 3.6 rebounds in 372 regular-season games. He was selected to play in 2 All-Star games.','https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fatlanta-hawks-trae-young2021-min--icdptpfr.png&w=750&h=750&f=webp')

//SG
const dominiqueWilkins = new Players('dominique wilkins', 'shooting guard/small forward', '1982-1999','6\'8"', '230lbs', 24.8, 6.7, 2.5, 1.3, 0.6, '46.1%', '31.9%', 'He averaged 26.4 points, 16.2 rebounds and 3.0 assists in 792 regular-season games. He was selected to play in 11 All-Star games. He won the Rookie of the Year award, 2 MVP awards and 1 NBA championship. He was inducted into the Hall of Fame in 1971.', 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fatlanta-hawks-dominique-wilkins-min--iec_iklw.png&w=750&h=750&f=webp')

//SF
const louHudson = new Players('lou hudson', 'small forward/shooting guard', '1966-1979', '6\'5"', '210lbs', 20.2, 4.4, 2.7, 1.4, 0.3, '48.9%', 'n/a', 'He averaged 20.2 points, 4.4 rebounds and 2.7 assists in 890 regular-season games. He was selected to play in 6 All-Star games. He was inducted into the Hall of Fame in 2023.', 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fteams%2FAtlanta-Hawks-Silhouette.png&w=750&h=750&f=webp')

//PF
const bobPettit = new Players('bob pettit', 'power forward/center', '1954-1965', '6\'9"', '205lbs', 26.4,	16.2, 3.0, 'unknown', 'unknown', '43.6%', 'n/a', 'He averaged 26.4 points, 16.2 rebounds and 3.0 assists in 792 regular-season games. He was selected to play in 11 All-Star games. He won the Rookie of the Year award, 2 MVP awards and 1 NBA championship. He was inducted into the Hall of Fame in 1971.', 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Faa9307cf-9d19-11e6-8d66-0a6f65fc9427.png&w=750&h=750&f=webp')


//Center 
const dikembeMutombo = new Players('dikembe mutombo', 'center/power forward', '1991-2007', '7\'2"', '260lbs', 9.8, 10.3, 1.0, 0.4, 2.8, '51.8%', '0%', 'He averaged 10.3 rebounds, 9.8 points and 2.8 blocks in 1,196 regular-season games. He was selected to play in 8 All-Star games, and won 4 Defensive Player of the Year awards. He was inducted into the Hall of Fame in 2015.', 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdikembe-mutombo-denver-nuggets-min--bnzojgkj.png&w=750&h=750&f=webp')

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Boston Celtics 
const bobCousy = new Players(
    'Bob Cousy',
    'Point Guard',
    '1950–1970',
    '6\'1"',
    '175 lbs',
    18.4,
    5.2,
    7.5,
    'unknown',
    'unknown',
    '37.5%',
    'n/a',
    'Averaged 18.4 points, 7.5 assists, and 5.2 rebounds in 924 regular-season games. He played a key role in winning 6 NBA championships and was selected to 13 All-Star games. He is a Hall of Famer since 1971.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbob-cousy-boston-celtics-min--cm2fcatz.png&w=750&h=750&f=webp'
);

const johnHavlicek = new Players(
    'John Havlicek',
    'Shooting Guard / Small Forward',
    '1962–1978',
    '6\'5"',
    '203 lbs',
    20.8,
    6.3,
    4.8,
    1.2,
    0.3,
    '43.9%',
    'n/a',
    'Averaged 20.8 points, 6.3 rebounds, and 4.8 assists in 1,270 regular-season games. He played a key role in winning 8 NBA championships and was selected to 13 All-Star games. He is a Hall of Famer since 1984.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjohn-havlicek-boston-celtics-min--nguimcnj.png&w=750&h=750&f=webp'
);

const larryBird = new Players(
    'Larry Bird',
    'Small Forward / Power Forward',
    '1979–1992',
    '6\'9"',
    '220 lbs',
    24.3,
    10.0,
    6.3,
    1.7,
    0.8,
    '49.6%',
    '37.6%',
    'Averaged 24.3 points, 10.0 rebounds, and 6.3 assists in 897 regular-season games. He won the Rookie of the Year award, 3 MVP awards, 2 Finals MVP awards, and 3 NBA championships. He is a Hall of Famer since 1998.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Flarry-bird-boston-celtics-min--bnnxfz4e.png&w=750&h=750&f=webp'
);

const kevinMchale = new Players(
    'Kevin McHale',
    'Power Forward / Center',
    '1980–1993',
    '6\'10"',
    '210 lbs',
    17.9,
    7.3,
    1.7,
    0.4,
    1.7,
    '55.4%',
    '26.1%',
    'Averaged 17.9 points and 7.3 rebounds in 971 regular-season games. He won 2 Sixth Man of the Year awards and 3 NBA championships. He is a Hall of Famer since 1999.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkevin-mchale-boston-celtics-min--8wquc-sq.png&w=750&h=750&f=webp'
);

const billRussell = new Players(
    'Bill Russell',
    'Center / Power Forward',
    '1956–1969',
    '6\'10"',
    '215 lbs',
    15.1,
    22.5,
    4.3,
    'unknown',
    'unknown',
    '44%',
    'n/a',
    'Averaged 22.5 rebounds, 15.1 points, and 4.3 assists in 963 regular-season games. He won 5 MVP awards and 11 NBA championships. He is a Hall of Famer since 1975.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fboston-celtics-bill-russell2022-min--49yqiroh.png&w=750&h=750&f=webp'
);

const samJones = new Players(
    'Sam Jones',
    'Shooting Guard',
    '1957–1969',
    '6\'4"',
    '198 lbs',
    17.7,
    4.9,
    2.5,
    'unknown',
    'unknown',
    '45.6%',
    'n/a',
    'Averaged 17.7 points, 4.9 rebounds, and 2.5 assists in 871 regular-season games. He won 10 NBA championships with his team. He is a Hall of Famer.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fsam-jones-boston-celtics-min--3mjatwmw.png&w=750&h=750&f=webp'
);


////////////////////////////////////////////////////////////////////////////////////////////////////////

//brooklyn nets
const jasonKidd = new Players(
    'Jason Kidd',
    'Point Guard',
    '1994–2013',
    '6\'4"',
    '210 lbs',
    12.6,
    6.3,
    8.7,
    1.9,
    0.3,
    '40%',
    '34.9%',
    'Averaged 12.6 points, 8.7 assists, and 6.3 rebounds in 1,391 regular-season games. He was selected to play in 10 All-Star games. He won the Rookie of the Year award and 1 NBA championship. He was inducted into the Hall of Fame in 2018.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjason-kidd-new-jersey-nets-min--tgtn8qrc.png&w=750&h=750&f=webp'
);

const vinceCarter = new Players(
    'Vince Carter',
    'Shooting Guard / Small Forward',
    '1998–2020',
    '6\'6"',
    '220 lbs',
    16.7,
    4.3,
    3.1,
    1.0,
    0.6,
    '43.5%',
    '37.1%',
    'Averaged 16.7 points, 4.3 rebounds, and 3.1 assists in 1,541 regular-season games. He was selected to play in 8 All-Star games and won the Rookie of the Year award.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftoronto-raptors-vince-carter-01-compressor--kwbjhshq.png&w=750&h=750&f=webp'
);

const juliusIrving = new Players(
    'Julius Irving',
    'Small Forward / Shooting Guard',
    '1976–1987',
    '6\'6"',
    '220 lbs',
    22.0,
    6.7,
    3.9,
    1.8,
    1.5,
    '50.7%',
    '26.1%',
    'Averaged 22.0 points, 6.7 rebounds, and 3.9 assists in 836 regular-season games. He was selected to play in 11 All-Star games. He won 1 MVP award and 1 NBA championship. He was inducted into the Hall of Fame in 1993.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjulius-erving-philladelphia-76ers1-min--hwetcjbp.png&w=750&h=750&f=webp'
);

const drazenPetrovic = new Players(
    'Drazen Petrovic',
    'Shooting Guard / Small Forward',
    '1989–1993',
    '6\'5"',
    '195 lbs',
    15.4,
    2.3,
    2.4,
    0.9,
    0.1,
    '50.6%',
    '43.7%',
    'Averaged 15.4 points, 2.4 assists, and 2.3 rebounds in 290 regular-season games. He was inducted into the Hall of Fame in 2002.',
    'https://cdn.vox-cdn.com/thumbor/yuscCIGCJwIUh6BvujDrmt0_S20=/0x0:2400x3600/1200x800/filters:focal(998x742:1382x1126)/cdn.vox-cdn.com/uploads/chorus_image/image/71015109/176924971.0.jpg'
);

const kevinDurant = new Players(
    'Kevin Durant',
    'Power Forward / Small Forward',
    '2007–present',
    '6\'11"',
    '240 lbs',
    27.3,
    7.0,
    4.4,
    1.1,
    1.1,
    '49.9%',
    '38.7%',
    'He has averaged 27.3 points, 7.0 rebounds, and 4.4 assists in 1,005 regular-season games. He was selected to play in 13 All-Star games. He has won the Rookie of the Year award, 1 MVP award, 2 Finals MVP awards, and 2 NBA championships.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fphoenix-suns-kevin-durant-min--f7bszj9o.png&w=750&h=750&f=webp'
);

const deronWilliams = new Players(
    'Deron Williams',
    'Point Guard',
    '2005–2017',
    '6\'3"',
    '210 lbs',
    16.3,
    3.1,
    8.1,
    1.0,
    0.2,
    '44.3%',
    '35.8%',
    'Averaged 16.3 points, 8.1 assists, and 3.1 rebounds in 845 regular-season games. He was selected to play in 3 All-Star games.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fderon-williams-brooklyn-nets-min--u38ou45o.png&w=750&h=750&f=webp'
);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//charlotte hornets

//pg
const kembaWalker = new Players(
    'Kemba Walker',
    'Point Guard',
    '2011–2023',
    '6\'0"',
    '184 lbs',
    19.3,
    3.8,
    5.3,
    1.2,
    0.4,
    '41.8%',
    '36%',
    'He has averaged 19.3 points, 5.3 assists, and 3.8 rebounds in 750 regular-season games. He was selected to play in 4 All-Star games.'
);

const dellCurry = new Players(
    'Dell Curry',
    'Shooting Guard',
    '1986–2002',
    '6\'5"',
    '205 lbs',
    11.7,
    2.4,
    1.8,
    0.9,
    0.2,
    '45.7%',
    '40.2%',
    'He averaged 11.7 points and 2.4 rebounds in 1,083 regular-season games. He won 1 Sixth Man of the Year award. His son is considered one of the best point guards of all time.',
    'https://cdn.nba.com/headshots/nba/latest/1040x760/209.png'
);

const glenRice = new Players(
    'Glen Rice',
    'Small Forward',
    '1989–2004',
    '6\'8"',
    '228 lbs',
    18.3,
    4.4,
    2.1,
    1.0,
    0.3,
    '45.6%',
    '40.0%',
    'He averaged 18.3 points, 4.4 rebounds, and 2.1 assists in 1,000 regular-season games. He was selected to play in 3 All-Star games and won 1 NBA championship.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fglen-rice-miami-heat-min--oc6ogz0n.png&w=750&h=750&f=webp'
);

const larryJohnson = new Players(
    'Larry Johnson',
    'Power Forward / Small Forward',
    '1991–2001',
    '6\'7"',
    '235 lbs',
    16.2,
    7.5,
    3.3,
    0.7,
    0.4,
    '48.4%',
    '33.2%',
    'He averaged 16.2 points, 7.5 rebounds, and 3.3 assists in 707 regular-season games. He was selected to play in 2 All-Star games and won the Rookie of the Year award.'
);

const alonzoMourning = new Players(
    'Alonzo Mourning',
    'Center / Power Forward',
    '1992–2008',
    '6\'10"',
    '261 lbs',
    17.1,
    8.5,
    1.1,
    0.5,
    2.8,
    '52.7%',
    '24.7%',
    'NBA Champion (2006), 2x Defensive Player Of The Year (1999, 2000), 7x All-Star (1994, 1995, 1996, 1997, 2000, 2001, 2002), All-NBA 1st Team (1999), All-NBA 2nd Team (2000), All-Rookie 1st Team (1993)'
);

const tonyParker = new Players(
    'Tony Parker',
    'Point Guard',
    '2001–2019',
    '6\'2"',
    '185 lbs',
    15.5,
    2.7,
    5.6,
    0.9,
    0.1,
    '49.1%',
    '32.6%',
    'Averaged 15.5 points, 5.6 assists, and 2.7 rebounds in 1,254 regular-season games. Won four NBA championships with the San Antonio Spurs.',
    'tony_parker.jpg'
);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//chicago bulls 

const derrickRose = new Players(
    "Derrick Rose",
    "Point Guard",
    "2008–2016",
    "6'3\"",
    "200 lbs",
    19.5,
    3.7,
    6.0,
    0.8,
    0.3,
    45.2,
    30.2,
    "The youngest player to win the NBA MVP award has a Rose in his name.",
    "derrick_rose.jpg"
);

const michaelJordan = new Players(
    "Michael Jordan",
    "Shooting Guard",
    "1984–1993, 1995–1998",
    "6'6\"",
    "216 lbs",
    30.1,
    6.2,
    5.3,
    2.3,
    0.8,
    49.7,
    32.7,
    "Known for his iconic 'flu game' in the NBA Finals.",
    "michael_jordan.jpg"
);

const scottiePippen = new Players(
    "Scottie Pippen",
    "Small Forward",
    "1987–1998, 2003–2004",
    "6'8\"",
    "228 lbs",
    17.7,
    6.7,
    5.3,
    2.0,
    0.8,
    47.3,
    32.6,
    "His versatility earned him the nickname 'No Tippin' Pippen.'",
    "scottie_pippen.jpg"
);



// Add two more players for the Power Forward and Center positions
const dennisRodman = new Players(
    "Dennis Rodman",
    "Power Forward",
    "1995–1998",
    "6'7\"",
    "228 lbs",
    5.2,
    15.3,
    1.8,
    0.7,
    0.6,
    52.1,
    23.3,
    "Led the league in rebounds per game for seven consecutive seasons.",
    "dennis_rodman.jpg"
);

const joakimNoah = new Players(
    "Joakim Noah",
    "Center",
    "2007–2016",
    "6'11\"",
    "230 lbs",
    8.8,
    9.0,
    2.8,
    1.0,
    1.4,
    49.5,
    30.0,
    "Named NBA Defensive Player of the Year twice (2014, 2015).",
    "joakim_noah.jpg"
);

const toniKukoc = new Players(
    "Toni Kukoc",
    "Small Forward / Power Forward",
    "1993–2000",
    "6'10\"",
    "192 lbs",
    14.1,
    4.8,
    4.2,
    1.1,
    0.5,
    46.3,
    32.6,
    "Nicknamed 'The Waiter' because he always delivers.",
    "toni_kukoc.jpg"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cleveland Cavs 
const kyrieIrving = new Players(
    'Point Guard',
    'Kyrie Irving',
    '2011–present',
    '6\'3"',
    '195 lbs',
    22.5,
    3.7,
    5.7,
    1.3,
    0.5,
    '48.7%',
    '39.0%',
    'Averaged 22.5 points, 5.7 assists, and 3.7 rebounds in 381 regular-season games. Known for exceptional ball-handling and clutch performances, this player won an NBA championship in 2016.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkyrie-irving-brooklyn-nets-min--9obzm4cp.png&w=750&h=750&f=webp'
);

const markPrice = new Players(
    'Shooting Guard',
    'Mark Price',
    '1986–1998',
    '6\'0"',
    '170 lbs',
    15.2,
    2.6,
    6.7,
    1.2,
    0.2,
    '47.2%',
    '40.2%',
    'Averaged 15.2 points, 6.7 assists, and 2.6 rebounds in 722 regular-season games. Recognized as one of the best free-throw shooters in history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmark-price-cleveland-cavaliers-min--1dfjhtzo.png&w=750&h=750&f=webp'
);

const lebronJamesCavs = new Players(
    'Small Forward / Power Forward',
    'LeBron James',
    '2003–present',
    '6\'9"',
    '250 lbs',
    27.0,
    7.4,
    7.4,
    1.6,
    0.8,
    '50.4%',
    '34.5%',
    'Averaging 27.0 points, 7.4 rebounds, and 7.4 assists in over 1,300 regular-season games. Led the team to 1 NBA championship and selected to 16 All-Star games.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Flebron-james-cleveland-cavaliers-min--gpoz3jnb.png&w=750&h=750&f=webp'
);

const larryNance = new Players(
    'Power Forward',
    'Larry Nance',
    '1981–1994',
    '6\'10"',
    '205 lbs',
    17.1,
    8.0,
    2.6,
    1.6,
    2.2,
    '54.7%',
    '27.3%',
    'Averaged 17.1 points, 8.0 rebounds, and 2.6 assists in 768 regular-season games. Known for shot-blocking abilities.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Flarry-nance-cleveland-cavaliers-min--8kldshsb.png&w=750&h=750&f=webp'
);

const zydrunasIlgauskas = new Players(
    'Center',
    'Zydrunas Ilgauskas',
    '1997–2011',
    '7\'3"',
    '238 lbs',
    13.0,
    7.3,
    1.2,
    0.5,
    1.6,
    '47.7%',
    '32.2%',
    'Averaged 13.0 points, 7.3 rebounds, and 1.2 assists in 843 regular-season games. A two-time NBA All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fzydrunas-ilgauskas-cleveland-cavaliers-min--zbl0bnf7.png&w=750&h=750&f=webp'
);

// Sixth Man
const bradDaugherty = new Players(
    'Center',
    'Brad Daugherty',
    '1986–1994',
    '7\'0"',
    '245 lbs',
    19.0,
    9.5,
    3.7,
    0.8,
    1.1,
    '53.2%',
    '35.3%',
    'Averaged 19.0 points, 9.5 rebounds, and 3.7 assists in 548 regular-season games. A five-time NBA All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbrad-daugherty-cleveland-cavaliers-min--r6wvhfp9.png&w=750&h=750&f=webp'
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////

//dallas mavericks
const derrickHarper = new Players(
    'Point Guard',
    'Derrick Harper',
    '1983–1999',
    '6\'4"',
    '185 lbs',
    15.3,
    3.0,
    5.9,
    1.2,
    0.3,
    '46.6%',
    '33.1%',
    'Averaged 15.3 points, 5.9 assists, and 3.0 rebounds in 1,199 regular-season games. Known for his defensive skills and longevity in the league.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fderrick-harper-dallas-mavericks-min--z9uavboi.png&w=750&h=750&f=webp'
);

const jimJackson = new Players(
    'Shooting Guard',
    'Jim Jackson',
    '1992–2006',
    '6\'6"',
    '220 lbs',
    14.3,
    4.7,
    3.2,
    1.0,
    0.3,
    '43.7%',
    '36.2%',
    'Averaged 14.3 points, 3.2 assists, and 4.7 rebounds in 885 regular-season games. Contributed to multiple teams during his career.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjim-jackson-dallas-mavericks-min--7jxriwzd.png&w=750&h=750&f=webp'
);

const lukaDoncic = new Players(
    'Small Forward',
    'Luka Doncic',
    '2018–present',
    '6\'7"',
    '230 lbs',
    25.7,
    8.4,
    7.7,
    1.0,
    0.5,
    '45.7%',
    '33.5%',
    'Averaging 25.7 points, 7.7 assists, and 8.4 rebounds in his young career. A rising star known for his all-around skills and leadership on the court.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fluka-doncic-dallas-mavericks-min--6jq6pq7v.png&w=750&h=750&f=webp'
);

const markAguirre = new Players(
    'Power Forward',
    'Mark Aguirre',
    '1981–1994',
    '6\'6"',
    '232 lbs',
    20.0,
    5.0,
    3.1,
    1.0,
    0.3,
    '48.4%',
    '29.8%',
    'Averaged 20.0 points, 3.1 assists, and 5.0 rebounds in 923 regular-season games. Won two NBA championships during his career.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmark-aguirre-dallas-mavericks-min--9vntddhy.png&w=750&h=750&f=webp'
);

const dirkNowitzki = new Players(
    'Center',
    'Dirk Nowitzki',
    '1998–2019',
    '7\'0"',
    '245 lbs',
    20.7,
    7.5,
    2.4,
    0.8,
    0.8,
    '47.0%',
    '38.0%',
    'Averaged 20.7 points, 7.5 rebounds, and 2.4 assists in 1,522 regular-season games. An NBA legend whos recognized for his loyalty and considered the greatest player for his franchsise ever.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdirk-nowitzki-dallas-mavericks-min--16iaq3zj.png&w=750&h=750&f=webp'
);

// Sixth Man
const michaelFinley = new Players(
    'Sixth Man',
    'Michael Finley',
    '1995–2010',
    '6\'7"',
    '215 lbs',
    15.7,
    4.4,
    2.9,
    1.0,
    0.4,
    '44.6%',
    '37.3%',
    'Averaged 15.7 points, 2.9 assists, and 4.4 rebounds in 1,103 regular-season games. A two-time NBA All-Star known for his scoring ability.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmichael-finley-dallas-mavericks-min--ddnwvl0o.png&w=750&h=750&f=webp'
);


////////////////////////////////////////////////////////////////////////////////////////////////////////////

//denver nuggets 
const fatLever = new Players(
    'Point Guard',
    'Fat Lever',
    '1982–1994',
    '6\'3"',
    '170 lbs',
    13.9,
    6.0,
    6.2,
    2.2,
    0.4,
    '43.4%',
    '30.6%',
    'Averaged 13.9 points, 6.2 assists, and 6.0 rebounds in 937 regular-season games. Known for his all-around skills and triple-double performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ffat-lever-denver-nuggets-min--1vurq6i6.png&w=750&h=750&f=webp'
);

const davidThompson = new Players(
    'Shooting Guard',
    'David Thompson',
    '1975–1984',
    '6\'4"',
    '195 lbs',
    22.1,
    3.8,
    3.3,
    1.4,
    0.6,
    '50.5%',
    '33.3%',
    'Averaged 22.1 points, 3.3 assists, and 3.8 rebounds in 592 regular-season games. A five-time NBA All-Star known for his scoring ability and athleticism.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdavid-thompson-denver-nuggets-min--m8vhhhoz.png&w=750&h=750&f=webp'
);

const carmeloAnthony = new Players(
    'Small Forward',
    'Carmelo Anthony',
    '2003–present',
    '6\'7"',
    '238 lbs',
    24.0,
    6.5,
    3.1,
    1.0,
    0.5,
    '44.9%',
    '34.5%',
    'Averaging 24.0 points, 3.1 assists, and 6.5 rebounds in his illustrious career. A 10-time NBA All-Star known for his scoring prowess and versatility.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fcarmelo-anthony-denver-nuggets-min--arndhvmd.png&w=750&h=750&f=webp'
);

const alexEnglish = new Players(
    'Power Forward',
    'Alex English',
    '1976–1991',
    '6\'7"',
    '190 lbs',
    21.5,
    5.5,
    3.6,
    1.6,
    0.6,
    '50.7%',
    '21.5%',
    'Averaged 21.5 points, 3.6 assists, and 5.5 rebounds in 1,193 regular-season games. An eight-time NBA All-Star and the Nuggets\' all-time leading scorer.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Falex-english-denver-nuggets-min--5sw9f5q4.png&w=750&h=750&f=webp'
);

const nikolaJokic = new Players(
    'Center',
    'Nikola Jokic',
    '2015–present',
    '7\'0"',
    '284 lbs',
    19.4,
    10.6,
    7.7,
    1.4,
    0.6,
    '52.4%',
    '34.4%',
    'Averaging 19.4 points, 7.7 assists, and 10.6 rebounds. An NBA MVP and three-time NBA All-Star known for his passing and versatility.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fnikola-jokic-denver-nuggets-min--ft1xp1m9.png&w=750&h=750&f=webp'
);

// Sixth Man
const allenIverson = new Players(
    'Sixth Man',
    'Allen Iverson',
    '1996–2010',
    '6\'0"',
    '165 lbs',
    26.7,
    3.7,
    6.2,
    2.2,
    0.2,
    '42.5%',
    '31.3%',
    'Averaged 26.7 points, 6.2 assists, and 3.7 rebounds in 914 regular-season games. A cultural icon and an 11-time NBA All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fallen-iverson-denver-nuggets-min--myiho1d9.png&w=750&h=750&f=webp'
);


////////////////////////////////////////////////////////////////////////////////////////////////////////

//detroit pistons 
const isiahThomas = new Players(
    'Point Guard',
    'Isiah Thomas',
    '1981–1994',
    '6\'1"',
    '180 lbs',
    19.2,
    3.6,
    9.3,
    1.9,
    0.3,
    '45.2%',
    '29.0%',
    'Averaged 19.2 points, 9.3 assists, and 3.6 rebounds in 979 regular-season games. A 12-time NBA All-Star and two-time NBA champion known for his leadership and clutch performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fisiah-thomas-detroit-pistons-min--pc3yfpc5.png&w=750&h=750&f=webp'
);

const chaunceyBillups = new Players(
    'Shooting Guard',
    'Chauncey Billups',
    '1997–2014',
    '6\'3"',
    '210 lbs',
    15.2,
    2.9,
    5.4,
    1.0,
    0.2,
    '41.5%',
    '38.8%',
    'Averaged 15.2 points, 5.4 assists, and 2.9 rebounds in 1,043 regular-season games. A five-time NBA All-Star and NBA Finals MVP known for his leadership and clutch performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fchauncey-billups-detroit-pistons-min--zyhpfdim.png&w=750&h=750&f=webp'
);

const joeDumars = new Players(
    'Small Forward',
    'Joe Dumars',
    '1985–1999',
    '6\'3"',
    '190 lbs',
    16.1,
    2.2,
    4.5,
    0.9,
    0.4,
    '46.0%',
    '38.2%',
    'Averaged 16.1 points, 4.5 assists, and 2.2 rebounds in 1,018 regular-season games. A six-time NBA All-Star and two-time NBA champion known for his defensive skills and leadership.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjoe-dumars-detroit-pistons-min--yfkydoux.png&w=750&h=750&f=webp'
);

const grantHill = new Players(
    'Power Forward',
    'Grant Hill',
    '1994–2013',
    '6\'8"',
    '225 lbs',
    16.7,
    6.0,
    4.1,
    1.2,
    0.6,
    '48.3%',
    '31.3%',
    'Averaged 16.7 points, 4.1 assists, and 6.0 rebounds in 1,026 regular-season games. A seven-time NBA All-Star and one of the most versatile forwards of his era.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fgrant-hill-detroit-pistons-min--v5ibyr6b.png&w=750&h=750&f=webp'
);

const benWallace = new Players(
    'Center',
    'Ben Wallace',
    '1996–2012',
    '6\'9"',
    '240 lbs',
    5.7,
    9.6,
    1.3,
    1.3,
    2.0,
    '47.4%',
    '14.3%',
    'Averaged 5.7 points, 9.6 rebounds, and 1.3 blocks in 1,088 regular-season games. A four-time NBA Defensive Player of the Year and NBA champion known for his defensive prowess.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fben-wallace-detroit-pistons-min--oiywsy7b.png&w=750&h=750&f=webp'
);

const richardHamilton = new Players(
    'Sixth Man',
    'Richard Hamilton',
    '1999–2013',
    '6\'6"',
    '185 lbs',
    17.1,
    3.4,
    3.4,
    1.0,
    0.2,
    '44.9%',
    '34.5%',
    'Averaged 17.1 points, 3.4 assists, and 3.4 rebounds in 921 regular-season games. An integral part of his teams\' 2004 NBA championship run, known for his scoring ability and clutch performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Frichard-hamilton-detroit-pistons-min--4uq5dfk4.png&w=750&h=750&f=webp'
);


///////////////////

//golden state warriors
const stephCurry = new Players(
    'Point Guard',
    'Stephen Curry',
    '2009–present',
    '6\'3"',
    '185 lbs',
    24.2,
    4.5,
    6.5,
    1.7,
    0.2,
    '47.7%',
    '43.4%',
    'Averaged 24.2 points, 6.5 assists, and 4.5 rebounds in 762 regular-season games. A two-time NBA MVP and three-time NBA champion, known for revolutionizing the game with his exceptional shooting.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fstephen-curry-golden-state-warriors-min--44h5ykdb.png&w=750&h=750&f=webp'
);

const chrisMullin = new Players(
    'Shooting Guard',
    'Chris Mullin',
    '1985–2001',
    '6\'6"',
    '200 lbs',
    18.2,
    4.1,
    3.5,
    1.6,
    0.8,
    '50.9%',
    '38.4%',
    'Averaged 18.2 points, 3.5 assists, and 4.1 rebounds in 986 regular-season games. A five-time NBA All-Star and Olympic gold medalist, known for his scoring and leadership.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fchris-mullin-golden-state-warriors-min--45uzrsdn.png&w=750&h=750&f=webp'
);

const kevinDurantWarriors = new Players(
    'Small Forward',
    'Kevin Durant',
    '2007–present',
    '6\'10"',
    '240 lbs',
    27.3,
    7.0,
    4.4,
    1.1,
    1.1,
    '49.9%',
    '38.7%',
    'Averaged 27.3 points, 7.0 rebounds, and 4.4 assists in 1,005 regular-season games. A two-time NBA Finals MVP and two-time NBA champion, known for his scoring versatility and defensive skills.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkevin-durant-golden-state-warriors-min--th4hkykq.png&w=750&h=750&f=webp'
);

const rickBarry = new Players(
    'Power Forward',
    'Rick Barry',
    '1965–1980',
    '6\'7"',
    '205 lbs',
    24.8,
    6.7,
    4.9,
    2.0,
    0.5,
    '45.7%',
    '33.6%',
    'Averaged 24.8 points, 4.9 assists, and 6.7 rebounds in 794 regular-season games. An eight-time NBA All-Star and NBA champion, known for his scoring and unique underhand free throw shooting technique.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Frick-barry-golden-state-warriors-min--kvtuwtre.png&w=750&h=750&f=webp'
);

const wiltChamberlain = new Players(
    'Center',
    'Wilt Chamberlain',
    '1959–1973',
    '7\'1"',
    '275 lbs',
    30.1,
    22.9,
    4.4,
    'unknown',
    'unknown',
    '54.0%',
    'n/a',
    'Averaged 30.1 points, 22.9 rebounds, and 4.4 assists in 1,045 regular-season games. A four-time NBA MVP and two-time NBA champion, known for his dominance and record-setting performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fwilt-chamberlain-golden-state-warriors-min--4zr9oucb.png&w=750&h=750&f=webp'
);

// Sixth Man
const klayThompson = new Players(
    'Sixth Man',
    'Klay Thompson',
    '2011–present',
    '6\'6"',
    '215 lbs',
    19.5,
    3.5,
    2.3,
    0.9,
    0.5,
    '45.9%',
    '41.9%',
    'Averaged 19.5 points, 2.3 assists, and 3.5 rebounds in 615 regular-season games. A five-time NBA All-Star and three-time NBA champion, known for his shooting prowess and defensive skills.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fklay-thompson-golden-state-warriors-min--6g4w1z7a.png&w=750&h=750&f=webp'
);
//////////////////////////////////////////////////////////////////

//houston rockets 
const jamesHarden = new Players(
    'Point Guard',
    'James Harden',
    '2009–present',
    '6\'5"',
    '220 lbs',
    25.2,
    5.3,
    6.3,
    1.6,
    0.5,
    '44.3%',
    '36.6%',
    'Averaged 25.2 points, 6.3 assists, and 5.3 rebounds in 836 regular-season games. An NBA MVP, multiple-time scoring champion, and Olympic gold medalist, known for his scoring and playmaking abilities.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjames-harden-brooklyn-nets-min--h2zlfvqy.png&w=750&h=750&f=webp'
);

const clydeDrexler = new Players(
    'Shooting Guard',
    'Clyde Drexler',
    '1983–1998',
    '6\'7"',
    '222 lbs',
    20.4,
    6.1,
    5.6,
    2.0,
    0.7,
    '47.2%',
    '31.8%',
    'Averaged 20.4 points, 5.6 assists, and 6.1 rebounds in 1,086 regular-season games. An NBA champion and Olympic gold medalist, known for his scoring, athleticism, and leadership.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fclyde-drexler-houston-rockets-min--2t2qkqi1.png&w=750&h=750&f=webp'
);

const tracyMcGrady = new Players(
    'Small Forward',
    'Tracy McGrady',
    '1997–2012',
    '6\'8"',
    '210 lbs',
    19.6,
    5.6,
    4.4,
    1.2,
    0.9,
    '43.5%',
    '33.8%',
    'Averaged 19.6 points, 4.4 assists, and 5.6 rebounds in 938 regular-season games. A seven-time NBA All-Star and two-time scoring champion, known for his scoring ability and versatility.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftracy-mcgrady-houston-rockets-min--6g4w1z7a.png&w=750&h=750&f=webp'
);

const mosesMalone = new Players(
    'Power Forward',
    'Moses Malone',
    '1976–1995',
    '6\'10"',
    '215 lbs',
    20.6,
    12.2,
    1.4,
    1.3,
    1.3,
    '49.5%',
    '20.2%',
    'Averaged 20.6 points, 12.2 rebounds, and 1.4 assists in 1,329 regular-season games. A three-time NBA MVP and NBA champion, known for his dominance in the paint and rebounding prowess.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmoses-malone-houston-rockets-min--1bl20e9k.png&w=750&h=750&f=webp'
);

const hakeemOlajuwon = new Players(
    'Center',
    'Hakeem Olajuwon',
    '1984–2002',
    '7\'0"',
    '255 lbs',
    21.8,
    11.1,
    2.5,
    1.7,
    3.1,
    '51.2%',
    '20.2%',
    'Averaged 21.8 points, 11.1 rebounds, and 2.5 assists in 1,238 regular-season games. A two-time NBA champion, two-time NBA Finals MVP, and 12-time NBA All-Star, known for his skillful post moves and shot-blocking ability.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fhakeem-olajuwon-houston-rockets-min--4uq5dfk4.png&w=750&h=750&f=webp'
);

// Sixth Man
const yaoMing = new Players(
    'Sixth Man',
    'Yao Ming',
    '2002–2011',
    '7\'6"',
    '310 lbs',
    19.0,
    9.2,
    1.6,
    0.4,
    1.9,
    '52.4%',
    '31.3%',
    'Averaged 19.0 points, 9.2 rebounds, and 1.6 assists in 486 regular-season games. An eight-time NBA All-Star and known for his impact as a dominant center, despite injury-shortened career. One of the tallest players to play in the NBA',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fyao-ming-houston-rockets-min--emgkvwng.png&w=750&h=750&f=webp'
);

////////////////////////////////////////////////////////////////////////////////////////////////////

const freddieLewis = new Players(
    'Point Guard',
    'Freddie Lewis',
    '1966–1976',
    '6\'0"',
    '175 lbs',
    16.5,
    3.6,
    5.7,
    1.3,
    0.1,
    '41.3%',
    '31.3%',
    'Averaged 16.5 points, 5.7 assists, and 3.6 rebounds in 775 regular-season games. A three-time NBA All-Star and known for his scoring and playmaking ability.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ffreddie-lewis-indiana-pacers-min--fb0qq0jg.png&w=750&h=750&f=webp'
);

const reggieMiller = new Players(
    'Shooting Guard',
    'Reggie Miller',
    '1987–2005',
    '6\'7"',
    '185 lbs',
    18.2,
    3.0,
    3.0,
    1.1,
    0.2,
    '47.1%',
    '39.5%',
    'Averaged 18.2 points, 3.0 assists, and 3.0 rebounds in 1,389 regular-season games. A five-time NBA All-Star and known for his three-point shooting and clutch performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Freggie-miller-indiana-pacers-min--d9u0j9ay.png&w=750&h=750&f=webp'
);

const paulGeorge = new Players(
    'Small Forward',
    'Paul George',
    '2010–present',
    '6\'8"',
    '220 lbs',
    20.0,
    6.4,
    3.5,
    1.7,
    0.4,
    '43.9%',
    '38.4%',
    'Averaged 20.0 points, 3.5 assists, and 6.4 rebounds in 752 regular-season games. An eight-time NBA All-Star and known for his scoring, defense, and versatility.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fpaul-george-indiana-pacers-min--3hjmh9e1.png&w=750&h=750&f=webp'
);


const jermaineONeal = new Players(
    'Power Forward',
    'Jermaine O\'Neal',
    '1996–2014',
    '6\'11"',
    '226 lbs',
    13.2,
    7.2,
    1.4,
    0.5,
    1.8,
    '46.5%',
    '30.3%',
    'Averaged 13.2 points, 7.2 rebounds, and 1.4 assists in 1,051 regular-season games. A six-time NBA All-Star and known for his shot-blocking and scoring in the post.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjermaine-oneal-indiana-pacers-min--vemfweur.png&w=750&h=750&f=webp'
);

const melDaniels = new Players(
    'Center',
    'Mel Daniels',
    '1967–1976',
    '6\'9"',
    '220 lbs',
    18.4,
    14.9,
    2.0,
    'unknown',
    'unknown',
    '52.7%',
    'unknown',
    'Averaged 18.4 points, 14.9 rebounds, and 2.0 assists in 628 regular-season games. A seven-time ABA All-Star and three-time ABA MVP, known for his dominance in rebounding.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmel-daniels-indiana-pacers-min--ezytu1g9.png&w=750&h=750&f=webp'
);

// Sixth Man
const dannyGranger = new Players(
    'Sixth Man',
    'Danny Granger',
    '2005–2015',
    '6\'9"',
    '222 lbs',
    16.8,
    4.9,
    1.9,
    1.0,
    0.8,
    '43.3%',
    '38.4%',
    'Averaged 16.8 points, 4.9 rebounds, and 1.9 assists in 556 regular-season games. An NBA All-Star and known for his scoring and versatility.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdanny-granger-indiana-pacers-min--eqf7l2y2.png&w=750&h=750&f=webp'
);



///////////////////////////////////////////////////////////////////////////////////////////



//team
const atlantaHawks = new Roster('atlanta hawks', 'atlanta, georgia', traeYoung, dominiqueWilkins, louHudson, bobPettit, dikembeMutombo)

const bostonCeltics = new Roster('boston celtics', 'boston, massachusetts', bobCousy, johnHavlicek, larryBird, kevinMchale, billRussell, samJones)

const brooklynNets = new Roster('brooklyn nets', 'brooklyn, new york', jasonKidd, vinceCarter, drazenPetrovic, juliusIrving, kevinDurant, deronWilliams)

const charlotteHornets = new Roster('charlotte hornets', 'charlotte, north carolina', kembaWalker, dellCurry, glenRice, larryJohnson, alonzoMourning, tonyParker)

const chicagoBulls = new Roster('cleveland cavaliers', 'cleveland ohio', kyrieIrving, markPrice, lebronJamesCavs, larryNance, zydrunasIlgauskas, bradDaugherty)

const dallasMavericks = new Roster('dallas mavericks', 'dallas, texas', bradDaugherty, jimJackson, lukaDoncic, markAguirre, dirkNowitzki)

const denverNuggets = new Roster('denver nuggets', 'denver, colorado', fatLever, davidThompson, carmeloAnthony, alexEnglish, nikolaJokic)

const detroitPistons = new Roster('detroit pistons', 'detroit, michigan', isiahThomas, chaunceyBillups, joeDumars, grantHill, benWallace, richardHamilton )

const goldenStateWarriors = new Roster('golden state warriors', 'san francisco, california', stephCurry, chrisMullin, kevinDurant, rickBarry, wiltChamberlain, klayThompson)

const houstonRockets = new Roster('houston rockets', 'houston, texas', jamesHarden, clydeDrexler, tracyMcGrady, mosesMalone, hakeemOlajuwon, yaoMing)

const indianaPacers = new Roster('indiana pacers', 'indianapolis, indiana', freddieLewis, reggieMiller, paulGeorge, jermaineONeal, melDaniels, dannyGranger)



// const laLakers = new Roster('los angeles lakers', 'los angeles, california', magicJohnson, kobeBryant, lebronJames, kareemAbdulJabbar, shaquilleONeal)

//404 error team
const unknown = new NBA('unknown', 'unknown')

// console.log(atlantaHawks.teamname)

///team array
const teams = [atlantaHawks, brooklynNets, bostonCeltics, charlotteHornets, chicagoBulls, dallasMavericks, denverNuggets, detroitPistons, goldenStateWarriors, houstonRockets, indianaPacers, unknown]

let a = 'pg'

console.log(teams[2].a);

module.exports = teams

