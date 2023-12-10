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

//clippers 
const chrisPaul = new Players(
    'Point Guard',
    'Chris Paul',
    '2005–present',
    '6\'1"',
    '175 lbs',
    18.4,
    4.5,
    9.5,
    2.2,
    0.1,
    '47.3%',
    '37.0%',
    'Averaged 18.4 points, 9.5 assists, and 4.5 rebounds in 1,074 regular-season games. A ten-time NBA All-Star and known for his elite playmaking and defensive skills.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fchris-paul-los-angeles-clippers-min--qb3ul5nf.png&w=750&h=750&f=webp'
);

const ronHarper = new Players(
    'Shooting Guard',
    'Ron Harper',
    '1986–2001',
    '6\'6"',
    '185 lbs',
    13.8,
    3.9,
    3.5,
    1.7,
    0.4,
    '45.5%',
    '32.8%',
    'Averaged 13.8 points, 3.5 assists, and 3.9 rebounds in 1,011 regular-season games. A five-time NBA champion known for his scoring and defensive contributions.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fron-harper-los-angeles-clippers-min--72v23zx3.png&w=750&h=750&f=webp'
);

const kawhiLeonard = new Players(
    'Small Forward',
    'Kawhi Leonard',
    '2011–present',
    '6\'7"',
    '225 lbs',
    19.2,
    6.4,
    2.8,
    1.8,
    0.6,
    '49.3%',
    '38.9%',
    'Averaged 19.2 points, 2.8 assists, and 6.4 rebounds in 544 regular-season games. A two-time NBA Finals MVP and known for his elite two-way skills.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkawhi-leonard-los-angeles-clippers-min--fnydumjm.png&w=750&h=750&f=webp'
);

const bobMcAdoo = new Players(
    'Power Forward',
    'Bob McAdoo',
    '1972–1986',
    '6\'9"',
    '210 lbs',
    22.1,
    9.4,
    2.3,
    1.0,
    2.0,
    '50.3%',
    '33.5%',
    'Averaged 22.1 points, 9.4 rebounds, and 2.3 assists in 852 regular-season games. A two-time NBA champion and NBA MVP known for his scoring and rebounding.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbob-mcadoo-los-angeles-clippers-min--fwzlt7eb.png&w=750&h=750&f=webp'
);

const eltonBrand = new Players(
    'Center',
    'Elton Brand',
    '1999–2016',
    '6\'9"',
    '275 lbs',
    15.9,
    8.5,
    2.1,
    1.0,
    1.7,
    '50.3%',
    '15.4%',
    'Averaged 15.9 points, 8.5 rebounds, and 2.1 assists in 1,058 regular-season games. An NBA Rookie of the Year and two-time NBA All-Star known for his scoring and rebounding.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Felton-brand-los-angeles-clippers-min--6nqjxzcv.png&w=750&h=750&f=webp'
);

// Sixth Man
const blakeGriffin = new Players(
    'Sixth Man',
    'Blake Griffin',
    '2010–present',
    '6\'9"',
    '250 lbs',
    21.4,
    8.7,
    4.4,
    0.9,
    0.5,
    '49.2%',
    '33.1%',
    'Averaged 21.4 points, 4.4 assists, and 8.7 rebounds in 642 regular-season games. A six-time NBA All-Star known for his high-flying dunks and all-around skill set.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fblake-griffin-los-angeles-clippers-min--p9cn9ks1.png&w=750&h=750&f=webp'
);

////////////////////////////////////////////////////////////////////////////////////////

//la lakers 

const magicJohnson = new Players(
    'Magic Johnson',
    'Point Guard',
    '1979–1991, 1996',
    '6\'9"',
    '215 lbs',
    19.5,
    7.2,
    11.2,
    1.9,
    0.4,
    '52%',
    '30.3%',
    'Averaged 19.5 points, 11.2 assists, and 7.2 rebounds in 906 regular-season games. He played a key role in winning 5 NBA championships and was selected to 12 All-Star games. His infectious smile earned him the nickname "Magic".',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmagic-johnson-los-angeles-lakers-min--uwsuzysw.png&w=750&h=750&f=webp'
);

const kobeBryant = new Players(
    'Kobe Bryant',
    'Shooting Guard',
    '1996–2016',
    '6\'6"',
    '212 lbs',
    25.0,
    5.2,
    4.7,
    1.4,
    0.5,
    '44.7%',
    '32.9%',
    'Averaged 25.0 points, 4.7 rebounds, and 5.2 assists in 1,346 regular-season games. He played his entire career with the Lakers, winning 5 NBA championships and earning 18 All-Star selections. Known for his scoring prowess, he once scored 81 points in a single game.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkobe-bryant-los-angeles-lakers-min--vr5j-vft.png&w=750&h=750&f=webp'
);

const lebronJames = new Players(
    'LeBron James',
    'Small Forward / Power Forward',
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
    'Averaging 27.0 points, 7.4 rebounds, and 7.4 assists in over 1,300 regular-season games. This player has led the Lakers to 2 NBA championships and has been selected to 17 All-Star games. Known for versatility, this player is often referred to as "The King".',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Flebron-james-los-angeles-lakers-min--kqplmn0q.png&w=750&h=750&f=webp'
);

const kareemAbdulJabbar = new Players(
    'Kareem Abdul-Jabbar',
    'Center',
    '1969–1989',
    '7\'2"',
    '225 lbs',
    24.6,
    11.2,
    3.6,
    'unknown',
    'unknown',
    '55.9%',
    '5.6%',
    'Averaged 24.6 points, 11.2 rebounds, and 3.6 assists in 1,560 regular-season games. He played a key role in winning 5 NBA championships with the Lakers and was selected to 19 All-Star games. Known for his skyhook shot, he is the all-time leading scorer in NBA history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkareem-abdul-jabbar-los-angeles-lakers-min--epuudzya.png&w=750&h=750&f=webp'
);

const shaquilleONeal = new Players(
    'Shaquille O\'Neal',
    'Power Forward / Center',
    '1992–2011',
    '7\'1"',
    '325 lbs',
    23.7,
    10.9,
    2.5,
    0.6,
    2.3,
    '58.2%',
    '4.5%',
    'Averaged 23.7 points, 10.9 rebounds, and 2.5 assists in 1,207 regular-season games. He played a dominant role in winning 3 NBA championships with the Lakers and was selected to 15 All-Star games. Known for his powerful dunks, he was nicknamed "Shaq".',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fshaquille-oneal-los-angeles-lakers-min--qcqba2bb.png&w=750&h=750&f=webp'
);

// Sixth Man
const jerryWest = new Players(
    'Jerry West',
    'Shooting Guard / Point Guard',
    '1960–1974',
    '6\'2"',
    '175 lbs',
    27.0,
    5.8,
    6.7,
    2.6,
    0.7,
    '47.4%',
    '30.8%',
    'Averaged 27.0 points, 6.7 assists, and 5.8 rebounds in 932 regular-season games. Known for his clutch performances, he was nicknamed "Mr. Clutch". He won an NBA championship and was selected to 14 All-Star games.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjerry-west-los-angeles-lakers-min--agm7qmnq.png&w=750&h=750&f=webp'
);



////////////////////////////////////////////////////////////////////////////////////////

//memphis grizzlies

const mikeConley = new Players(
    'Point Guard',
    'Mike Conley',
    '2007–present',
    '6\'1"',
    '175 lbs',
    14.8,
    3.0,
    5.7,
    1.3,
    0.2,
    '44.7%',
    '37.5%',
    'Averaged 14.8 points, 5.7 assists, and 3.0 rebounds in 887 regular-season games. Known for his playmaking, defense, and leadership on the court.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmike-conley-memphis-grizzlies-min--qxwyftlc.png&w=750&h=750&f=webp'
);

const jaMorant = new Players(
    'Shooting Guard',
    'Ja Morant',
    '2019–present',
    '6\'3"',
    '174 lbs',
    18.1,
    3.5,
    7.4,
    0.9,
    0.3,
    '47.5%',
    '34.7%',
    'Averaged 18.1 points, 7.4 assists, and 3.5 rebounds in 150 regular-season games. An NBA Rookie of the Year and known for his explosive athleticism and scoring ability.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fja-morant-memphis-grizzlies-min--vfdgqhbh.png&w=750&h=750&f=webp'
);

const shareefAbdurRahim = new Players(
    'Small Forward',
    'Shareef Abdur-Rahim',
    '1996–2008',
    '6\'9"',
    '225 lbs',
    18.1,
    7.5,
    2.5,
    1.0,
    0.9,
    '47.2%',
    '31.8%',
    'Averaged 18.1 points, 7.5 rebounds, and 2.5 assists in 830 regular-season games. A one-time NBA All-Star and known for his scoring versatility and rebounding.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fshareef-abdur-rahim-atlanta-hawks-min--k8aowhkr.png&w=750&h=750&f=webp'
);

const zachRandolph = new Players(
    'Power Forward',
    'Zach Randolph',
    '2001–2018',
    '6\'9"',
    '250 lbs',
    16.6,
    9.1,
    1.8,
    0.3,
    0.2,
    '47.2%',
    '28.2%',
    'Averaged 16.6 points, 9.1 rebounds, and 1.8 assists in 1,116 regular-season games. A two-time NBA All-Star and known for his post scoring and rebounding.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fzach-randolph-memphis-grizzlies-min--o4azlyin.png&w=750&h=750&f=webp'
);

const marcGasol = new Players(
    'Center',
    'Marc Gasol',
    '2008–2019',
    '6\'11"',
    '255 lbs',
    14.0,
    7.4,
    3.4,
    0.9,
    1.4,
    '48.1%',
    '36.8%',
    'Averaged 14.0 points, 7.4 rebounds, and 3.4 assists in 797 regular-season games. An NBA Defensive Player of the Year and known for his basketball IQ and passing.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmarc-gasol-memphis-grizzlies-min--ox3roqpu.png&w=750&h=750&f=webp'
);

// Sixth Man
const tonyAllen = new Players(
    'Sixth Man',
    'Tony Allen',
    '2004–2018',
    '6\'4"',
    '213 lbs',
    8.1,
    3.5,
    1.3,
    1.6,
    0.5,
    '47.0%',
    '28.1%',
    'Averaged 8.1 points, 3.5 rebounds, and 1.3 assists in 916 regular-season games. A six-time NBA All-Defensive Team member and known for his tenacious defense.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftony-allen-memphis-grizzlies-min--dozbuepu.png&w=750&h=750&f=webp'
);

////////////////////////////////////////////////////////////////////////////////////////////////

//miami heat 
const timHardaway = new Players(
    'Point Guard',
    'Tim Hardaway',
    '1989–2003',
    '6\'0"',
    '175 lbs',
    17.7,
    3.3,
    8.2,
    1.6,
    0.1,
    '43.0%',
    '35.0%',
    'Averaged 17.7 points, 8.2 assists, and 3.3 rebounds in 867 regular-season games. A five-time NBA All-Star known for his crossover dribble and scoring ability.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftim-hardaway-miami-heat-min--6xrglj0e.png&w=750&h=750&f=webp'
);

const dwyaneWade = new Players(
    'Shooting Guard',
    'Dwyane Wade',
    '2003–2019',
    '6\'4"',
    '220 lbs',
    22.0,
    4.7,
    5.4,
    1.5,
    0.8,
    '48.3%',
    '29.3%',
    'Averaged 22.0 points, 5.4 assists, and 4.7 rebounds in 1,054 regular-season games. A 13-time NBA All-Star and three-time NBA champion known for his scoring and defensive skills.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdwyane-wade-miami-heat-min--rvtcjvbw.png&w=750&h=750&f=webp'
);

const jimmyButler = new Players(
    'Small Forward',
    'Jimmy Butler',
    '2011–present',
    '6\'7"',
    '230 lbs',
    18.3,
    5.0,
    3.4,
    1.7,
    0.5,
    '45.2%',
    '33.4%',
    'Averaged 18.3 points, 3.4 assists, and 5.0 rebounds in 642 regular-season games. A five-time NBA All-Star known for his scoring, defense, and leadership.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjimmy-butler-miami-heat-min--9bpoh2d0.png&w=750&h=750&f=webp'
);

const lebronJamesHeat = new Players(
    'Power Forward',
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
    'Averaged 27.0 points, 7.4 assists, and 7.4 rebounds in 1,310 regular-season games. A 17-time NBA All-Star and four-time NBA champion known for his all-around skills and basketball IQ.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Flebron-james-los-angeles-lakers-min--rsxub1s6.png&w=750&h=750&f=webp'
);

const alonzoMourningHeat = new Players(
    'Center',
    'Alonzo Mourning',
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
    'Averaged 17.1 points, 8.5 rebounds, and 1.1 assists in 838 regular-season games. An NBA champion, two-time Defensive Player of the Year, and seven-time NBA All-Star known for his shot-blocking.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Falonzo-mourning-miami-heat-min--5ek91j9m.png&w=750&h=750&f=webp'
);

// Sixth Man
const chrisBosh = new Players(
    'Sixth Man',
    'Chris Bosh',
    '2003–2016',
    '6\'11"',
    '235 lbs',
    19.2,
    8.5,
    2.0,
    0.9,
    1.0,
    '49.4%',
    '33.5%',
    'Averaged 19.2 points, 8.5 rebounds, and 2.0 assists in 893 regular-season games. An 11-time NBA All-Star known for his versatility and two NBA championships with the Miami Heat.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fchris-bosh-miami-heat-min--my2bhtz0.png&w=750&h=750&f=webp'
);


///////////////////////////////////////////////////////////////////////////////////////////

//milwaukee bucks 
const oscarRobertson = new Players(
    'Point Guard',
    'Oscar Robertson',
    '1960–1974',
    '6\'5"',
    '220 lbs',
    25.7,
    7.5,
    9.5,
    'unknown',
    'unknown',
    '48.5%',
    'unknown',
    'Averaged 25.7 points, 9.5 assists, and 7.5 rebounds in 1,040 regular-season games. A 12-time NBA All-Star and one of the greatest all-around players in NBA history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Foscar-robertson-milwaukee-bucks-min--4k11k2hv.png&w=750&h=750&f=webp'
);

const sidneyMoncrief = new Players(
    'Shooting Guard',
    'Sidney Moncrief',
    '1979–1991',
    '6\'3"',
    '180 lbs',
    15.6,
    4.7,
    3.6,
    1.2,
    0.3,
    '50.2%',
    '33.0%',
    'Averaged 15.6 points, 3.6 assists, and 4.7 rebounds in 767 regular-season games. A five-time NBA All-Star and two-time NBA Defensive Player of the Year.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fsidney-moncrief-milwaukee-bucks-min--4n1n3bba.png&w=750&h=750&f=webp'
);

const marquesJohnson = new Players(
    'Small Forward',
    'Marques Johnson',
    '1977–1989',
    '6\'7"',
    '218 lbs',
    20.1,
    7.0,
    3.6,
    1.3,
    0.5,
    '51.2%',
    '21.6%',
    'Averaged 20.1 points, 3.6 assists, and 7.0 rebounds in 691 regular-season games. A five-time NBA All-Star known for his scoring and versatility.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmarques-johnson-milwaukee-bucks-min--x0mltpgr.png&w=750&h=750&f=webp'
);

const giannisAntetokounmpo = new Players(
    'Power Forward',
    'Giannis Antetokounmpo',
    '2013–present',
    '6\'11"',
    '242 lbs',
    27.0,
    12.5,
    5.9,
    1.3,
    1.4,
    '55.1%',
    '28.4%',
    'Averaged 27.0 points, 5.9 assists, and 12.5 rebounds in 587 regular-season games. A two-time NBA MVP and NBA Defensive Player of the Year known for his athleticism and versatility.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fgiannis-antetokounmpo-milwaukee-bucks-min--04a0sfsd.png&w=750&h=750&f=webp'
);

const kareemAbdulJabbarBucks = new Players(
    'Center',
    'Kareem Abdul-Jabbar',
    '1969–1989',
    '7\'2"',
    '225 lbs',
    24.6,
    11.2,
    3.6,
    'unknown',
    'unknown',
    '55.9%',
    'unknown',
    'Averaged 24.6 points, 11.2 rebounds, and 3.6 assists in 1,560 regular-season games. A 19-time NBA All-Star and the NBA\'s all-time leading scorer known for his unstoppable skyhook shot.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkareem-abdul-jabbar-milwaukee-bucks-min--dcxlc2c1.png&w=750&h=750&f=webp'
);

// Sixth Man
const rayAllen = new Players(
    'Sixth Man',
    'Ray Allen',
    '1996–2014',
    '6\'5"',
    '214 lbs',
    18.9,
    4.1,
    3.4,
    1.1,
    0.2,
    '45.2%',
    '40.0%',
    'Averaged 18.9 points, 3.4 assists, and 4.1 rebounds in 1,300 regular-season games. A 10-time NBA All-Star and two-time NBA champion known for his three-point shooting and clutch performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fray-allen-milwaukee-bucks-min--3jk7dejf.png&w=750&h=750&f=webp'
);



//////////////////////////////////////////////////////////////////////////////////////////

//minnesota timberwolves

const samCassell = new Players(
    'Point Guard',
    'Sam Cassell',
    '1993–2008',
    '6\'3"',
    '185 lbs',
    15.7,
    3.2,
    6.0,
    1.9,
    0.2,
    '45.5%',
    '32.7%',
    'Averaged 15.7 points, 6.0 assists, and 3.2 rebounds in 993 regular-season games. A three-time NBA All-Star known for his leadership and clutch performances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fsam-cassell-minnesota-timberwolves-min--chm0v1nd.png&w=750&h=750&f=webp'
);

const tomGugliotta = new Players(
    'Shooting Guard',
    'Tom Gugliotta',
    '1992–2005',
    '6\'10"',
    '240 lbs',
    13.0,
    7.3,
    2.8,
    1.1,
    0.4,
    '45.7%',
    '32.5%',
    'Averaged 13.0 points, 2.8 assists, and 7.3 rebounds in 763 regular-season games. A NBA All-Star known for his versatility and scoring ability.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftom-gugliotta-minnesota-timberwolves-min--40orxtpx.png&w=750&h=750&f=webp'
);

const kevinLove = new Players(
    'Small Forward',
    'Kevin Love',
    '2008–present',
    '6\'8"',
    '251 lbs',
    18.3,
    11.3,
    2.3,
    0.8,
    0.5,
    '44.2%',
    '37.0%',
    'Averaged 18.3 points, 2.3 assists, and 11.3 rebounds in 642 regular-season games. A five-time NBA All-Star known for his rebounding and three-point shooting.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkevin-love-minnesota-timberwolves-min--vjdq1mfw.png&w=750&h=750&f=webp'
);

const kevinGarnett = new Players(
    'Power Forward',
    'Kevin Garnett',
    '1995–2016',
    '6\'11"',
    '240 lbs',
    17.8,
    10.0,
    3.7,
    1.3,
    1.4,
    '49.7%',
    '27.5%',
    'Averaged 17.8 points, 3.7 assists, and 10.0 rebounds in 1,462 regular-season games. A 15-time NBA All-Star and one of the greatest power forwards known for his intensity and defense.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkevin-garnett-minnesota-timberwolves-min--9fwb33cb.png&w=750&h=750&f=webp'
);

const karlAnthonyTowns = new Players(
    'Center',
    'Karl-Anthony Towns',
    '2015–present',
    '7\'0"',
    '248 lbs',
    24.9,
    10.5,
    4.2,
    0.8,
    1.4,
    '51.2%',
    '39.6%',
    'Averaged 24.9 points, 4.2 assists, and 10.5 rebounds in 396 regular-season games. A two-time NBA All-Star known for his scoring and rebounding as a versatile big man.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkarl-anthony-towns-minnesota-timberwolves-min--nvbuhwfa.png&w=750&h=750&f=webp'
);

// Sixth Man
const stephenMarbury = new Players(
    'Sixth Man',
    'Stephen Marbury',
    '1996–2009',
    '6\'2"',
    '180 lbs',
    19.3,
    3.0,
    7.6,
    1.2,
    0.2,
    '43.3%',
    '32.9%',
    'Averaged 19.3 points, 7.6 assists, and 3.0 rebounds in 846 regular-season games. A two-time NBA All-Star known for his scoring and playmaking abilities.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fstephon-marbury-minnesota-timberwolves-min--m6jtr4e8.png&w=750&h=750&f=webp'
);


//////////////////////////////////////////////////////////////////////////////////////////

//pelicans 

const chrisPaulPelicans = new Players(
    'Point Guard',
    '2005–present',
    '6\'1"',
    '175 lbs',
    18.7,
    4.5,
    9.7,
    2.2,
    0.2,
    '47.0%',
    '37.0%',
    'An elite playmaker with a knack for clutch performances, this guard\'s court vision and leadership have left an indelible mark on the game.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fchris-paul-new-orleans-pelicans-min--6trvnk1b.png&w=750&h=750&f=webp'
);

const jrueHoliday = new Players(
    'Shooting Guard',
    '2009–present',
    '6\'3"',
    '205 lbs',
    15.6,
    4.0,
    6.3,
    1.5,
    0.5,
    '45.3%',
    '35.9%',
    'A defensive stalwart and a reliable scorer, this shooting guard\'s two-way prowess has been a cornerstone in basketball history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjrue-holiday-new-orleans-pelicans-min--k9nck5oh.png&w=750&h=750&f=webp'
);

const brandonIngram = new Players(
    'Small Forward',
    '2016–present',
    '6\'7"',
    '190 lbs',
    19.5,
    5.3,
    3.7,
    1.0,
    0.7,
    '46.8%',
    '37.2%',
    'Versatile and a prolific scorer, this small forward\'s growth continues to elevate the game, showcasing a unique blend of skill and athleticism.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbrandon-ingram-new-orleans-pelicans-min--6cyw6wyj.png&w=750&h=750&f=webp'
);

const anthonyDavis = new Players(
    'Power Forward',
    '2012–present',
    '6\'10"',
    '253 lbs',
    24.0,
    10.4,
    2.4,
    1.5,
    2.4,
    '51.7%',
    '32.2%',
    'A dominant force in the paint with a remarkable impact on both ends, this power forward has been the defensive anchor throughout their career.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fanthony-davis-new-orleans-pelicans-min--5bwwv8ie.png&w=750&h=750&f=webp'
);

const davidWest = new Players(
    'Center',
    '2003–2018',
    '6\'9"',
    '250 lbs',
    13.6,
    6.4,
    2.2,
    0.9,
    0.8,
    '49.0%',
    '29.6%',
    'Known for tenacity in the paint and leadership qualities, this center\'s contributions have established a lasting legacy in the game.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdavid-west-new-orleans-pelicans-min--b3g10frl.png&w=750&h=750&f=webp'
);

// Sixth Man
const zionWilliamson = new Players(
    'Sixth Man',
    '2019–present',
    '6\'7"',
    '284 lbs',
    25.7,
    7.0,
    3.4,
    0.9,
    0.6,
    '61.1%',
    '32.0%',
    'A rising star with explosive athleticism, this player\'s impact brings excitement and energy to the game.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fzion-williamson-new-orleans-pelicans-min--azhtenyz.png&w=750&h=750&f=webp'
)



/////////////

//knicks 
// Walt Frazier
const waltFrazier = new Players(
    'Point Guard',
    '1967–1980',
    '6\'4"',
    '205 lbs',
    18.9,
    5.9,
    6.1,
    1.9,
    0.3,
    '49.0%',
    '30.0%',
    'A smooth operator on the court, this point guard\'s style and flair have made them a legend in NBA history. A multiple-time All-Star and key contributor to championship success.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fwalt-frazier-new-york-knicks-min--2m8x8c2k.png&w=750&h=750&f=webp'
);

// Richie Guerin
const richieGuerin = new Players(
    'Shooting Guard',
    '1956–1970',
    '6\'4"',
    '195 lbs',
    17.3,
    5.0,
    5.0,
    'unknown',
    'unknown',
    '41.1%',
    '27.3%',
    'A versatile guard with scoring prowess, this shooting guard\'s impact on both ends of the floor is etched in NBA history. A multiple-time All-Star and leader on the court.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Frichie-guerin-new-york-knicks-min--76exl6l4.png&w=750&h=750&f=webp'
);

// Carmelo Anthony
const carmeloAnthonyKnicks = new Players(
    'Small Forward',
    '2003–present',
    '6\'7"',
    '238 lbs',
    23.9,
    6.6,
    2.9,
    0.8,
    0.5,
    '44.6%',
    '34.5%',
    'A scoring maestro with a lethal offensive arsenal, this small forward\'s tenure has left an indelible mark on the game. A perennial All-Star and scoring champion.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fcarmelo-anthony-new-york-knicks-min--2ujshv8x.png&w=750&h=750&f=webp'
);

// Willis Reed
const willisReed = new Players(
    'Power Forward',
    '1964–1974',
    '6\'9"',
    '235 lbs',
    18.7,
    12.9,
    1.8,
    'unknown',
    'unknown',
    '47.6%',
    '30.2%',
    'A dominant force in the paint and a two-time NBA champion, this power forward\'s leadership fueled success. A Finals MVP and perennial All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fwillis-reed-new-york-knicks-min--3btdum0b.png&w=750&h=750&f=webp'
);

// Patrick Ewing
const patrickEwing = new Players(
    'Center',
    '1985–2002',
    '7\'0"',
    '240 lbs',
    21.0,
    9.8,
    1.9,
    1.0,
    2.4,
    '50.2%',
    '27.8%',
    'A Hall of Famer and the face of the franchise, this center\'s impact is immeasurable, embodying resilience and skill. An 11-time All-Star and key figure in franchise history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fpatrick-ewing-new-york-knicks-min--npl8pofl.png&w=750&h=750&f=webp'
);

// Sixth Man - Allan Houston
const allanHouston = new Players(
    'Sixth Man',
    '1993–2005',
    '6\'6"',
    '200 lbs',
    17.3,
    2.9,
    2.4,
    0.8,
    0.1,
    '44.1%',
    '40.2%',
    'A sharpshooter and clutch performer, this player\'s scoring ability played a pivotal role in success. A key contributor to deep playoff runs.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fallan-houston-new-york-knicks-min--0z3vkvhx.png&w=750&h=750&f=webp'
);


//////////////////////////////////////////////////////////////////////////////////////////

//okc 

// Russell Westbrook
const russellWestbrook = new Players(
    'Point Guard',
    '2008–2021',
    '6\'3"',
    '200 lbs',
    23.0,
    7.0,
    8.4,
    1.7,
    0.3,
    '43.7%',
    '30.2%',
    'An explosive point guard known for triple-doubles and relentless energy. A former MVP and multiple-time All-Star, this player defined an era in OKC.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Frussell-westbrook-oklahoma-city-thunder-min--a8rgh6hi.png&w=750&h=750&f=webp'
);

// Gary Payton
const garyPayton = new Players(
    'Shooting Guard',
    '1990–2007',
    '6\'4"',
    '180 lbs',
    16.3,
    3.9,
    6.7,
    1.8,
    0.2,
    '46.6%',
    '32.6%',
    'A defensive maestro and floor general, this Hall of Fame point guard left an indelible mark on the game. Known for lockdown defense and leadership.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fgary-payton-oklahoma-city-thunder-min--byb7a1yt.png&w=750&h=750&f=webp'
);

// Ray Allen
const rayAllenOKC = new Players(
    'Small Forward',
    '1996–2014',
    '6\'5"',
    '214 lbs',
    18.9,
    4.1,
    3.4,
    1.1,
    0.2,
    '45.2%',
    '40.0%',
    'One of the greatest shooters in NBA history, this small forward made clutch shots and won championships. A 10-time All-Star and three-time NBA champion.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fray-allen-oklahoma-city-thunder-min--3br1icv2.png&w=750&h=750&f=webp'
);

// Kevin Durant
const kevinDurantOKC = new Players(
    'Power Forward',
    '2007–2016',
    '6\'10"',
    '240 lbs',
    27.4,
    7.0,
    3.9,
    1.1,
    1.0,
    '49.7%',
    '38.1%',
    'An elite scorer and versatile forward, this player was the face of the franchise. A former MVP, multiple-time scoring champion, and NBA Finals MVP.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkevin-durant-oklahoma-city-thunder-min--25pawvxv.png&w=750&h=750&f=webp'
);

// Shawn Kemp
const shawnKemp = new Players(
    'Center',
    '1989–2003',
    '6\'10"',
    '230 lbs',
    14.6,
    8.4,
    1.8,
    1.1,
    1.2,
    '48.9%',
    '29.0%',
    'A high-flying, powerful center known for thunderous dunks and shot-blocking. A six-time All-Star and key figure in the early success of the franchise.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fshawn-kemp-oklahoma-city-thunder-min--2e2n9ab2.png&w=750&h=750&f=webp'
);

// Sixth Man - Paul George
const paulGeorgeOKC = new Players(
    'Sixth Man',
    '2010–present',
    '6\'8"',
    '220 lbs',
    20.0,
    6.4,
    3.4,
    1.7,
    0.4,
    '43.9%',
    '38.3%',
    'An elite two-way player with scoring prowess and defensive skills. A multiple-time All-Star and key contributor to deep playoff runs.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fpaul-george-oklahoma-city-thunder-min--3b4gys6s.png&w=750&h=750&f=webp'
);


//////////////////////////////////////////////////////////////////////////////////////////

// Penny Hardaway
const pennyHardaway = new Players(
    'Point Guard',
    '1993–2008',
    '6\'7"',
    '220 lbs',
    15.2,
    4.5,
    6.3,
    1.6,
    0.4,
    '45.0%',
    '32.0%',
    'A versatile and dynamic point guard known for his size, playmaking, and scoring ability. A four-time All-Star and integral part of successful teams.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fpenny-hardaway-orlando-magic-min--vkvbi6ug.png&w=750&h=750&f=webp'
);

// Tracy McGrady
const tracyMcGradyMagic = new Players(
    'Shooting Guard',
    '1997–2013',
    '6\'8"',
    '210 lbs',
    19.6,
    5.6,
    4.4,
    1.2,
    0.9,
    '43.5%',
    '32.7%',
    'A scoring sensation and seven-time All-Star, this shooting guard was known for his scoring ability and versatility on the court.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftracy-mcgrady-orlando-magic-min--0vmhdqnp.png&w=750&h=750&f=webp'
);

// Hedo Turkoglu
const hedoTurkoglu = new Players(
    'Small Forward',
    '2000–2015',
    '6\'10"',
    '220 lbs',
    11.1,
    4.0,
    3.1,
    0.8,
    0.2,
    '42.9%',
    '38.0%',
    'A skilled and versatile forward known for his playmaking ability and clutch performances. Played a key role in playoff runs and Finals appearances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fhedo-turkoglu-orlando-magic-min--tqcl3ytj.png&w=750&h=750&f=webp'
);

// Rashard Lewis
const rashardLewis = new Players(
    'Power Forward',
    '1998–2014',
    '6\'10"',
    '230 lbs',
    14.9,
    5.2,
    1.7,
    1.0,
    0.6,
    '45.2%',
    '38.6%',
    'A skilled power forward known for his scoring and three-point shooting. Played a crucial role in his teams success, making multiple All-Star appearances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Frashard-lewis-orlando-magic-min--ou3u1xkx.png&w=750&h=750&f=webp'
);

// Dwight Howard
const dwightHoward = new Players(
    'Center',
    '2004–present',
    '6\'10"',
    '265 lbs',
    16.7,
    12.3,
    1.4,
    0.8,
    1.9,
    '58.6%',
    '26.9%',
    'A dominant center known for his athleticism, shot-blocking, and rebounding. A multiple-time Defensive Player of the Year and key figure in playoff runs.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdwiht-howard-orlando-magic-min--1e1wghyq.png&w=750&h=750&f=webp'
);

// Sixth Man - Shaquille O'Neal
const shaqONeal = new Players(
    'Sixth Man',
    '1992–2011',
    '7\'1"',
    '325 lbs',
    23.7,
    10.9,
    2.5,
    0.6,
    2.3,
    '58.2%',
    '25.0%',
    'A dominant force in the paint, this Hall of Fame center was known for his scoring, rebounding, and charisma. A multiple-time NBA champion and MVP.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fshaquille-oneal-orlando-magic-min--l3kn3pi3.png&w=750&h=750&f=webp'
);


/////////////////////////////////////////////////////////////////////////////////////

//76ers 

// Allen Iverson
const allenIverson76ers = new Players(
    'Point Guard',
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
    'A scoring machine and cultural icon, this point guard carried the team with his fearless style. An 11-time All-Star, MVP, and 2001 NBA Finals participant.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fallen-iverson-philadelphia-76ers-min--0nw9gk4e.png&w=750&h=750&f=webp'
);

// Julius Irving
const juliusIrving76ers = new Players(
    'Shooting Guard',
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
    'A basketball legend known for his innovative style and high-flying dunks. A multiple-time MVP, NBA champion, and integral part of the team\'s history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjulius-erving-philadelphia-76ers-min--hwetcjbp.png&w=750&h=750&f=webp'
);

// Billy Cunningham
const billyCunningham = new Players(
    'Small Forward',
    '1965–1976',
    '6\'6"',
    '210 lbs',
    20.8,
    10.1,
    4.0,
    'unknown',
    'unknown',
    '45.6%',
    'unknown',
    'A versatile forward with a well-rounded game. A multiple-time All-Star and key contributor to the team\'s success in the 1960s and 1970s.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbilly-cunningham-philadelphia-76ers-min--bukapai8.png&w=750&h=750&f=webp'
);

// Moses Malone
const mosesMalone76ers = new Players(
    'Power Forward',
    '1976–1995',
    '6\'10"',
    '215 lbs',
    20.3,
    12.3,
    1.3,
    1.3,
    1.3,
    '49.1%',
    'unknown',
    'A dominant force in the paint, this Hall of Famer led the team to an NBA championship. A three-time MVP and 12-time All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmoses-malone-philadelphia-76ers-min--bbdyspk0.png&w=750&h=750&f=webp'
);

// Joel Embiid
const joelEmbiid = new Players(
    'Center',
    '2014–present',
    '7\'0"',
    '280 lbs',
    24.8,
    11.3,
    3.1,
    1.4,
    1.7,
    '48.1%',
    '32.8%',
    'A dominant center with a versatile skill set. A multiple-time All-Star and key player in the team\'s recent success.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjoel-embiid-philadelphia-76ers-min--97ylw7to.png&w=750&h=750&f=webp'
);

// Sixth Man - Andre Iguodala
const andreIguodala = new Players(
    'Sixth Man',
    '2004–present',
    '6\'6"',
    '215 lbs',
    12.0,
    5.1,
    4.4,
    1.5,
    0.5,
    '46.2%',
    '33.3%',
    'An athletic swingman known for his defense and versatility. A former NBA Finals MVP and integral part of championship-winning teams.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fandre-iguodala-philadelphia-76ers-min--gfy4leqn.png&w=750&h=750&f=webp'
);

///////////////////////////////////////////////////////////////////////////////////////////////

//suns 
// Steve Nash
const steveNash = new Players(
    'Point Guard',
    '1996–2014',
    '6\'3"',
    '178 lbs',
    14.3,
    3.0,
    8.5,
    0.7,
    0.1,
    '49.0%',
    '42.8%',
    'A two-time MVP and exceptional playmaker, this point guard orchestrated offenses with precision. Known for his shooting and passing skills.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fsteve-nash-phoenix-suns-min--r2peu-jt.png&w=750&h=750&f=webp'
);

// Devin Booker
const devinBooker = new Players(
    'Shooting Guard',
    '2015–present',
    '6\'5"',
    '210 lbs',
    23.9,
    4.1,
    4.4,
    0.9,
    0.2,
    '44.9%',
    '36.3%',
    'A scoring machine and rising star, this shooting guard has a knack for putting up points. A two-time All-Star and key player for the franchise.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdevin-booker-phoenix-suns-min--9nu4yoz0.png&w=750&h=750&f=webp'
);

// Shawn Marion
const shawnMarion = new Players(
    'Small Forward',
    '1999–2015',
    '6\'7"',
    '220 lbs',
    15.2,
    8.7,
    1.9,
    1.5,
    1.1,
    '48.4%',
    '33.1%',
    'A versatile forward known for his unique playing style and defensive prowess. A four-time All-Star and NBA champion with a high-flying game.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fshawn-marion-phoenix-suns-min--2kbnmls7.png&w=750&h=750&f=webp'
);

// Charles Barkley
const charlesBarkley = new Players(
    'Power Forward',
    '1984–2000',
    '6\'6"',
    '252 lbs',
    22.1,
    11.7,
    3.9,
    1.5,
    0.8,
    '54.1%',
    '26.6%',
    'A dominant and outspoken power forward, this player was a force on the court. An 11-time All-Star, MVP, and one of the greatest rebounders in history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fcharles-barkley-phoenix-suns-min--3xxijgq8.png&w=750&h=750&f=webp'
);

// Amar'e Stoudemire
const amareStoudemire = new Players(
    'Center',
    '2002–2016',
    '6\'10"',
    '249 lbs',
    18.9,
    7.8,
    1.3,
    0.8,
    1.2,
    '53.7%',
    '28.9%',
    'A high-flying center with explosive scoring ability, this player was a six-time All-Star and Rookie of the Year. A key figure for the franchise.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Famare-stoudemire-phoenix-suns-min--hsbvcfi0.png&w=750&h=750&f=webp'
);

// Sixth Man - Dennis Johnson
const dennisJohnson = new Players(
    'Sixth Man',
    '1976–1990',
    '6\'4"',
    '185 lbs',
    14.1,
    3.9,
    5.0,
    1.3,
    0.3,
    '45.6%',
    '17.3%',
    'A clutch performer and defensive stalwart, this guard was a key contributor off the bench. A three-time NBA champion and five-time All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdennis-johnson-phoenix-suns-min--3uux8lsl.png&w=750&h=750&f=webp'
);

///////////////////////////////////////////////////////////////////////////////////////////////

//trail blazers
// Damian Lillard
const damianLillard = new Players(
    'Point Guard',
    '2012–present',
    '6\'2"',
    '195 lbs',
    24.0,
    4.2,
    6.5,
    1.0,
    0.3,
    '43.6%',
    '37.6%',
    'A dynamic point guard with deep shooting range and clutch performances. A multiple-time All-Star and leader of the team in both scoring and assists.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdamian-lillard-portland-trail-blazers-min--fgb6gdky.png&w=750&h=750&f=webp'
);

// Clyde Drexler
const clydeDrexlerBlazers = new Players(
    'Shooting Guard',
    '1983–1998',
    '6\'7"',
    '210 lbs',
    20.4,
    6.1,
    5.6,
    2.0,
    0.7,
    '47.2%',
    '31.8%',
    'A versatile and athletic shooting guard, this Hall of Famer excelled in scoring, rebounding, and playmaking. A 10-time All-Star and NBA champion.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fclyde-drexler-portland-trail-blazers-min--fxzirx1i.png&w=750&h=750&f=webp'
);

// Brandon Roy
const brandonRoy = new Players(
    'Small Forward',
    '2006–2013',
    '6\'6"',
    '215 lbs',
    18.8,
    4.3,
    4.7,
    1.0,
    0.3,
    '45.9%',
    '35.2%',
    'A skilled small forward known for scoring and leadership. A three-time All-Star and Rookie of the Year, his career was cut short by injuries.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbrandon-roy-portland-trail-blazers-min--b8bozgwg.png&w=750&h=750&f=webp'
);

// LaMarcus Aldridge
const lamarcusAldridge = new Players(
    'Power Forward',
    '2006–2019',
    '6\'11"',
    '250 lbs',
    19.4,
    8.2,
    2.0,
    0.8,
    1.1,
    '49.1%',
    '29.3%',
    'A skilled and versatile power forward with a smooth mid-range game. A multiple-time All-Star and key player in the franchise during his tenure.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Flamarcus-aldridge-portland-trail-blazers-min--8olmgnik.png&w=750&h=750&f=webp'
);

// Bill Walton
const billWalton = new Players(
    'Center',
    '1974–1987',
    '6\'11"',
    '210 lbs',
    13.3,
    10.5,
    3.4,
    2.2,
    2.2,
    '52.1%',
    '27.3%',
    'A dominant and versatile center, this Hall of Famer was a key figure in the team\'s championship success. A former MVP, Finals MVP, and multiple-time All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbill-walton-portland-trail-blazers-min--4vagpnbr.png&w=750&h=750&f=webp'
);

// Sixth Man - Maurice Lucas
const mauriceLucas = new Players(
    'Sixth Man',
    '1976–1988',
    '6\'9"',
    '215 lbs',
    14.4,
    8.8,
    2.3,
    2.3,
    0.3,
    '47.3%',
    '25.6%',
    'A rugged and tough power forward, this player brought intensity off the bench. A key contributor to the team\'s success, winning an NBA championship.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmaurice-lucas-portland-trail-blazers-min--iuh8b82s.png&w=750&h=750&f=webp'
);


////////////////////////////////////////////////////////////////////////////////////////////

//kings 
// Nate Archibald
const nateArchibald = new Players(
    'Point Guard',
    '1970–1984',
    '6\'1"',
    '150 lbs',
    18.8,
    2.3,
    7.4,
    'unknown',
    'unknown',
    '46.7%',
    '26.1%',
    'A legendary point guard known for his speed and playmaking. A six-time All-Star, this player led the league in scoring and assists in the same season.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fnate-archibald-sacramento-kings-min--e5tnwiwk.png&w=750&h=750&f=webp'
);

// Oscar Robertson
const oscarRobertsonKings = new Players(
    'Shooting Guard',
    '1960–1974',
    '6\'5"',
    '220 lbs',
    25.7,
    7.5,
    9.5,
    'unknown',
    'unknown',
    '48.5%',
    '28.5%',
    'One of the greatest guards in NBA history, this player averaged a triple-double for an entire season. A 12-time All-Star and former MVP.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Foscar-robertson-sacramento-kings-min--a7b1uqxn.png&w=750&h=750&f=webp'
);

// Mitch Richmond
const mitchRichmond = new Players(
    'Small Forward',
    '1988–2002',
    '6\'5"',
    '220 lbs',
    21.0,
    3.9,
    3.5,
    1.2,
    0.3,
    '45.5%',
    '38.8%',
    'A dynamic scorer and shooting guard, this player was a key figure for the Kings. A six-time All-Star and former NBA champion.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmitch-richmond-sacramento-kings-min--2ftldbfv.png&w=750&h=750&f=webp'
);

// Chris Webber
const chrisWebber = new Players(
    'Power Forward',
    '1993–2008',
    '6\'10"',
    '245 lbs',
    20.7,
    9.8,
    4.2,
    1.4,
    1.4,
    '47.9%',
    '29.9%',
    'A skilled and versatile power forward, this player was the face of the franchise. A five-time All-Star and former Rookie of the Year.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fchris-webber-sacramento-kings-min--7ly06rbj.png&w=750&h=750&f=webp'
);

// DeMarcus Cousins
const demarcusCousins = new Players(
    'Center',
    '2010–present',
    '6\'10"',
    '270 lbs',
    21.2,
    10.9,
    3.2,
    1.4,
    1.2,
    '45.8%',
    '33.3%',
    'A dominant center known for scoring and rebounding. A multiple-time All-Star and key figure for the Kings in recent years.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdemarcus-cousins-sacramento-kings-min--g16ypkcs.png&w=750&h=750&f=webp'
);

// Sixth Man - Jerry Lucas
const jerryLucas = new Players(
    'Sixth Man',
    '1962–1974',
    '6\'8"',
    '230 lbs',
    17.0,
    15.6,
    3.3,
    'unknown',
    'unknown',
    '49.0%',
    'unknown%',
    'A versatile forward known for his scoring and rebounding. A seven-time All-Star and key contributor off the bench for the Kings.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjerry-lucas-sacramento-kings-min--bcfyntap.png&w=750&h=750&f=webp'
);

////////////////////////////////////////////////////////////////////////////////////////////

//spurs 
// Tony Parker
const tonyParkerSpurs = new Players(
    'Point Guard',
    '2001–2018',
    '6\'2"',
    '185 lbs',
    15.5,
    2.7,
    5.6,
    0.8,
    0.1,
    '49.1%',
    '32.9%',
    'A crafty and speedy point guard known for his clutch performances. A four-time NBA champion and Finals MVP, this player was a key part of a dynasty.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftony-parker-san-antonio-spurs-min--e6svyo9g.png&w=750&h=750&f=webp'
);

// George Gervin
const georgeGervin = new Players(
    'Shooting Guard',
    '1972–1986',
    '6\'7"',
    '180 lbs',
    26.2,
    5.4,
    2.8,
    1.2,
    1.0,
    '50.4%',
    '29.4%',
    'A scoring machine and Hall of Famer, this shooting guard dominated with his smooth finger roll. A nine-time All-Star and four-time scoring champion.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fgeorge-gervin-san-antonio-spurs-min--ab3skzr7.png&w=750&h=750&f=webp'
);

// Kawhi Leonard
const kawhiLeonardSpurs = new Players(
    'Small Forward',
    '2011–present',
    '6\'7"',
    '225 lbs',
    18.8,
    6.4,
    2.7,
    1.8,
    0.7,
    '49.3%',
    '38.4%',
    'A two-time NBA Finals MVP, this small forward is known for his defensive prowess and clutch performances. A two-time NBA champion and multiple-time All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkawhi-leonard-toronto-raptors-min--ayogzguv.png&w=750&h=750&f=webp'
);

// Tim Duncan
const timDuncan = new Players(
    'Power Forward',
    '1997–2016',
    '6\'11"',
    '250 lbs',
    19.0,
    10.8,
    3.0,
    0.7,
    2.2,
    '50.6%',
    '17.8%',
    'An all-time great power forward and a fundamental force on both ends of the floor. A five-time NBA champion, three-time Finals MVP, and two-time MVP.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftim-duncan-san-antonio-spurs-min--5glfnbkf.png&w=750&h=750&f=webp'
);

// David Robinson
const davidRobinson = new Players(
    'Center',
    '1989–2003',
    '7\'1"',
    '235 lbs',
    21.1,
    10.6,
    2.5,
    1.4,
    3.0,
    '51.8%',
    '25.0%',
    'A dominant and athletic center known as "The Admiral." A two-time NBA champion, MVP, and Defensive Player of the Year, this Hall of Famer left a lasting legacy.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdavid-robinson-san-antonio-spurs-min--1n5lqsxg.png&w=750&h=750&f=webp'
);

// Sixth Man - Manu Ginobili
const manuGinobili = new Players(
    'Sixth Man',
    '2002–2018',
    '6\'6"',
    '205 lbs',
    13.3,
    3.5,
    3.8,
    1.3,
    0.3,
    '45.4%',
    '36.9%',
    'A dynamic and fearless sixth man who played a key role in his teams success. A four-time NBA champion and two-time NBA All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmanu-ginobili-san-antonio-spurs-min--7styg53n.png&w=750&h=750&f=webp'
);

////////////////////////////////////////////////////////////////////////////////////////////////

//raptors


// Kyle Lowry
const kyleLowry = new Players(
    'Point Guard',
    '2006–2021',
    '6\'0"',
    '196 lbs',
    14.0,
    4.3,
    6.2,
    1.4,
    0.3,
    '41.6%',
    '36.7%',
    'Known for his tenacity and leadership, this point guard played a crucial role in a championship run, earning multiple All-Star appearances along the way.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkyle-lowry-toronto-raptors-min--bvyxbrhu.png&w=750&h=750&f=webp'
);

// Vince Carter
const vinceCarterTOR = new Players(
    'Shooting Guard',
    '1998–2004',
    '6\'6"',
    '220 lbs',
    23.4,
    5.2,
    4.3,
    1.1,
    1.0,
    '43.7%',
    '37.1%',
    'A high-flying shooting guard, this player was a cornerstone of early success, showcasing incredible dunks and scoring prowess.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Ftoronto-raptors-vince-carter-min--3y5m2fco.png&w=750&h=750&f=webp'
);

// DeMar DeRozan
const demarDerozan = new Players(
    'Small Forward',
    '2009–2021',
    '6\'6"',
    '220 lbs',
    21.6,
    4.2,
    4.1,
    1.0,
    0.3,
    '46.0%',
    '28.6%',
    'A skilled scorer and playmaker, this small forward was a key figure in success, earning multiple All-Star appearances with a smooth mid-range game.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdemar-derozan-toronto-raptors-min--fpq4q1t7.png&w=750&h=750&f=webp'
);

// Chris Bosh
const chrisBoshTOR = new Players(
    'Power Forward',
    '2003–2016',
    '6\'10"',
    '235 lbs',
    19.2,
    8.5,
    2.0,
    0.8,
    1.0,
    '49.0%',
    '33.5%',
    'An accomplished big man, this power forward contributed significantly to early success, earning multiple All-Star nods and showcasing a versatile game.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fchris-bosh-toronto-raptors-min--d5c2c3dd.png&w=750&h=750&f=webp'
);

// Pascal Siakam
const pascalSiakam = new Players(
    'Center',
    '2016–present',
    '6\'9"',
    '230 lbs',
    16.4,
    6.8,
    3.1,
    1.0,
    0.7,
    '47.8%',
    '34.4%',
    'An energetic and versatile forward-center, this player played a key role in recent success, contributing to a championship-winning team.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fpascal-siakam-toronto-raptors-min--4ea3hca6.png&w=750&h=750&f=webp'
);

// Sixth Man - Kawhi Leonard
const kawhiLeonardTOR = new Players(
    'Sixth Man',
    '2018–2019',
    '6\'7"',
    '225 lbs',
    26.9,
    7.3,
    3.5,
    1.8,
    0.6,
    '48.9%',
    '37.1%',
    'A two-time NBA Finals MVP known for clutch performances, this player played a crucial role in delivering a first NBA championship.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkawhi-leonard-toronto-raptors-min--6or1tsh1.png&w=750&h=750&f=webp'
);


///////////////////////////////////////////////////////////////////////////////////////////////

//jazz 
// John Stockton
const johnStockton = new Players(
    'Point Guard',
    '1984–2003',
    '6\'1"',
    '175 lbs',
    13.1,
    2.7,
    10.5,
    2.2,
    0.2,
    '51.5%',
    '38.4%',
    'A legendary point guard and assist maestro, this Hall of Famer set the standard for floor leadership. All-time leader in assists and steals.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjohn-stockton-toronto-raptors-min--2a8i6m42.png&w=750&h=750&f=webp'
);

// Pete Maravich
const peteMaravich = new Players(
    'Shooting Guard',
    '1970–1980',
    '6\'5"',
    '197 lbs',
    24.2,
    4.2,
    5.4,
    1.4,
    0.3,
    '44.0%',
    '32.7%',
    'A flamboyant and creative scorer, this Hall of Fame guard left an indelible mark on the game. Known for his scoring prowess and ball-handling.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fpete-maravich-toronto-raptors-min--1op9lgua.png&w=750&h=750&f=webp'
);

// Adrian Dantley
const adrianDantley = new Players(
    'Small Forward',
    '1976–1991',
    '6\'5"',
    '208 lbs',
    24.3,
    5.7,
    3.0,
    1.0,
    0.1,
    '54.0%',
    '17.2%',
    'A scoring machine and efficient forward, this Hall of Famer dominated opponents with his scoring ability and versatility on the court.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fadrian-dantley-toronto-raptors-min--1pj6kl6v.png&w=750&h=750&f=webp'
);

// Andrei Kirilenko
const andreiKirilenko = new Players(
    'Power Forward',
    '2001–2015',
    '6\'9"',
    '235 lbs',
    11.8,
    5.5,
    2.7,
    1.8,
    2.0,
    '47.2%',
    '31.4%',
    'An all-around forward with defensive prowess, this versatile player impacted both ends of the floor. A former All-Star and multiple-time All-Defensive Team selection.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fandrei-kirilenko-toronto-raptors-min--bfcmfhx2.png&w=750&h=750&f=webp'
);

// Karl Malone
const karlMalone = new Players(
    'Center',
    '1985–2004',
    '6\'9"',
    '250 lbs',
    25.0,
    10.1,
    3.6,
    1.4,
    0.8,
    '51.6%',
    '27.4%',
    'One of the greatest power forwards in NBA history, this Hall of Famer was a dominant force in scoring and rebounding. A two-time MVP and 14-time All-Star.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fkarl-malone-toronto-raptors-min--1hnjwmge.png&w=750&h=750&f=webp'
);

// Sixth Man - Rudy Gobert
const rudyGobert = new Players(
    'Sixth Man',
    '2013–present',
    '7\'1"',
    '258 lbs',
    11.1,
    11.0,
    1.4,
    0.7,
    2.3,
    '66.0%',
    'N/A',
    'A defensive stalwart and elite rim protector, this player has anchored the defense with multiple Defensive Player of the Year awards and All-Star appearances.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Frudy-gobert-toronto-raptors-min--71j2asxe.png&w=750&h=750&f=webp'
);

////////////////////////////////////////////////////////////////////////

//wizards

// John Wall
const johnWall = new Players(
    'Point Guard',
    '2010–present',
    '6\'4"',
    '210 lbs',
    19.0,
    4.3,
    9.2,
    1.7,
    0.6,
    '43.3%',
    '32.4%',
    'A lightning-quick point guard with exceptional playmaking skills. A five-time All-Star and key figure in the team\'s recent success.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjohn-wall-washington-wizards-min--36tsidw2.png&w=750&h=750&f=webp'
);

// Gilbert Arenas
const gilbertArenas = new Players(
    'Shooting Guard',
    '2001–2012',
    '6\'3"',
    '191 lbs',
    20.7,
    3.9,
    5.3,
    1.6,
    0.2,
    '42.1%',
    '35.2%',
    'A dynamic scoring guard known for his clutch performances. A three-time All-Star and one of the franchise\'s all-time leading scorers.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fgilbert-arenas-washington-wizards-min--y50zv27v.png&w=750&h=750&f=webp'
);

// Bradley Beal
const bradleyBeal = new Players(
    'Small Forward',
    '2012–present',
    '6\'3"',
    '207 lbs',
    23.2,
    4.6,
    4.1,
    1.2,
    0.4,
    '45.3%',
    '35.8%',
    'A scoring machine with an all-around game. A multiple-time All-Star and one of the league\'s top shooting guards.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fbradley-beal-washington-wizards-min--1mwns0su.png&w=750&h=750&f=webp'
);

// Elvin Hayes
const elvinHayes = new Players(
    'Power Forward',
    '1968–1984',
    '6\'9"',
    '235 lbs',
    21.0,
    12.5,
    1.8,
    1.0,
    2.0,
    '45.2%',
    '16.7%',
    'A dominant power forward and rebounder. A 12-time All-Star and Hall of Famer, known for his scoring and durability.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Felvin-hayes-washington-wizards-min--0c4b42c0.png&w=750&h=750&f=webp'
);

// Wes Unseld
const wesUnseld = new Players(
    'Center',
    '1968–1981',
    '6\'7"',
    '245 lbs',
    10.8,
    14.0,
    3.9,
    1.1,
    0.6,
    '50.9%',
    '63.3%',
    'A legendary center known for his rebounding and outlet passes. An MVP, NBA champion, and Finals MVP.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fwes-unseld-washington-wizards-min--yy13zdt7.png&w=750&h=750&f=webp'
);

// Sixth Man - Earl Monroe
const earlMonroe = new Players(
    'Sixth Man',
    '1967–1980',
    '6\'3"',
    '185 lbs',
    18.8,
    3.9,
    3.9,
    3.1,
    0.4,
    '47.4%',
    'unknown',
    'A dynamic guard known for his scoring and creativity. A four-time All-Star and NBA champion, providing a spark off the bench.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fearl-monroe-washington-wizards-min--s2c0zttr.png&w=750&h=750&f=webp'
);

//////////////////////////////////////////////////////////////////////////////////////////

//bulls 
// Derrick Rose
const derrickRoseBulls = new Players(
    'Point Guard',
    '2008–present',
    '6\'3"',
    '200 lbs',
    18.8,
    3.4,
    5.6,
    0.8,
    0.3,
    '48.4%',
    '30.8%',
    'Known for explosiveness and scoring ability. The youngest MVP in NBA history, led the team with passion and skill.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fderrick-rose-chicago-bulls-min--uxcdyhyl.png&w=750&h=750&f=webp'
);

///
// Michael Jordan
const michaelJordanBulls = new Players(
    'Shooting Guard',
    '1984–2003',
    '6\'6"',
    '216 lbs',
    30.1,
    6.2,
    5.3,
    2.3,
    0.8,
    '49.7%',
    '32.7%',
    'Widely regarded as one of the greatest basketball players in history. A six-time NBA champion and five-time MVP.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fmichael-jordan-chicago-bulls-min--driqsmr0.png&w=750&h=750&f=webp'
);

// Scottie Pippen
const scottiePippenBulls = new Players(
    'Small Forward',
    '1987–2008',
    '6\'8"',
    '228 lbs',
    16.1,
    6.4,
    5.2,
    2.0,
    0.8,
    '47.3%',
    '32.6%',
    'A versatile and defensive-minded forward. A key component of the team\'s dynasty, Pippen was a multiple-time All-Star and champion.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fscottie-pippen-chicago-bulls-min--bw5lnxrs.png&w=750&h=750&f=webp'
);

// Dennis Rodman
const dennisRodmanBulls = new Players(
    'Power Forward',
    '1986–2006',
    '6\'7"',
    '220 lbs',
    7.3,
    13.1,
    1.8,
    0.7,
    0.6,
    '52.1%',
    '23.4%',
    'One of the greatest defenders and rebounders in NBA history. A multiple-time rebounding champion and two-time Defensive Player of the Year.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fdennis-rodman-chicago-bulls-min--uzguonxu.png&w=750&h=750&f=webp'
);

// Artis Gilmore
const artisGilmore = new Players(
    'Center',
    '1976–1988',
    '7\'2"',
    '240 lbs',
    18.8,
    12.3,
    2.3,
    'unknown',
    'unknown',
    '59.9%',
    'n/a',
    'A dominant center with impressive scoring and rebounding abilities. A multiple-time All-Star and one of the best big men in franchise history.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fartis-gilmore-chicago-bulls-min--9ckwmrkm.png&w=750&h=750&f=webp'
);

// Sixth Man - Jimmy Butler
const jimmyButlerBulls = new Players(
    'Sixth Man',
    '2011–present',
    '6\'7"',
    '230 lbs',
    19.9,
    5.3,
    5.0,
    1.8,
    0.5,
    '45.7%',
    '33.0%',
    'A two-way star known for hard work and tenacity. A multiple-time All-Star and key player in recent successes.',
    'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fjimmy-butler-chicago-bulls-min--v2egbhkk.png&w=750&h=750&f=webp'
);




//team
const atlantaHawks = new Roster('atlanta hawks', 'atlanta, georgia', traeYoung, dominiqueWilkins, louHudson, bobPettit, dikembeMutombo)

const bostonCeltics = new Roster('boston celtics', 'boston, massachusetts', bobCousy, johnHavlicek, larryBird, kevinMchale, billRussell, samJones)

const brooklynNets = new Roster('brooklyn nets', 'brooklyn, new york', jasonKidd, vinceCarter, drazenPetrovic, juliusIrving, kevinDurant, deronWilliams)

const charlotteHornets = new Roster('charlotte hornets', 'charlotte, north carolina', kembaWalker, dellCurry, glenRice, larryJohnson, alonzoMourning, tonyParker)

const chicagoBulls = new Roster('chicago bulls', 'chicago illinois', derrickRose, michaelJordanBulls, scottiePippenBulls, dennisRodmanBulls, artisGilmore, jimmyButlerBulls)

const clevelandCavs = new Roster('cleveland cavaliers', 'cleveland ohio', kyrieIrving, markPrice, lebronJamesCavs, larryNance, zydrunasIlgauskas, bradDaugherty)

const dallasMavericks = new Roster('dallas mavericks', 'dallas, texas', bradDaugherty, jimJackson, lukaDoncic, markAguirre, dirkNowitzki)

const denverNuggets = new Roster('denver nuggets', 'denver, colorado', fatLever, davidThompson, carmeloAnthony, alexEnglish, nikolaJokic)

const detroitPistons = new Roster('detroit pistons', 'detroit, michigan', isiahThomas, chaunceyBillups, joeDumars, grantHill, benWallace, richardHamilton )

const goldenStateWarriors = new Roster('golden state warriors', 'san francisco, california', stephCurry, chrisMullin, kevinDurant, rickBarry, wiltChamberlain, klayThompson)

const houstonRockets = new Roster('houston rockets', 'houston, texas', jamesHarden, clydeDrexler, tracyMcGrady, mosesMalone, hakeemOlajuwon, yaoMing)

const indianaPacers = new Roster('indiana pacers', 'indianapolis, indiana', freddieLewis, reggieMiller, paulGeorge, jermaineONeal, melDaniels, dannyGranger)

const laClippers = new Roster('los angeles clippers', 'los angeles, california', chrisPaul, ronHarper, kawhiLeonard, bobMcAdoo, eltonBrand, blakeGriffin )

const laLakers = new Roster('los angeles lakers', 'los angeles, california', magicJohnson, kobeBryant, lebronJames, kareemAbdulJabbar, shaquilleONeal, jerryWest)

const memphisGrizzlies = new Roster('memphis grizzlies', 'memphis, tennessee', mikeConley, jaMorant, shareefAbdurRahim, zachRandolph, marcGasol)

const miamiHeat = new Roster('miami heat', 'miami, florida', timHardaway, dwyaneWade, jimmyButler, lebronJamesHeat, alonzoMourningHeat, chrisBosh)

const milwaukeeBucks = new Roster('milwaukee bucks', 'milwaukee, wisconsin', oscarRobertson, sidneyMoncrief, marquesJohnson, giannisAntetokounmpo, kareemAbdulJabbarBucks)

const minnesotaTimberwolves = new Roster('minnesota timberwolves', 'minnesota, minneapolis', samCassell, tomGugliotta, kevinLove, kevinGarnett, karlAnthonyTowns, stephenMarbury)

const newOrleansPelicans = new Roster('new orleans pelicans', 'new orleans, louisiana', chrisPaul, jrueHoliday, brandonIngram, anthonyDavis, davidWest, zionWilliamson)

const newYorkKnicks = new Roster('new york knicks', 'New York City, New York', waltFrazier, richieGuerin, carmeloAnthony, willisReed, patrickEwing, allanHouston)

const okc = new Roster('oklahoma city thunder', 'oklahoma city, oklahoma', russellWestbrook, garyPayton, rayAllen, kevinDurantOKC, shawnKemp)

const magic = new Roster('orlando magic', 'orlando, florida', pennyHardaway, tracyMcGrady, hedoTurkoglu, rashardLewis, dwightHoward, shaqONeal)

const sixers = new Roster('philadelphia 76ers', 'philadelphia, pennsylvania', allenIverson76ers, juliusIrving76ers, billyCunningham, mosesMalone76ers, joelEmbiid)

const suns = new Roster('phoenix suns', 'phoenix, arizona', steveNash, devinBooker, shawnMarion, charlesBarkley, amareStoudemire, dennisJohnson )

const trailBlazers = new Roster('portland trail blazers', 'portland, oregon', damianLillard, clydeDrexlerBlazers, brandonRoy, lamarcusAldridge, billWalton, mauriceLucas)

const kings = new Roster('sacramento kings', 'sacramento, california', nateArchibald, oscarRobertson, mitchRichmond, chrisWebber, demarcusCousins, jerryLucas)

const spurs = new Roster('san antonio spurs', 'san antonio, texas', tonyParkerSpurs, georgeGervin, kawhiLeonardSpurs, timDuncan, davidRobinson, manuGinobili)

const raptors = new Roster('toronto raptors', 'toronto, canada', kyleLowry, vinceCarterTOR, demarDerozan, chrisBosh, pascalSiakam, kawhiLeonardTOR)

const jazz = new Roster('utah jazz', 'salt lake city, utah', johnStockton, peteMaravich, adrianDantley, andreiKirilenko, karlMalone, rudyGobert)

const wizards = new Roster('washington wizards', 'washington dc', johnWall, gilbertArenas, bradleyBeal, elvinHayes, wesUnseld, earlMonroe)





// const laLakers = new Roster('los angeles lakers', 'los angeles, california', magicJohnson, kobeBryant, lebronJames, kareemAbdulJabbar, shaquilleONeal)

//404 error team
const unknown = new NBA('unknown', 'unknown')

// console.log(atlantaHawks.teamname)

///team array
const teams = [atlantaHawks, brooklynNets, bostonCeltics, charlotteHornets, chicagoBulls, clevelandCavs, dallasMavericks, denverNuggets, detroitPistons, goldenStateWarriors, houstonRockets, indianaPacers, laClippers, laLakers, memphisGrizzlies, miamiHeat, milwaukeeBucks, minnesotaTimberwolves, newOrleansPelicans, newYorkKnicks, okc, magic, sixers, suns, trailBlazers, kings, spurs, raptors, jazz, wizards, unknown]

console.log(teams.length - 1);


module.exports = teams

