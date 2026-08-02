// data.js — 2027 MLB Draft Prospect Tracker board data
// Weekly update flow: open index.html, do your scouting, click "Publish data.js",
// then replace this file with the downloaded one and commit.
const BOARD_UPDATED = '2026-07-23';

const RAW = [
  ["Gabriel Lehouillier","1B/OF","Academy of Baseball Canada","QC","HS","hitter"],
["Dylan Seward","SS","HS (California)","CA","HS","hitter"],
["Grant Westphal","OF","Blue Valley HS","KS","HS","hitter"],
["Sebastian Castillo","SS/RHP","Byron Nelson HS","TX","HS","hitter"],
["Graham Houston","SS","Venice HS","FL","HS","hitter"],
["Connor Salerno","LHP","Sun Valley HS","NC","HS","pitcher"],
["Graham Keen","3B/RHP","Mt. Lebanon HS","PA","HS","hitter"],
["Will Brick","C","Christian Brothers HS","TN","HS","hitter"],
["Leo Nockley","SS","Wyoming Seminary HS","PA","HS","hitter"],
["Caden Borcherding","C","Etowah HS","GA","HS","hitter"],
["Anderson Lambert","OF","McDonogh HS","MD","HS","hitter"],
["Ely Mason","SS","Huntington Beach HS","CA","HS","hitter"],
["Hank Rippy","SS","Anderson HS (transferred from Hyde Park Baptist HS)","TX","HS","hitter"],
["J. Beckett Berg","RHP","Notre Dame HS","CA","HS","pitcher"],
["Selvin Garrett","SS","Buda Johnson HS","TX","HS","hitter"],
["Chase Fuller","SS/RHP","Lincoln HS","FL","HS","hitter"],
["Cameron Aguilar","OF","St. Mark's School","MA","HS","hitter"],
["William Patrick","OF","LSU","LA","College","hitter"],
["Lubin Rincon","SS","Shadow Creek HS","TX","HS","hitter"],
["Gavin Kelly","C/2B","West Virginia","WV","College","hitter"],
["Dax Whitney","RHP","Oregon State","OR","College","pitcher"],
["Brendan Lawson","SS/3B","Florida","FL","College","hitter"],
["Landon Hairston","OF/1B","Arizona State","AZ","College","hitter"],
["Adrian Rodriguez","SS/3B","Texas","TX","College","hitter"],
["Casan Evans","RHP","LSU","LA","College","pitcher"],
["Bino Watters","OF","LSU (transferred from Notre Dame)","LA","College","hitter"],
["Levi Clark","C","Tennessee","TN","College","hitter"],
["Aidan King","RHP","Florida","FL","College","pitcher"],
["Dylan Volantis","LHP","Texas","TX","College","pitcher"],
["Jimmy Janicki","C/3B","Troy","AL","College","hitter"],
["Chase Fralick","C/3B","Auburn","AL","College","hitter"],
["Jack Ohman","RHP","Yale","CT","College","pitcher"],
["Bub Terrell","OF","Auburn","AL","College","hitter"],
["Blaine Brown","OF/LHP","Tennessee","TN","College","hitter"],
["William Schmidt","RHP","LSU","LA","College","pitcher"],
["Jake Hanley","1B/OF","Indiana","IN","College","hitter"],
["Austin Nye","RHP","Vanderbilt","TN","College","pitcher"],
["Noah Franco","1B/LHP","TCU","TX","College","hitter"],
["Ryan McPherson","RHP","Mississippi State","MS","College","pitcher"],
["James Nunnallee","OF","Mississippi State","MS","College","hitter"],
["Wylan Moss","RHP","UCLA","CA","College","pitcher"],
["Hogan Denny","C","Indiana","IN","College","hitter"],
["Ethan Surowiec","3B","Florida (transferred from Ole Miss)","FL","College","hitter"],
["Ethan Lund","LHP","Oklahoma State","OK","College","pitcher"],
["Max Luzarraga","RHP","Dallas Baptist","TX","College","pitcher"],
["Bradley Zayac","RHP","Liberty (transferred from East Carolina)","VA","College","pitcher"],
["Nate Taylor","RHP","Vanderbilt (transferred from Georgia)","TN","College","pitcher"],
["Tomas Valincius","LHP","Mississippi State","MS","College","pitcher"],
["Chris Levonas","RHP","Wake Forest","NC","College","pitcher"],
["Brodie Johnston","3B","Vanderbilt","TN","College","hitter"],
["Landon Mack","RHP","Tennessee (transferred from Rutgers)","TN","College","pitcher"]
];

// Research pass #1 (test batch, pitchers) — sourced from Baseball America, Perfect Game, and
// Prep Baseball Report; paraphrased into original wording, never copied verbatim. Only applies to
// players with no existing saved edits, so it never overwrites anything already entered by hand.
const RESEARCH_PATCH = {
  'Gabriel Lehouillier': {
    bats:'L', throws:'R', height:'6-1', weight:'208',
    sources:[
      {outlet:'Perfect Game', date:'2026', note:'Listed 6-1/211, L/R, 1B/OF, 2027 grad; plays for Academy of Baseball Canada (Levis, QC); detailed grades behind paywall'},
      {outlet:'FieldLevel', date:'2026', note:'Recruiting profile lists 6-1/205, 1B/LF/RF, Levis QC \u2014 no commit or grades listed'},
      {outlet:'Prospect Select Baseball', date:'2026', note:'Rostered on Academy of Baseball Canada 2027 team page, Levis, QC'}
    ]
    // THIN COVERAGE \u2014 no national ranking, stats, or commit found as of Aug 2026. Blurb/notes left
    // blank intentionally so he keeps the needs-report flag rather than padding out a write-up.
  },
  'Chase Fuller': {
    bats:'R', throws:'R', height:'6-3', weight:'205', commit:'Florida State',
    blurb:'Perfect Game\u2019s #1 overall prospect in the 2027 HS class \u2014 explosive two-way athlete with top-of-scale raw power.',
    notes:'Son of Corey Fuller, a 10-year NFL defensive back (Vikings, Browns, Ravens), and offers similar athleticism and strength. Both Perfect Game and Prep Baseball Report rank him the #1 overall prospect in the 2027 class. Physically mature with punishing raw power \u2014 evaluators project a 25-plus home run threat with a power-over-hit profile, some swing-and-miss included. Plus runner with a plus arm; likely fits best at third base long-term despite playing shortstop now. On the mound he\u2019s up to the mid-90s (97 mph max per PBR) with a breaking ball and changeup, though most see him as a better fit as a position player. 2025 season: .258 with 4 HR at the plate, 3-0 with a 1.59 ERA and 37 K on the mound. Committed to Florida State. Comped by one outlet to Nationals 2021 first-rounder Brady House at a similar stage.',
    sources:[
      {outlet:'Baseball America / Fueled by Sports', date:'Apr 2026', note:'#1 overall 2027 prospect (PG/PBR); top-of-scale raw power, plus run/arm, comp to Brady House'},
      {outlet:'Perfect Game / Tallahassee Democrat', date:'Feb 2026', note:'Committed Florida State; FB up to mid-90s; father Corey Fuller played 10 NFL seasons'}
    ]
  },
  'Lubin Rincon': {
    bats:'L', height:'6-3', weight:'170', commit:'Texas',
    blurb:'Texas\u2019 #1-ranked in-state recruit for 2027 \u2014 a hit-over-power shortstop with a plus glove and a wiry frame that projects to add strength.',
    notes:'From Pearland, Texas (Shadow Creek HS). Ranked the No. 1 player in the state of Texas for the 2027 class. Prep Baseball Report grades him as a plus future defender at shortstop with solid arm strength, and a hit-over-power approach at the plate with mechanics evaluators like (70.2 mph bat speed, 95 mph max exit velocity, 355-foot max distance as an underclassman). MLB.com\u2019s early mock draft calls him a "wiry" lefty bat with excellent contact skills and more raw pull-side pop than his frame suggests. Committed to Texas.',
    sources:[
      {outlet:'Prep Baseball Report', date:'Sep 2025', note:'6-3/170, plus future SS defender, hit-over-power approach, 95 mph max EV'},
      {outlet:'SI / Texas Athletics', date:'Nov 2025', note:'#1 recruit in Texas for 2027 class; committed to Texas'}
    ]
  },
  'Bub Terrell': {
    bats:'L', throws:'L', height:'6-3', weight:'230',
    blurb:'Auburn outfielder (real name D\u2019Marion) who turned down pro ball in 2024 \u2014 solid freshman debut with power still to unlock.',
    notes:'Drafted in the 19th round of the 2024 draft by the Blue Jays out of Thompson HS but chose Auburn instead. Split time between first base and the outfield in his first two seasons on campus. Hit .300 as a freshman, though pitch-recognition issues limited how often he got to his raw power. Auburn\u2019s coaching staff has flagged him as one of several key 2027-draft-eligible Tigers to watch (alongside Chase Fralick and others). One outlet has floated him as a potential first-round talent if the power translates more consistently in 2026-27.',
    sources:[
      {outlet:'Three Quarter Slot', date:'Jul 2025', note:'6-3/224, freshman year .300 BA, power limited by pitch recognition'},
      {outlet:'247Sports (Auburn)', date:'Jun 2026', note:'Listed among Auburn\u2019s key 2027-draft-eligible players by the coaching staff'}
    ]
  },
  'Wylan Moss': {
    bats:'R', throws:'R', height:'6-3', weight:'200',
    blurb:'Big Ten All-Freshman bulk reliever with starter traits \u2014 low-90s heat touching 96 and three usable secondaries.',
    notes:'From Tustin, California (Mater Dei HS) \u2014 was a 10-grade (\u201celite level college prospect\u201d) recruit per Perfect Game and posted a 0.90 ERA with 82 K in 60 IP as a HS senior. Freshman 2025 at UCLA: 2.98 ERA in 48.1 IP (split starter/reliever), Big Ten All-Freshman Team, 49 K against 16 BB. Used mostly as a multi-inning bulk reliever as a 2026 sophomore, with reported season stats of 5-1, 2.49 ERA, 76 strikeouts. Fastball works low-90s and touches 96, with a low-80s changeup as his primary secondary and a short-breaking mid-80s slider.',
    sources:[
      {outlet:'Baseball America', date:'2024-25', note:'6-3/200, FB low-90s to 96, changeup primary secondary, short mid-80s slider'},
      {outlet:'D1Baseball / UCLA Athletics', date:'2026', note:'2026 sophomore: 5-1, 2.49 ERA, 76 K; freshman 2025: 2.98 ERA/48.1 IP, Big Ten All-Freshman'}
    ]
  },
  'Jack Ohman': {
    blurb:'Ivy League ace who climbed to a top-10 spot on Baseball America\u2019s 2027 college board \u2014 command and feel over velocity.',
    notes:'A remarkable rise: Ohman was Brophy Prep\u2019s starting shortstop, not a pitcher-only recruit, sitting just 88-90 mph as a recruit. As a Yale freshman in 2025 he led the nation with a 1.34 ERA across 73.2 IP, was named Ivy League Pitcher of the Year, Perfect Game Freshman Pitcher of the Year, a Freshman All-American and Golden Spikes semifinalist \u2014 the first Yale player to earn All-America honors since future big leaguer Ryan Lavarnway in 2007. Opened his 2026 sophomore season by striking out 10 over 5 IP (1 ER) against Bethune-Cookman. Evaluators credit elegant mechanics, mature command, and feel for sequencing over raw stuff. An economics major who has picked the brain of fellow Yale alum Theo Epstein and hopes to work in a front office himself one day.',
    sources:[
      {outlet:'ESPN', date:'Feb 2026', note:'Freshman 2025: nation-leading 1.34 ERA/73.2 IP; Ivy League Pitcher of the Year; top-10 on BA\u2019s 2027 college board'},
      {outlet:'Baseball America', date:'May 2025', note:'Former HS shortstop, not a pitching recruit; elegant mechanics/command over velocity; No. 8 on 2027 college board'}
    ]
  },
  'Blaine Brown': {
    bats:'L', throws:'L', height:'6-3', weight:'180',
    blurb:'Power-hitting two-way transfer \u2014 ascending draft stock after a big first season at Tennessee.',
    notes:'From Houston. Transferred from Rice (where he led the team in batting average and RBI as a freshman) to Tennessee for 2026, his first season with the Vols: .240/.308/.467, 13 HR, 42 RBI, 43 R over 59 games, with 7 of those homers and 18 RBI coming in SEC play specifically. Highlights included a grand slam against LSU and a two-homer game against Alabama. Sees occasional two-way usage on the mound (4 relief outings, 3 IP in 2026) but profiles primarily as a power bat. Named to the 2026 Baseball America Preseason All-American second team and the John Olerud Two-Way Player of the Year watch list. Confirmed returning to Tennessee for 2027.',
    sources:[
      {outlet:'On3 (Volquest)', date:'Jun 2026', note:'2026 Tennessee debut: .240/.308/.467, 13 HR, 42 RBI, 43 R in 59 games; confirmed returning for 2027'},
      {outlet:'Daily Beacon (UT student paper)', date:'2026', note:'Houston native; led Rice in BA/RBI as a freshman before transferring; ascending 2027 draft stock'}
    ]
  },
  'Brodie Johnston': {
    bats:'R', throws:'R',
    blurb:'Former #1-ranked Tennessee HS prospect who turned down the 2024 draft to play at Vanderbilt.',
    notes:'Note: the correct spelling of his surname is Johnston (some earlier sources/sheets had it as "Johnson"). From Ooltewah, TN (Boyd-Buchanan School) \u2014 hit .523 with 8 HR, 46 RBI and 18 doubles as a senior, was named a MaxPreps All-American and ranked the #1 overall prep prospect in Tennessee for the 2024 draft, but withdrew his name to honor his Vanderbilt commitment. Played summer ball in the Appalachian League for the Greeneville Flyboys (.284, 5 HR) after graduating. Appears in multiple 2027 mock drafts as a projected first-round talent at third base.',
    sources:[
      {outlet:'Wikipedia (sourced to Vanderbilt/conference releases)', date:'2024-25', note:'#1 Tennessee prep prospect in 2024 class; withdrew from draft for Vanderbilt commitment; HS senior .523/8 HR/46 RBI'},
      {outlet:'Bleacher Report mock draft', date:'Jul 2026', note:'Listed as a 2027 first-round projection at 3B'}
    ]
  },
  'Jake Hanley': {
    bats:'L', throws:'R', height:'6-6', weight:'241',
    blurb:'Massive power-bat first baseman \u2014 double-plus raw power potential with real questions about hit tool and contact.',
    notes:'From Toledo, Ohio (Mason HS), where he was Ohio\u2019s 2024 State Player of the Year as a two-way star: .384 with 5 HR at the plate, and 9-1/1.79 ERA/87 K in 58.2 IP on the mound. At 6-6/241 with big bat speed, evaluators see a chance for double-plus power at maturity, but a pull-heavy, hit-tool-limited approach and well-below-average speed likely lock him into first base as a pro. Has also pitched (low-90s FB, up to 94-95, average curveball) but profiles primarily as a power lefty bat at Indiana. Recent in-season college performance data was thin in this search pass \u2014 worth a follow-up once more current Indiana stats are available.',
    sources:[
      {outlet:'Baseball America', date:'2024-25', note:'6-6/225-241, double-plus raw power potential, hit tool questions, likely locked into 1B'},
      {outlet:'Indiana Athletics bio', date:'2024', note:'HS senior: .384 BA 5 HR; 9-1, 1.79 ERA, 87 K pitching; Ohio State Player of the Year'}
    ]
  },
  'Austin Nye': {
    bats:'R', throws:'R', height:'6-2', weight:'210',
    injury:'Season-ending arm injury on Feb. 28, 2026 \u2014 pulled after just 15 pitches in a start vs. Arizona at the Las Vegas Classic after a dominant start to his sophomore season (10 scoreless IP, 13 K, 2 BB). Did not pitch again in 2026.',
    blurb:'Top-10 college arm whose sophomore breakout was cut short by a season-ending injury \u2014 was excellent when healthy.',
    notes:'California native. Freshman 2025: 2-1, 3.55 ERA, 58 K in 50.2 IP as Vanderbilt\u2019s primary midweek starter, Freshman All-American. Opened 2026 in the weekend rotation and looked like a frontline SEC arm before the injury ended his season in February. Coach Tim Corbin has praised his makeup: \u201cyou know exactly what you are getting from him.\u201d Considered a potential 2027 first-rounder if he returns to form.',
    sources:[
      {outlet:'SI / Yahoo Sports', date:'Mar 2026', note:'Season-ending injury after 10 scoreless IP to start 2026; freshman 2025 line 2-1, 3.55 ERA, 58 K/50.2 IP'},
      {outlet:'Vanderbilt Athletics', date:'Feb 2026', note:'6-2/210, RHP; coach Tim Corbin praise for makeup and consistency'}
    ]
  },
  'Noah Franco': {
    bats:'L', throws:'L', height:'6-3', weight:'190',
    blurb:'Physical two-way threat at TCU \u2014 huge raw power and a low-90s fastball, but an aggressive approach that comes with swing-and-miss.',
    notes:'A California native who played at IMG Academy and was a top-100 prospect in the 2025 HS class before reclassifying to 2024 and honoring his TCU commitment instead of signing. Preseason First-Team All-American as a two-way player entering 2026. As a freshman (2025): 56 games played, 11 HR as a position player, 12.1 IP pitching. Ranked 12th on Baseball America\u2019s 2027 college board. Scouting take: huge physicality and raw power, but a hyper-aggressive, long swing that leads to real strikeout risk (went 0-for-10 with 8 K in one documented stretch) even amid loud exit velocities (multiple 97+ mph batted balls, some 101+, in his 2026 season opener vs. Vanderbilt). On the mound: low-90s fastball up to 94, high-spin slider, developing changeup.',
    sources:[
      {outlet:'Baseball America', date:'Feb 2026', note:'Ranked #12 college prospect; huge raw power, aggressive/long swing, swing-and-miss risk; 97-101+ mph exit velos in opener'},
      {outlet:'Baseball America (HS scouting) / Three Quarter Slot', date:'2024-25', note:'Reclassified from 2025 to 2024 class; two-way FB up to 94, high-spin slider; preseason First-Team All-American two-way'}
    ]
  },
  'Ryan McPherson': {
    injury:'Missed extended time in 2026 with a forearm injury; made his third start back from the injury in the Starkville Regional final on May 31, 2026.',
    blurb:'Mississippi State weekend starter who returned from a forearm injury in time for a deep NCAA Tournament run.',
    notes:'From Hollywood, Florida (North Broward Prep). One of Mississippi State\u2019s three weekend starting pitchers alongside Tomas Valincius and Duke Stone, none of whom were 2026-draft-eligible \u2014 a big part of why evaluators like the Bulldogs\u2019 rotation depth heading into 2027. Missed time with a forearm injury during the 2026 season before returning to start the Starkville Regional final. Specific 2026 statistical detail was limited in this search pass and would benefit from a follow-up once fuller box scores are available.',
    sources:[
      {outlet:'Yahoo Sports (Clarion Ledger)', date:'May 2026', note:'Returning from forearm injury, 3rd start back was Starkville Regional final; Hollywood, FL, North Broward Prep'},
      {outlet:'AOL / 247Sports (MSU 2027 roster tracker)', date:'Jun 2026', note:'One of three non-2026-draft-eligible weekend starters (with Valincius, Stone) anchoring a deep MSU staff'}
    ]
  },
  'James Nunnallee': {
    school:'TCU (transferred from Mississippi State)',
    blurb:'Modest 2026 season at Mississippi State led to a transfer portal move to TCU \u2014 lost his starting job partway through the year.',
    notes:'Originally transferred to Mississippi State from Virginia and opened 2026 as the starting right fielder, but was later replaced in the lineup by Jacob Parker and finished the year hitting just .241 with 1 HR, 5 RBI and 11 runs in a part-time role. Entered the transfer portal on June 9, 2026 and committed to TCU for 2027. Worth noting this is a real step back from a hyped recruiting profile (was a 2024 MLB Draft-covered HS outfielder out of Lightridge HS) \u2014 the college performance so far hasn\u2019t matched the earlier hype, and he\u2019ll need a bounce-back year at a new program to stay on 2027 boards.',
    sources:[
      {outlet:'AOL (247Sports network)', date:'Jun 2026', note:'.241 BA, 1 HR, 5 RBI, 11 R at Mississippi State in 2026; lost starting RF job; transferred to TCU'},
      {outlet:'247Sports', date:'Jun 2026', note:'Entered transfer portal June 9, 2026; originally a Virginia transfer'}
    ]
  },
  'Landon Hairston': {
    bats:'L', throws:'L', height:'6-0', weight:'180',
    blurb:'2026 Baseball America College Player of the Year \u2014 record-setting power season from a corner-turned-outfield bat with a strong baseball bloodline.',
    notes:'Son of 11-year MLB veteran Scott Hairston, from a family with four generations of pro ballplayers. Broke ASU\u2019s single-season home run record as a sophomore in 2026: .400/.509/.860, 28 HR, 20 doubles, 11 SB, and more walks (44) than strikeouts (27) \u2014 led the nation in slugging. Won Big 12 Player of the Year, Baseball America National Player of the Year, and was a Golden Spikes Award finalist (runner-up). Freshman 2025: .333/.441/.467 with 4 HR, followed by a Cape Cod League summer with the Orleans Firebirds. Confirmed returning to Arizona State for a 2027 draft-eligible junior season.',
    sources:[
      {outlet:'Baseball America / 247Sports', date:'Jun 2026', note:'National Player of the Year; .400/.509/.860, 28 HR, 44 BB vs 27 K; projected top-4 pick'},
      {outlet:'Arizona State Press / ASU Athletics', date:'Jul 2026', note:'Golden Spikes finalist; confirmed return for 2027; Queen Creek, AZ, Casteel HS'}
    ]
  },
  'Aidan King': {
    bats:'L', throws:'R',
    blurb:'2026 SEC Pitcher of the Year (first underclassman ever to win it) \u2014 works 91-94 with plus command.',
    notes:'Jacksonville native (Bishop Snyder HS) who moved from Florida\u2019s Saturday to Friday-night starter role in SEC play and became the first underclassman in program history to win SEC Pitcher of the Year. 2026 sophomore season: 8-2, 3.21 ERA, 87 IP, 92 K, 19 BB, .218 opponents\u2019 average, led the SEC in WHIP (0.93). Also a Golden Spikes and Dick Howser Trophy semifinalist and Baseball America College Pitcher of the Year finalist. Coach Kevin O\u2019Sullivan describes him as \u201ca throwback\u201d who commands both sides of the plate at 91-94 mph.',
    sources:[
      {outlet:'SI / Florida on SI', date:'May-Jun 2026', note:'SEC Pitcher of the Year; 8-2, 3.21 ERA, 87 IP, 92 K, 19 BB, .218 BAA; projected top-15/29 pick'},
      {outlet:'WRUF (ESPN Gainesville)', date:'May 2026', note:'91-94 mph with plus command per Florida coach Kevin O\u2019Sullivan'}
    ]
  },
  'Casan Evans': {
    bats:'R', throws:'R', height:'6-2', weight:'194',
    blurb:'Up-arrow Texas righty who moved from LSU\u2019s bullpen into the Friday rotation \u2014 mid-90s heat with three swing-and-miss secondaries.',
    notes:'From Houston (St. Pius X HS), was a two-way HS standout (pitcher/shortstop) who threw three no-hitters. Pitched primarily in relief as an LSU freshman in 2025 (5-1, 2.05 ERA, 52.2 IP, 71 K, 19 BB) before moving into the Friday-night starter role as a sophomore in 2026. Sits around 95 mph and has touched 99, pairing it with a low-80s changeup, ~80 mph curveball, and mid-80s cutter/slider. Ranked among Baseball America\u2019s top 10 college pitchers for the 2027 class.',
    sources:[
      {outlet:'Baseball America', date:'Apr 2026', note:'Ranked top-10 college pitcher nationally; FB 95, touches 99, three swing-and-miss secondaries'},
      {outlet:'Baseball America (SEC pitchers to watch)', date:'Feb 2026', note:'2025 freshman relief line: 5-1, 2.05 ERA, 71 K in 52.2 IP; Texas native, two-way HS player'}
    ]
  },
  'William Schmidt': {
    bats:'R', throws:'R',
    blurb:'Former #1-ranked HS righty nationally (Perfect Game) who turned down pro ball to help LSU win a national title.',
    notes:'From Baton Rouge (Catholic High School) \u2014 was Perfect Game\u2019s No. 1 high school right-handed pitcher and a projected late-first-rounder in 2024, but withdrew from the draft hours before it started to honor his LSU commitment. Freshman 2025: 7-0, 4.73 ERA, 32.1 IP, and was part of LSU\u2019s 2025 College World Series championship roster. Ranked among Baseball America\u2019s top 10 college pitchers nationally for the 2027 class, part of a loaded LSU staff alongside Casan Evans.',
    sources:[
      {outlet:'Baseball America', date:'Apr 2026', note:'Ranked top-10 college pitcher nationally in 2027 class'},
      {outlet:'Wikipedia (sourced to LSU/BA draft coverage)', date:'2026', note:'Withdrew from 2024 draft as PG\u2019s #1 HS RHP; 2025 freshman line 7-0, 4.73 ERA; 2025 CWS champion'}
    ]
  },
  'Chris Levonas': {
    blurb:'Turned down a 2nd-round bonus to pitch at Wake Forest \u2014 broke out as a sophomore with a sub-3.00 ERA and elite strikeout numbers.',
    notes:'From New Jersey (Christian Brothers Academy) \u2014 was drafted 67th overall by the Brewers in 2024 (a $1.3M+ slot pick) but chose Wake Forest instead, one of only three players picked in the first 10 rounds that year to do so. HS senior season: 0.44 ERA, 68 K against 10 BB in 31.2 IP, fastball up to 98. Broke out as a Wake Forest sophomore in 2026: reported lines include 10-3, 2.82 ERA, 116 K against 33 BB, and a .171 opponents\u2019 average across the full season, with a fastball sitting 97 mph backed by a curveball and cutter-slider. D1Baseball third-team All-American, first-team All-ACC. MLB.com\u2019s early mock has him going 7th overall in 2027.',
    sources:[
      {outlet:'World Baseball Network / MLB.com mock', date:'Jul 2026', note:'2026 season: 10-3, 2.82 ERA, 116 K/33 BB, .171 BAA, FB ~97; projected #7 overall'},
      {outlet:'Wake Forest Athletics / Three Quarter Slot', date:'2025-26', note:'Drafted 67th overall 2024 (Brewers), chose Wake Forest; HS senior 0.44 ERA, FB to 98'}
    ]
  },
  'Dylan Volantis': {
    height:'6-6', weight:'212',
    blurb:'6-6 lefty with a unique high-slot delivery \u2014 was Texas\u2019 closer as a freshman before stretching out as a starter.',
    notes:'Uses his height and a higher three-quarters release to create steep, uncomfortable angles on every pitch, headlined by a 90-91 mph sinker. Recorded 12 saves as Texas\u2019 closer during a dominant freshman 2025 season: 4-1, 1.94 ERA, 51 IP, 74 K, 12 BB, 0.882 WHIP. A Baseball America College Pitcher of the Year finalist alongside Aidan King and Dax Whitney. Considered one of the more projectable, unique arms in the 2027 class given his frame and delivery.',
    sources:[
      {outlet:'Baseball America (SEC/ACC pitchers to watch)', date:'Feb 2026', note:'6-6/212; freshman 2025: 4-1, 1.94 ERA, 74 K/12 BB in 51 IP, 12 saves as closer'},
      {outlet:'Yahoo Sports', date:'May 2026', note:'Named Baseball America College Pitcher of the Year finalist'}
    ]
  },
  'Chase Fralick': {
    bats:'L', height:'6-2',
    blurb:'Power-hitting Auburn catcher \u2014 20-homer sophomore season with a chance to be the class\u2019s top backstop.',
    notes:'Stepped into Auburn\u2019s primary catching role as a freshman in 2025 after a fractured scapula pushed eventual first-rounder Ike Irish to the outfield, and hit .335/.426/.472 with 17 doubles, 4 HR and 41 RBI in the role. Broke out as a sophomore in 2026 with a 20-home-run season and a 1.069 OPS from the left side, with plenty of arm strength behind the plate. Evaluators see a first-round bat whose defensive development (receiving specifically) will determine whether he holds down the top catcher spot in the 2027 class or profiles more as a bat-first mover to third base.',
    sources:[
      {outlet:'MLB.com mock draft', date:'Jul 2026', note:'2026 sophomore: 20 HR, 1.069 OPS from left side, plus arm strength'},
      {outlet:'Bleacher Report', date:'Jul 2026', note:'Freshman 2025: .335/.426/.472, 17 2B, 41 RBI as Auburn\u2019s primary catcher; first-round bat, receiving skills the swing factor'}
    ]
  },
  'Adrian Rodriguez': {
    blurb:'Promising Texas freshman infielder with bat-to-ball skills and power upside, still working through early strikeout issues.',
    notes:'Coverage on Rodriguez is thinner than most of this board so far \u2014 Three Quarter Slot\u2019s freshman-year report flagged solid bat-to-ball feel and power potential alongside early strikeout concerns and defensive versatility across the infield/outfield. Appears on Perfect Game\u2019s early 2027 mock draft board (MLB Pipeline had him going 20th overall to Cleveland). Worth a deeper follow-up once more 2026 in-season data is available.',
    sources:[
      {outlet:'Three Quarter Slot', date:'May 2025', note:'Freshman report: bat-to-ball skills, power potential, early K concerns, defensive versatility'},
      {outlet:'On3 / MLB Pipeline mock', date:'Jul 2026', note:'Listed SS/3B/OF, Texas; appears in early 2027 first-round mock (#20 to Cleveland)'}
    ]
  },
  'Tomas Valincius': {
    bats:'L', throws:'L', height:'6-2', weight:'225',
    blurb:'Elite two-way-mix college lefty \u2014 fastball parked around 95 with a mid-80s slider missing bats at a 48% clip and an effective changeup.',
    notes:'Baseball America ranks him inside the top 10 college arms in the 2027 class, one of five pitchers with a fastball that touches or sits in the upper 90s to go with plus secondaries. Transferred from Virginia to Mississippi State to follow head coach Brian O\u2019Connor and immediately became the Bulldogs\u2019 top starter in 2026: 97.2 IP, 3.50 ERA, 134 K (12.3 K/9, top-5 nationally), 1.8 BB/9 across 17 starts, helping MSU to a 43-win season and a super regional appearance. An early-July 2026 MLB.com mock draft still has him going 3rd overall. Lithuanian heritage \u2014 has played for the Lithuania national team since age 12.',
    sources:[
      {outlet:'MLB.com', date:'Jul 2026', note:'Mock draft #3 overall; FB ~95, mid-80s slider (48% whiff/Synergy), effective changeup'},
      {outlet:'Baseball America', date:'Apr 2026', note:'Ranked top-10 college pitcher nationally in 2027 class'},
      {outlet:'World Baseball Network / Hail State (school bio)', date:'2026', note:'2026 season line: 97.2 IP, 3.50 ERA, 134 K, 12.3 K/9; transferred from Virginia'}
    ]
  },
  'Bino Watters': {
    bats:'L', height:'6-2', weight:'215',
    blurb:'Top-ranked hitter in the 2026 transfer portal \u2014 big power/OBP season at Notre Dame before joining LSU.',
    notes:'Rated the No. 1 available position player in the transfer portal by multiple outlets (Baseball America, On3, D1Baseball) after a sophomore season at Notre Dame: .362 average, 1.057 OPS, 10 home runs, 31 extra-base hits, First Team All-ACC. From Rochester Hills, Michigan (Rochester Adams HS). Committed to LSU in June 2026, filling an outfield hole left by departing starters. Projected as a late-first-round talent for the 2027 draft, with reports crediting power, plate discipline, and defensive versatility.',
    sources:[
      {outlet:'NOLA.com / The Advocate', date:'Jun 2026', note:'Top transfer portal player per Baseball America; .362/1.057 OPS, 10 HR, 31 XBH at Notre Dame'},
      {outlet:'TigerRag / 247Sports', date:'Jun 2026', note:'6-2/215 lefty bat from Rochester Hills, MI; projected top-25 first rounder for 2027'}
    ]
  },
  'Landon Mack': {
    bats:'S', throws:'R', height:'6-1', weight:'212',
    injury:'Battled arm soreness late in the 2026 season at Tennessee; did not pitch in the final two regular-season series or in the postseason.',
    blurb:'Proven transfer arm with a five-pitch mix \u2014 Big Ten Freshman All-American at Rutgers before choosing Tennessee over LSU.',
    notes:'Emerged as Rutgers\u2019 Friday-night ace as a true freshman in 2025 (6-5, 4.03 ERA, 80.1 IP, 70 K, 17 BB, Big Ten All-Freshman Team, Baseball America 2nd Team Freshman All-American) despite starting the year buried on the depth chart. Chose Tennessee over LSU, Alabama, Clemson and Florida State in the transfer portal. First season in Knoxville (2026) was solid but injury-shortened: 4-4, 4.67 ERA, 61.2 IP, 77 K, 25 BB across 12 starts before arm soreness ended his year early. From Columbus, NJ (Bishop Eustace HS). Confirmed returning to Tennessee for a 2027 draft-eligible junior season.',
    sources:[
      {outlet:'On3', date:'Jun 2026', note:'Returning to Tennessee for 2027; 2026 line 4-4, 4.67 ERA, 77 K in 61.2 IP; arm soreness ended season early'},
      {outlet:'247Sports / UT Athletics bio', date:'Jul 2025', note:'6-1/212, B/T S/R; Rutgers freshman year 6-5, 4.03 ERA, Big Ten All-Freshman honors'}
    ]
  },
  'Dylan Seward': {
    school:'Norco High School',
    bats:'S', throws:'R', height:'6-0', weight:'175', commit:'Tennessee',
    blurb:'The consensus #1 overall prospect in the 2027 class \u2014 switch-hitting shortstop with top-of-the-scale speed and advanced actions.',
    notes:'Baseball America\u2019s top-ranked prospect in the entire 2027 class, ahead of every college name too. A legitimate switch-hitter with effortless bat speed from both sides (tends to loft the ball better as a lefty). Clocked sub-6.10 60-yard dash times \u2014 among the fastest in the class \u2014 and grades as a fluid, dynamic defender at shortstop with quick hands and range. Hit tool is ahead of the raw power currently, though strength gains have started to show more impact. Committed to Tennessee.',
    sources:[
      {outlet:'Baseball America', date:'Jul 2026', note:'Ranked #1 overall prospect in the 2027 class (all levels)'},
      {outlet:'Prospect Porch', date:'Apr 2026', note:'Switch-hit bat speed from both sides, sub-6.10 60-yard, fluid/dynamic SS defender'},
      {outlet:'Fueled by Sports', date:'Apr 2026', note:'Norco HS (CA), 6-0/175, premium defensive value with offensive projection remaining'}
    ]
  },
  'Grant Westphal': {
    bats:'L', throws:'R', height:'6-1', weight:'205', commit:'Texas',
    blurb:'Five-tool projection from Kansas \u2014 loud lefty contact with a chance to stick in center field.',
    notes:'Baseball America credits a lean, athletic frame with more room to fill out, fast bat speed, and pull-side power upside toward a 20-plus home run threat down the line, plus plus speed that should keep him in center field. Ranked the No. 1 outfielder in Kansas\u2019 2027 class by Prep Baseball Report. Strong summer 2026 showing: 17 extra-base hits (9 doubles, 6 triples, 2 HR) and a 1.324 OPS. Committed to Texas.',
    sources:[
      {outlet:'Baseball America', date:'Dec 2025', note:'Lefty bat speed, pull power projection, plus CF speed; committed Texas'},
      {outlet:'Prep Baseball Report', date:'2026', note:'No. 1 Kansas OF in 2027 class; 6-1/205; summer 2026: 17 XBH, 1.324 OPS'}
    ]
  },
  'Gavin Kelly': {
    height:'6-0', weight:'175',
    blurb:'Baseball America\u2019s #1 overall college prospect \u2014 a catcher who also plays a plus-range middle infield.',
    notes:'A rare profile: legitimate everyday catcher (strong arm, threw out 10 of 27 base stealers) who also plays second base and outfield at a high level. Broke out as a West Virginia sophomore in 2026 \u2014 finished around .382-.387 with mid-teens-to-high-teens home runs, an OPS well over 1.100, First Team All-Big 12 at catcher, and semifinalist honors for the Golden Spikes Award and Dick Howser Trophy. Freshman year: .299/.402/.395 with All-Big 12 Freshman Team recognition, followed by a strong Cape Cod League summer with the Bourne Braves. From Pittsburgh, PA (Central Catholic HS). Evaluators have floated a Buster Posey comparison given the blend of bat-to-ball skill, power, and defensive versatility.',
    sources:[
      {outlet:'Baseball America / SI', date:'May 2026', note:'Ranked #1 overall college prospect in 2027 class; 2026 sophomore breakout at C/2B'},
      {outlet:'Wikipedia (sourced to WVU/conference releases)', date:'2026', note:'Freshman 2025: .299/.402/.395, All-Big 12 Freshman Team; Cape Cod League with Bourne Braves'}
    ]
  },
  'Dax Whitney': {
    height:'6-5',
    injury:'Underwent UCL surgery in May 2026 (performed by Dr. Keith Meister) after exiting an April 24 start vs. Hawaii with arm tightness. Whether it was a full Tommy John or an internal-brace procedure was not confirmed in reporting; recovery windows cited range from 7-9 months (internal brace) to 12-18 months (full TJ). ESPN\u2019s Kiley McDaniel reported he is expected back well ahead of the 2027 Draft, but will miss extended time.',
    blurb:'Was the presumptive 1-1 favorite before a season-ending UCL injury in May 2026 \u2014 elite stuff, uncertain recovery timeline.',
    notes:'Before the injury, Whitney was arguably the best pitcher in college baseball: fastball averaging 97.1 mph and peaking at 101, with a sweeper, curveball and changeup all considered above-average to plus, plus well above-average command. 2026 line at the time of injury: 6-1, 2.00 ERA, 104 K in 63 IP (14.86 K/9, top-5 nationally), 0.952 WHIP. From Blackfoot, Idaho \u2014 was a 2024 draft-eligible HS senior (ranked 53rd by ESPN) who chose Oregon State over signing. Still considered a top-of-the-draft talent if healthy; his own read on it: \u201cI look at it as a blessing in disguise.\u201d',
    sources:[
      {outlet:'ESPN', date:'May 2026', note:'UCL surgery reported; FB avg 97.1/peak 101; sweeper/curveball/changeup all plus-ish; elite command'},
      {outlet:'MLB.com', date:'May 2026', note:'2026 line before injury: 6-1, 2.00 ERA, 104 K/63 IP; recovery timeline dependent on TJ vs. internal brace'},
      {outlet:'Portland Tribune', date:'May 2026', note:'Surgery scheduled May 11 with Dr. Keith Meister; expected back ahead of 2027 Draft per reporting'}
    ]
  },
  'Brendan Lawson': {
    blurb:'Consensus top-2 prospect in the class \u2014 big raw power and bat speed from a Florida shortstop who\u2019ll likely move off the position as a pro.',
    notes:'Canadian (Toronto area, Lawrence Park Collegiate Institute) who was drafted in the 19th round by the Cardinals in 2024 but chose Florida instead. Played 1B/2B/3B as a freshman (2025, .317 BA) around Gators injuries, then returned to shortstop as the 2026 opening-day starter: .312 average, EE mid-to-high-teens home runs, 48+ RBI, OPS over 1.20 \u2014 numbers that fluctuated somewhat across the season but held up as the class\u2019s top or second-ranked bat all year (Baseball America has him #1 or #2 depending on the update; Over Slot has him #1 among college players). Evaluators like the combination of raw power, bat speed, and an advanced approach for his age; expected to slide to third base or center field as a pro given his size, though he\u2019s held his own at short. Confirmed returning to Florida for a 2027 draft-eligible junior season.',
    sources:[
      {outlet:'Over Slot', date:'2026', note:'Ranked #1 college prospect; power/bat speed/approach; likely moves to 3B or CF as a pro'},
      {outlet:'SI / Florida on SI', date:'Jul 2026', note:'Predicted 1-2 overall in early mocks; 2026 line .312 BA, 14-19 HR range, confirmed returning for 2027'},
      {outlet:'Wikipedia (sourced to team/conference releases)', date:'2026', note:'19th-round 2024 Cardinals pick, did not sign; played 1B/2B/3B as a freshman before returning to SS'}
    ]
  },
  'Connor Salerno': {
    bats:'R', throws:'L', height:'6-4', weight:'225', commit:'Mississippi State',
    grades:{pitcher:{fastballVelo:96, secondaries:[{type:'Sweeper',grade:55},{type:'Changeup',grade:45}], command:55}},
    blurb:'Advanced 2027 lefty with a fastball up to 96 and feel to spin a sweeping slider.',
    notes:'Baseball America credits an advancing fastball that reached 96 mph in 2025, playing up further thanks to extension from a lower release height, plus a sharp, sweeping slider; the changeup lags behind both pitches. Perfect Game separately describes a low-90s sinker with heavy run (up to 93) and a low-80s breaking ball with depth to both sides of the plate, calling it a durable starter\u2019s frame and arsenal. An early-July 2026 MLB.com mock draft still has him going in the first 10 picks off the same mid-90s-fastball, spin-a-breaking-ball, feel-for-a-changeup profile \u2014 consistent with the 2025 reports, not a step back. Won MVP Pitcher at the 2025 Prep Baseball All-American Game; ranked #11 nationally in the 2027 class by Baseball America. Grades above are my synthesis from outlet scouting prose, not outlets\u2019 own published numeric grades \u2014 adjust as you see fit.',
    sources:[
      {outlet:'MLB.com', date:'Jul 2026', note:'Still profiled in first-10 range of an early 2027 mock; mid-90s FB, spins a breaking ball, good change feel, competes in zone'},
      {outlet:'Baseball America', date:'Aug 2025', note:'Ranked #11 nationally; FB reached 96 mph in 2025, plus slider, advanced strike-thrower'},
      {outlet:'Perfect Game', date:'2025', note:'6-4/225, low-90s sinker (peak 93) with heavy run, sweeping low-80s breaker, durable starter frame'}
    ]
  },
  'J. Beckett Berg': {
    bats:'R', throws:'R', height:'6-5', weight:'193', commit:'Texas',
    grades:{pitcher:{fastballVelo:92, secondaries:[{type:'Slider',grade:45},{type:'Changeup',grade:50}], command:55}},
    blurb:'Projectable 6-5 arm with a fastball up to 92 that profiles for more once he fills out, plus advanced control for his age.',
    notes:'Baseball America describes a lanky 6-foot-5 frame with real physical projection \u2014 a fastball that climbed to 92 mph over the summer of 2025, with real chance to reach the mid-90s as he adds strength. Changeup shows good fade away from lefties and projects as a future swing-and-miss pitch; slider is a developing feel pitch with a short break. Prep Baseball Report ranked him inside the top 10 nationally in the 2027 class and highlighted advanced strike-throwing \u2014 just six walks across 155 batters faced in a productive sophomore season (28 strikeouts, 2.47 ERA over 34 innings). As of a March 2026 LA Times report he was still a featured rotation arm for a 13-1 Notre Dame team at the National Classic tournament, so no health/role concerns since the 2025 scouting. Grades above are my synthesis from outlet scouting prose, not outlets\u2019 own published numeric grades.',
    sources:[
      {outlet:'Los Angeles Times', date:'Mar 2026', note:'Still a featured starter for 13-1 Notre Dame at the National Classic tournament \u2014 confirms active/healthy into junior spring'},
      {outlet:'Baseball America', date:'Sep 2025', note:'6-5 frame, FB reached 92 mph with mid-90s+ projection; changeup fades from lefties; committed Texas'},
      {outlet:'Prep Baseball Report', date:'Jul-Oct 2025', note:'Top-10 national ranking (2027 class); sophomore season 28 K, 2.47 ERA, 34 IP, only 6 BB in 155 batters faced'}
    ]
  },
  'Jaxson Wise': {
    bats:'R', throws:'R', height:'5-11', weight:'140',
    sources:[
      {outlet:'Perfect Game', date:'2026', note:'Physical measurables only: 5-11/140, R/R, Downingtown East \u2014 most scouting content paywalled'},
      {outlet:'Prep Baseball Report', date:'Apr 2026', note:'Previewed ahead of PA State Games as \u201cthis intriguing 2-way prospect from Eastern PA\u201d; full report text not accessible this pass, no pitching velo/mix found yet'}
    ]
    // Deliberately no blurb/notes/grades written \u2014 coverage was too thin to say anything real about
    // his pitching, so he correctly stays flagged as "needs report" rather than being falsely resolved.
  },
// Research pass — college batch 2 (final 8 college players) — sourced from school athletics
// sites, D1Baseball, Baseball America, USA Baseball, PBR, and local/beat coverage; paraphrased
// into original wording, never copied. Grades/velo/secondaries/rank untouched per standing rule.
  "Levi Clark": {
    bats:"R", throws:"R", height:"6-1", weight:"211",
    blurb:"Tennessee power bat who caught fire in SEC play as a sophomore — back in Knoxville for 2027, with his defensive home (C vs. 1B) the open question.",
    notes:"Started 54 of 55 games as a sophomore in 2026, hitting .242 with 13 homers, 13 doubles and a .352 OBP — modest surface line, but he was one of the SEC’s most dangerous hitters in conference play, pacing the Vols in slugging (.646) and tying for the team lead in league homers (9). The catch: Tennessee used him far more at first base (38 starts) than behind the plate (16), so whether he profiles as a catcher or a right-right first baseman is the central evaluation question. Announced in June 2026 he’s returning for his junior year rather than transferring, joining a crowded Vols catching room (Lawless, Grindlinger). D1Baseball included him in its early Top 100 college prospects for the 2027 draft; a 2025 Perfect Game Freshman All-American out of Walton HS (GA), where PBR liked the prototype catcher frame, arm strength and power projection. Two-year career line: .261, 23 HR, 78 RBI.",
    sources:[
      {outlet:"247Sports", date:"Jun 2026", note:"Returning for junior season; .242/13 HR/44 RBI as sophomore; led Vols in SLG and RBI in SEC play; 38 starts at 1B vs 16 at C"},
      {outlet:"D1Baseball", date:"Feb 2026", note:"Listed in early Top 100 college prospects for 2027 draft; 6-1/211, R/R"},
      {outlet:"On3/Volquest", date:"Jun 2026", note:"Career .261 with 23 HR and 78 RBI across two seasons at C and 1B"},
      {outlet:"Tennessee Athletics", date:"2026", note:"2025 PG Freshman All-American 1st team; 2026 Preseason All-SEC 2nd team"}
    ]
  },
  "Jimmy Janicki": {
    bats:"R", throws:"R", height:"6-3", weight:"224",
    blurb:"Sun Belt Player of the Year and arguably the top college catcher in the 2027 class — powered Troy’s first-ever College World Series run.",
    notes:"Monster sophomore season in 2026: roughly .350 with 97 hits, 26 doubles, 21 homers and 87 RBIs — the RBI and total-base (188) figures set Troy single-season records, and he was the first Trojan ever with 20 doubles and 20 homers in the same year. Finished second nationally in RBIs. Named Sun Belt Player of the Year, a D1Baseball and Perfect Game Second Team All-American, NCBWA Third Team All-American, and a Dick Howser Trophy semifinalist, then made the USA Baseball Collegiate National Team training camp. Baseball America had him #18 in its 2027 draft rankings in spring 2026 and the #1 college catcher in the class. Homered twice in Omaha during Troy’s improbable CWS run (four straight elimination wins through the Gainesville Regional, including beating host Florida). Background wrinkle: played third base as a freshman in 2025 (.280, 2 HR) because Brooks Bryan had the catching job — that infield experience is a versatility card if pro teams question the receiving. Downers Grove, IL native.",
    sources:[
      {outlet:"Troy Athletics", date:"Apr 2026", note:"BA ranked him #18 in 2027 draft class and #1 among college catchers; Buster Posey Award midseason watch list"},
      {outlet:"Troy Athletics", date:"Jun 2026", note:"Final line ~.350 with 21 HR, 87 RBI (2nd nationally), 26 2B; school records in RBI and total bases; D1Baseball 2nd Team All-American"},
      {outlet:"USA Baseball", date:"Jun 2026", note:"CNT training camp invite; homered twice at the College World Series; first Trojan with a 20-2B/20-HR season"},
      {outlet:"Troy Athletics", date:"May 2026", note:"Sun Belt POY; played primarily 3B as a 2025 freshman before moving behind the plate"}
    ]
  },
  "Hogan Denny": {
    bats:"R", throws:"R", blurb:"Indiana’s do-everything bat — .357 with 14 HR while starting at five positions, then made the USA Collegiate National Team.", notes:"Breakout 2026 sophomore year on a down Indiana team: .357/.452/.647 with 74 hits, 63 runs, 18 doubles, 14 homers and 44 RBIs, walking plus getting plunked more times (38) than he struck out (32) and going 11-for-14 on the bases. First IU player since at least 2005 to start games at five different positions in one season (RF 30, C 14, 3B 3, LF 3, DH 1) — listed as a catcher but currently more outfielder than backstop, which is the profile question to resolve. First Team All-Big Ten (as an OF), then earned a spot on the final 2026 USA Baseball Collegiate National Team roster — just the seventh Hoosier ever. Missed three games in April with an injury but otherwise started every game he played. Mooresville, IN product; PBR’s prep coverage flagged premium bat speed with a 103 mph max exit velocity.",
    sources:[
      {outlet:"Indiana Athletics", date:"Jun 2026", note:".357 with 74 H, 63 R, 18 2B, 14 HR, 44 RBI, .452 OBP; started at five positions (RF 30, C 14); First Team All-Big Ten"},
      {outlet:"Indiana Daily Student", date:"Jul 2026", note:"Named to final USA Collegiate National Team roster, seventh Hoosier ever"},
      {outlet:"Hoosier State of Mind", date:"Jun 2026", note:"Led team with 1.099 OPS on a 23-31 Indiana club; more free passes than strikeouts"},
      {outlet:"Prep Baseball Report", date:"2024", note:"HS profile: RHH with premium bat speed, 103 mph max exit velo, C/SS athleticism"}
    ]
  },
  "Ethan Surowiec": {
    height:"6-1", weight:"220", blurb:"Ole Miss afterthought turned Florida’s leading hitter — physical corner bat who was the only Gator over .300 in SEC play, now back for 2027.", notes:"One of the better transfer-development stories in the class. Barely played as an Ole Miss freshman in 2025 (16 at-bats), then obliterated the Northwoods League — .387 with 17 homers in 53 games, league MVP — and parlayed it into a starting corner job at Florida. As a 2026 draft-eligible sophomore he hit .317/.409/.528 and led the Gators in hits (78), average, RBIs (63) and total bases (130) with 12 homers, and was even better against SEC pitching (.339/.414/.556, the only Florida regular above .300 in league play). Split time between third (34 starts) and first (28 starts); Baseball America’s earlier profile noted plus raw power and bat speed with an aggressive, swing-and-miss-prone approach, and an above-average arm that gives him a chance to stay at third. Went undrafted-by-choice territory in 2026 — announced he’s returning to Florida for his junior year. Gulfport, MS native who models his game on Austin Riley.",
    sources:[
      {outlet:"Gator Country", date:"Jul 2026", note:"Returning for junior season; .317/.409/.528, team leader in hits/AVG/RBI/TB; only Gator over .300 in SEC play; 34 starts at 3B, 28 at 1B"},
      {outlet:"Baseball America", date:"2026", note:"6-1/220 with standout bat speed and power; aggressive approach with swing-and-miss; arm fits 3B"},
      {outlet:"Florida Athletics", date:"Feb 2026", note:"2025 Northwoods League MVP (.387, 17 HR in 53 games) after just 16 AB as an Ole Miss freshman"},
      {outlet:"Florida Alligator", date:"May 2026", note:"First career grand slam keyed series-opening win at LSU in late-season stretch"}
    ]
  },
  "Ethan Lund": {
    bats:"R", throws:"L", height:"6-6", weight:"216",
    blurb:"6-foot-6 southpaw with some of the loudest bat-missing stuff in the country — 137 strikeouts (2nd in NCAA) against a 5.34 ERA, then made Team USA.",
    notes:"ROSTER CORRECTION: he’s a left-handed pitcher, not a righty. Fascinating profile — elite whiff, unfinished run prevention. As a 2026 sophomore he struck out 137 in 84.1 innings, second in all of Division I and the eighth-best single season in Oklahoma State history, with a 14.62 K/9 that ranked third nationally and a .212 opponent average… alongside a 5.34 ERA and 53 walks, which is the whole development story in one line. Fourteen-strikeout, zero-walk gem against Sam Houston in February won Big 12 Pitcher of the Week (nine consecutive punchouts at one stretch). Barely pitched as a freshman in 2025 (seven appearances, injuries), so 2026 was his first real workload. Finished the summer by making the final 28-man USA Baseball Collegiate National Team roster for the World Collegiate Baseball Championship in Taiwan after a dominant training camp. Fishers, IN product (Hamilton Southeastern HS).",
    sources:[
      {outlet:"Baseball-Reference", date:"2026", note:"Bats R / Throws L, 6-6; Fishers, IN; Hamilton Southeastern HS — confirms LHP roster correction"},
      {outlet:"Oklahoma State Athletics", date:"Jul 2026", note:"137 K (2nd in NCAA, 8th-best season in OSU history), 14.62 K/9 (3rd nationally), 5-3, 5.34 ERA in 84.1 IP; named to USA CNT"},
      {outlet:"The O’Colly", date:"Jul 2026", note:"Made final Team USA roster for World Collegiate Baseball Championship after strong training camp relief work"},
      {outlet:"Oklahoma State Athletics", date:"Mar 2026", note:"Big 12 Pitcher of the Week: 6 shutout IP, career-high 14 K, no walks vs. Sam Houston"}
    ]
  },
  "Max Luzarraga": {
    bats:"R", throws:"R", height:"6-2", weight:"240",
    blurb:"DBU freshman bullpen piece who quietly led the staff — team-best 2.91 ERA and 1.02 WHIP out of relief on a rough Patriots pitching year.",
    notes:"Thin national coverage so far, but the freshman year was real: 14 relief appearances, 21.2 innings, and a 2.91 ERA / 1.02 WHIP that led all DBU relievers — on a staff that posted a 6.36 ERA overall — including a 1.15 ERA and 0.83 WHIP over his final ten outings and a win at then-ranked Liberty in April. The prep scouting book (PBR North Carolina): strike-thrower with a quality 12-6 curveball he spins around 2,400-2,500 rpm, a fading changeup, and a fastball that was 89-92 touching 93 in 2024 — command-and-spin profile more than raw arm strength, so velocity gains are the swing factor. Weddington HS (Matthews, NC) product, PBR’s #8 RHP in the state’s 2025 class. No published 20-80 evaluations from national outlets yet — needs in-person or Trackman looks before grading.",
    sources:[
      {outlet:"Dallas Baptist Athletics", date:"May 2026", note:"Led all DBU relievers with 2.91 ERA and 1.02 WHIP; 1.15 ERA over final 10 appearances (15.2 IP)"},
      {outlet:"Portland Tribune (C-USA roundup)", date:"May 2026", note:"Team-best 2.91 ERA in 21.2 IP across 14 relief appearances as a freshman on a staff with a 6.36 ERA"},
      {outlet:"Prep Baseball Report", date:"2025", note:"HS book: 89-92 touching 93, 12-6 CB at ~2,480 rpm avg, effective CH; pounds the zone; #8 RHP in NC 2025 class"},
      {outlet:"DBU Athletics roster", date:"2026", note:"Listed 6-2/240, R/R; Weddington HS (Matthews, NC)"}
    ]
  },
  "Bradley Zayac": {
    bats:"R", throws:"R", height:"6-3", weight:"215",
    blurb:"ECU transfer who immediately became Liberty’s win machine — 9-1 with a 3.64 ERA, CUSA wins leader and a National Pitcher of the Year semifinalist.",
    notes:"Transferred from East Carolina after his 2025 freshman year (he started ECU’s Conway Regional game against Coastal Carolina before entering the portal) and turned in a rock-steady 2026 for a 43-21 Liberty club that reached the Athens Regional: 9-1 with a 3.64 ERA over 84 innings (16 appearances, 15 starts), 68 strikeouts against just 17 walks, and a Conference USA-leading win total. Named CUSA All-Conference Second Team and one of 43 semifinalists for the National Pitcher of the Year Award. The statistical shape is pitchability over power — sub-2.0 BB/9 control, modest strikeout rate (~7.3 K/9) — a durable strike-throwing weekend starter whose draft ceiling likely depends on how the raw stuff grades in person. Chesapeake, VA native; also a repeat CUSA academic honoree with a 3.5+ GPA.",
    sources:[
      {outlet:"Liberty Athletics", date:"Jun 2026", note:"Final 2026: 9-1, 3.64 ERA, 84 IP, 68 K/17 BB in 16 apps (15 starts); led CUSA in wins; NPOY semifinalist; All-CUSA 2nd team"},
      {outlet:"Liberty Athletics", date:"Apr 2026", note:"One of 43 National Pitcher of the Year semifinalists; steady mid-2s ERA through April"},
      {outlet:"Pirate Radio 92.7 (ECU)", date:"Jun 2025", note:"Entered portal from East Carolina after freshman year; had started ECU’s Conway Regional game vs. Coastal Carolina"},
      {outlet:"Liberty Athletics roster", date:"2026", note:"Listed 6-3/215, R/R; Chesapeake, VA"}
    ]
  },
  "Nate Taylor": {
    bats:"R", throws:"R", height:"6-2", weight:"222",
    blurb:"Georgia-to-Vanderbilt transfer with a strong arm and a rough first year in black and gold — the 2027 bet is on the stuff, not the 2026 line.",
    notes:"Transferred from Georgia to Vanderbilt for 2026 after a sparkling but tiny freshman sample in Athens — 1.08 ERA, 17 strikeouts and a .107 opponent average in 8.1 relief innings across nine appearances. The first Vandy season was bumpy: roughly 1-4 with an ERA near 9 and 35 strikeouts per D1Baseball’s season page, though it opened promisingly with a 4.1-inning, seven-strikeout start against Oklahoma State at Globe Life Field in February. Baseball America’s preseason Vanderbilt preview grouped him with Nye, Fennell, Guth and Green as returning arms with the raw stuff Vanderbilt’s staff traditionally develops, and Tim Corbin describes him as a strong-armed, durable strike thrower. Buford HS (GA) product. Classic buy-low 2027 follow: SEC-caliber arm talent, results pending — worth a live look before putting numbers on him.",
    sources:[
      {outlet:"Vanderbilt Athletics", date:"2026", note:"2025 at Georgia: 1.08 ERA, 17 K, .107 opp avg in 8.1 IP; opened 2026 with 4.1 IP/7 K start vs. Oklahoma State; Corbin calls him a strong-armed durable strike thrower"},
      {outlet:"D1Baseball", date:"2026", note:"2026 season page: 1-4, 8.89 ERA, 35 K; listed 6-2/222, R/R"},
      {outlet:"Baseball America", date:"Jan 2026", note:"Preseason Vandy preview grouped him among returning arms with notable raw stuff under pitching coach Scott Brown"}
    ]
  },
// Research pass — HS batch (final 12) — sourced from PBR, Perfect Game, Baseball America,
// school/local coverage; paraphrased into original wording, never copied. Grades/velo/
// secondaries/rank untouched per standing rule. Includes three roster-status corrections:
// Brick (reclassified + drafted 2026, archived), Rippy (HS transfer), Patrick (now at LSU).
  "Sebastian Castillo": {
    bats:"R", throws:"R", height:"6-0", weight:"185", commit:"LSU",
    blurb:"2025 PBR Future Games MVP — first ever from Texas — and a premium two-way SS whose glove and motor headline the profile. LSU commit.",
    notes:"One of the loudest risers in the class. Won MVP of the 2025 Prep Baseball Future Games (five hits, a homer and a double), the first Texan ever to take the award, with PBR’s scouting VP praising the aggressive, confident defense, glove-to-hand quickness and plus arm — the glove is arguably the carrying tool. Also touches 92 off the mound as a two-way. Committed to LSU in September 2025 as part of a nationally #2-ranked Tigers 2027 class; Perfect Game had him #51 nationally and the #2 SS in Texas at the time, Overslot as high as #13 in the draft class (later #4 among HS prospects), and Bleacher Report’s way-too-early July 2026 mock sent him 11th overall to Boston. Hit .379/.456/.547 as a Byron Nelson freshman (District 4-6A Newcomer of the Year). PBR ranked him #2 nationally in the 2027 class after the 2025 summer. Justin, TX product who plays with visible energy — evaluators keep coming back to the competitiveness.",
    sources:[
      {outlet:"Prep Baseball Report", date:"Aug 2025", note:"Future Games MVP, first from Texas; five hits incl. HR; plus arm and standout glove-to-hand; PBR national #2 in class"},
      {outlet:"Tiger Rag", date:"Sep 2025", note:"Committed to LSU; PG #51 national, #2 SS in Texas; Overslot #13 in 2027 draft class"},
      {outlet:"Crescent City Sports", date:"Sep 2025", note:"R/R, 6-0/185; touches 92 off the mound; drives ball to all fields"},
      {outlet:"Bleacher Report", date:"Jul 2026", note:"Way-too-early 2027 mock: 11th overall to the Red Sox as SS/RHP"}
    ]
  },
  "Graham Houston": {
    bats:"S", throws:"R", height:"5-11", weight:"175", commit:"LSU",
    blurb:"Switch-hitting SS with elite bat-to-ball feel and a potentially elite glove — Marek Houston’s younger brother, and evaluators say further along at the same age. LSU commit.",
    notes:"Younger brother of Marek Houston, the Wake Forest shortstop Minnesota took in the first round in 2025 — and Overslot argues Graham is the more finished product at the same stage. Switch-hitter with a simple, controlled swing and plus bat-to-ball from both sides: more of a slashing, gap-to-gap hack lefty, more loft and bat speed with fence-clearing ability righty. Baseball America highlights the balanced swing (especially advanced as a lefty), aggressive approach with bat control, and clean, rangy shortstop actions. PBR’s June 2026 National Program Invitational primer slotted him #3 nationally, calling the glove potentially elite and noting his production outpaced his first-round brother’s at the same age, with strength gains still to come on the 5-11 frame. Committed to LSU in October 2025. Fall 2025 Trackman/showcase data: 99.9 max EV, 87.3 average, 6.67 in the 60. Plays for Venice (FL), a perennial national-top-5 program. Bleacher Report’s July 2026 mock had him 13th overall.",
    sources:[
      {outlet:"Prep Baseball Report", date:"Jun 2026", note:"National #3 in NPI primer; potentially elite glove; production outpacing brother Marek at same stage; 5-11/175"},
      {outlet:"Baseball America", date:"2025", note:"Switch-hitter, balanced simple swing (advanced as LHH), high contact with gap power; clean rangy SS actions"},
      {outlet:"Overslot Baseball", date:"2025-26", note:"Plus bat-to-ball, super-quick hands, late swing decisions; avg raw power potential from right side"},
      {outlet:"Five Tool / 247Sports", date:"Oct 2025", note:"Committed to LSU; 99.9 max EV, 6.67 sixty at fall showcase"}
    ]
  },
  "Graham Keen": {
    bats:"R", throws:"R", height:"6-5", weight:"205", commit:"Vanderbilt",
    blurb:"PBR’s #1 overall player in the 2027 class — massive 6-5 two-way frame with 106 EV, mid-90s arm strength and huge remaining projection. Vanderbilt commit.",
    notes:"The top-ranked player on Prep Baseball’s national 2027 board (September 2025), listed as a true two-way prospect — and he’s been ranked that high since PBR made him the national #2 as a sophomore in late 2024. The frame is the headline: 6-5 and still filling out (he lists himself at 6-6/220 now), with verified metrics of 106 mph max exit velocity, 81.7 mph bat speed, 93 mph across the infield, 97 from the outfield, and a 6.84 sixty — rare power-arm-athleticism combination for the size. Committed to Vanderbilt in November 2025. On the mound he’s legitimate too: struck out 11 over six two-hit innings against Hempfield as a sophomore in the WPIAL. Long-term position is genuinely unsettled (3B, OF, or pitcher — he’s said himself it’s undecided), which is worth tracking rather than assuming. Pittsburgh (Mt. Lebanon) product; PA’s #1 player.",
    sources:[
      {outlet:"Prep Baseball Report", date:"Sep 2025", note:"#1 overall in national 2027 rankings as a two-way player; 6-5/205 R/R; 106 max EV, 93 INF/97 OF velo, 6.84 sixty"},
      {outlet:"Pittsburgh Union Progress", date:"Dec 2024", note:"Named PBR national #2 as a sophomore; long-term position undecided (pitched and played 1B as a freshman)"},
      {outlet:"TribLive", date:"Apr 2025", note:"11 K over six innings of two-hit ball vs. Hempfield in WPIAL playoff-caliber matchup"},
      {outlet:"X / player announcement", date:"Nov 2025", note:"Committed to Vanderbilt; self-lists 6-6/220 OF/INF/RHP"}
    ]
  },
  "Will Brick": {
    bats:"R", throws:"R", height:"6-2", weight:"195", commit:"Mississippi State", archived:true,
    blurb:"OFF THE 2027 BOARD — reclassified to 2026, won U-18 World Cup gold, and was drafted by Toronto (131st overall) in July 2026.",
    notes:"ROSTER STATUS: no longer a 2027 prospect. Brick — Baseball America’s #1 catcher in the 2027 class and PBR’s national #3 — reclassified to the 2026 class in October 2025, shortly after making USA Baseball’s 18U National Team as one of only two underclassmen and earning all-tournament honors at the gold-medal U-18 World Cup in Japan (.333/.474/.667). He committed to Mississippi State, hit .526 with five homers as a 2026 senior at Christian Brothers (Memphis), won Gatorade Tennessee Player of the Year, attended the MLB Draft Combine, and was selected by the Blue Jays 131st overall in the July 2026 draft. The scouting profile that made him famous: advanced receiver with lateral agility, a strong arm and quick release producing sub-1.9 pop times, praised intangibles, and some of the best raw power in what was the 2027 class (BP exit velos north of 109 mph per independent reports). Archived here for historical reference — remove or keep as a case study of class movement.",
    sources:[
      {outlet:"Baseball America", date:"Oct 2025", note:"Reclassified from 2027 to 2026; was #1 catcher / #15 overall in 2027 class; U-18 World Cup all-tournament (.333/.474/.667); sub-1.9 pop times"},
      {outlet:"Wikipedia (compiled)", date:"Jun 2026", note:"Committed Mississippi State; .526/5 HR senior year; Gatorade TN POY; MLB Draft Combine invite"},
      {outlet:"247Sports", date:"Jul 2026", note:"Drafted by Toronto, 131st overall, in the 2026 MLB Draft as the top prep catcher on MLB.com’s board (#46 prospect)"}
    ]
  },
  "Leo Nockley": {
    bats:"L", throws:"R", height:"5-8", weight:"160", commit:"Tennessee",
    blurb:"Undersized, ultra-advanced lefty-hitting SS — top-25 national prospect whose barrel feel and glove keep outplaying the frame. Tennessee commit.",
    notes:"The classic “bet on the skills” profile. At 5-8/160 he was still one of the rare underclassmen invited to both East Coast Pro and the Area Code Games upperclass teams, and Baseball America calls him one of the most advanced hitters in the class — a tight, balanced, efficient left-handed swing that produces surprising impact (100 mph max EV; his 95.8 mph average exit velocity led PBR’s 2027 summer Trackman sample). Instinctive shortstop with quick feet, soft hands, a fast release and a good internal clock; a tick-above-average runner who projects to stay in the middle infield. Ranked #21 nationally / #8 SS / #2 in Pennsylvania by PBR and #35 / #10 SS by Perfect Game when he committed to Tennessee in October 2025 (part of the Vols’ stacked 2027 class alongside Dylan Seward). Backed it up as a junior in spring 2026: PSBCA Class 2A All-State first team, hitting .408 with 3 homers, 7 doubles and a team-high 37 runs while leading Wyoming Seminary to its first-ever District 2 title.",
    sources:[
      {outlet:"Baseball America", date:"Sep 2025", note:"One of the most advanced hitters in the class; ECP + Area Code upperclass invites as underclassman; instinctive SS who should stick"},
      {outlet:"247Sports", date:"Oct 2025", note:"Committed to Tennessee; PBR #21 national/#2 PA, PG #35/#10 SS; 100 mph EV at showcase"},
      {outlet:"Times Leader", date:"Jul 2026", note:"PSBCA 2A All-State 1st team as junior: .408, 3 HR, 7 2B, 37 R; led Sem to first District 2 title"},
      {outlet:"Prep Baseball Report PA", date:"Oct 2025", note:"95.8 mph average exit velocity led the 2027 class in summer Trackman data"}
    ]
  },
  "Caden Borcherding": {
    bats:"R", throws:"R", height:"6-1", weight:"180", commit:"Clemson",
    blurb:"One of the class’s top catchers — athletic, flexible receiver with a projectable bat off a Georgia state-title program. Clemson commit.",
    notes:"Top-5 catcher in the class by most boards. PBR ranked him #5 nationally in September 2025; Overslot had him #51 overall and top-5 behind the plate; Perfect Game grades him 9.5 and he’s Georgia’s #2 prospect. Committed to Clemson in September 2025 right after an official visit, choosing the Tigers over heavyweight interest. The defense leads: PG describes a loose, fluid receiver who works out of multiple stances with lower-half flexibility, soft hands, smooth transfers and a quick, accurate release (pop times around 1.98–2.10 with arm strength still coming — BA projects at least an average arm as the lean 6-1 frame fills out, and notes he’s one of the youngest players in the class). The bat is projectable more than loud right now: rhythmic right-handed swing, mostly middle-of-the-field contact with growing pull-side lift; 94-95 max EVs in workouts, and a .474 line with two homers at a summer 2025 Hoover tournament. Helped Etowah to a Georgia state title in 2024 (34-4). Three-time PG Select Fest honoree.",
    sources:[
      {outlet:"Prep Baseball Report", date:"Sep 2025", note:"#5 overall in national 2027 rankings"},
      {outlet:"TigerNet / Overslot", date:"Sep 2025", note:"Committed to Clemson; #51 overall, top-5 catcher in class; GA #2 prospect; PG 9.5 grade"},
      {outlet:"Perfect Game", date:"2025", note:"Fluid multi-stance receiver, soft hands, quick accurate release; projectable RH bat, middle-field contact with developing lift; 6-1/180"},
      {outlet:"Baseball America", date:"Dec 2025", note:"Lean, agile, flexible behind the plate; among the youngest in the class; arm projects average-plus as he fills out"}
    ]
  },
  "Anderson Lambert": {
    bats:"R", throws:"R", height:"6-0", weight:"170", commit:"Alabama",
    blurb:"Maryland’s #1 player and a top-10 national name — twitchy two-way OF with fast hands at the plate and an 88 mph fastball in reserve. Alabama commit.",
    notes:"PBR’s #6 overall player nationally in September 2025 and the top-ranked player in Maryland. Committed to Alabama in November 2025. Ultra-athletic 6-0/170 build with the kind of twitch and fluidity PBR’s Mid-Atlantic staff called tough to match at his age. At the plate: balanced base, high hand load, fast hands and easy bat speed, working gap-to-gap with opposite-field pop already showing and power projected to climb as the frame fills. Primary outfielder — easy, athletic routes with a loose arm, quick release and accurate carry (Perfect Game notes he’s athletic enough to develop on the infield but his present actions are clearly better on grass; some outlets list him at 3B/CF). Also a real mound option: T88 fastball with feel for a breaking ball and changeup, though the OF bat is the pro profile. Doubled and singled at 95 mph EV at the 2025 Area Code Games. Laurel, MD / McDonogh School product.",
    sources:[
      {outlet:"Prep Baseball Report", date:"Sep 2025", note:"#6 overall in national 2027 rankings; MD #1; breakout Future Games week"},
      {outlet:"Five Tool", date:"Nov 2025", note:"Committed to Alabama; 95 mph EV single at Area Code Games"},
      {outlet:"Perfect Game", date:"2025", note:"Projectable RH hitter with fast hands and easy bat speed; athletic OF actions, accurate carry; better in OF than IF at present"},
      {outlet:"Prep Baseball Report MD", date:"2025", note:"Two-way: T88 FB with feel for breaker/changeup; ultra-athletic twitchy frame"}
    ]
  },
  "Ely Mason": {
    bats:"L", throws:"R", height:"6-2", weight:"175", commit:"Oklahoma State",
    blurb:"Twitchy lefty-hitting utility athlete (SS/CF/3B) — California’s #2 in the class, with a 7-RBI playoff explosion in 2026. Oklahoma State commit.",
    notes:"Full name Elyjah Mason. One of the most athletic prospects in the country per PBR, who ranks him #2 in California’s 2027 class and #12 nationally (June 2026, up from #7 nationally in the September 2025 board). Committed to Oklahoma State. The athleticism is verified: his 6.66 sixty was the fastest time at the 2025 Future Games tryouts, on a lengthy 6-2 frame with a long lower half and clear strength projection. Left-handed hitter with a relaxed, quiet load, whip in the barrel and a lift-oriented path — the June 2026 playoff performance at 24-4 Temecula Valley (3-for-5, 7 RBI, capped by a towering three-run homer to right) made PBR’s top single-game performances of the CIF season. Genuine multi-position piece who lines up at shortstop, center field and third base; PBR notes athletic dirt actions with fast hands at third. Huntington Beach teammate of UCLA-committed SS Parker Leoff on one of California’s marquee programs.",
    sources:[
      {outlet:"Prep Baseball Report", date:"Jun 2026", note:"CA #2 / national #12; 3-for-5, 7 RBI, 3-run HR playoff game at Temecula Valley among top CIF performances of 2026"},
      {outlet:"Prep Baseball Report", date:"Sep 2025", note:"#7 overall in national 2027 rankings; 6.66 sixty (event-low) at Future Games; twitchy 6-2 frame, LHH with barrel whip"},
      {outlet:"Cal-Hi Sports", date:"Feb 2026", note:"Oklahoma State commit; among Huntington Beach’s headline underclassmen"},
      {outlet:"HBHS roster", date:"2026", note:"Listed L/R, 6-2/6-3, IF/OF utility"}
    ]
  },
  "Hank Rippy": {
    bats:"L", throws:"R", height:"6-2", weight:"185", commit:"Texas",
    blurb:"Wiry lefty-swinging SS with 104+ mph exit velos and one of the biggest stock jumps in the class — now at Austin Anderson after transferring. Texas commit.",
    notes:"ROSTER NOTE: transferred from Hyde Park Baptist to Anderson HS (Austin) ahead of the 2026 season, joining a loaded Central Texas program alongside A&M signee Connor Comeau. Committed to Texas in September 2025. PBR moved him into the national top 10 (#8, September 2025) after a summer where his loose left-handed stroke produced BP exit velocities over 104 mph — verified Trackman: 104.6 max, 96.3 average, 90% hard-hit rate at the June 2025 Future Games tryout, huge numbers for a wiry 6-2/185 frame with obvious strength still to come. PBR’s director’s notes: natural barrel accuracy with a relaxed approach, real present impact, and a defensive profile with soft hands, skilled glovework and a strong arm with carry — a charging backhand glove-to-hand play was the highlight that rounded out the report. Austin-area product; part of what area coverage calls arguably the best left side of the infield in Central Texas.",
    sources:[
      {outlet:"Prep Baseball Report TX", date:"Sep 2025", note:"Jumped into national top 10 (#8); 104+ EVs in BP; soft hands, strong arm with carry; wiry-athletic riser"},
      {outlet:"Prep Baseball Report", date:"Jun 2025", note:"Future Games tryout Trackman: 104.6 max EV, 96.3 avg, 90% hard-hit, 83 INF velo"},
      {outlet:"Texas HS Baseball / Austin American-Statesman", date:"Feb 2026", note:"Transferred to Anderson HS (Austin); Texas commit; anchors elite Central TX infield with A&M signee Comeau"},
      {outlet:"X / player announcement", date:"Sep 2025", note:"Committed to Texas (“Hook ’em”), Sept 21, 2025"}
    ]
  },
  "Selvin Garrett": {
    bats:"R", throws:"R", height:"5-11", weight:"170", commit:"Texas",
    blurb:"“A wizard at shortstop” — compact, athletic top-10 national talent who hit .412 as a 2026 junior. Texas commit.",
    notes:"Broke out at the 2025 Future Games — a massive week at the plate including a homer, plus standout defense — and PBR responded by jumping him from #23 to #10 in Texas and onto the national top 10 (#10 overall, September 2025). Committed to Texas. The 2026 junior season validated it: .412 with a .471 OBP and 36 runs for a Buda Johnson club that reached the Class 6A Division I regional finals, with Austin-area coverage flatly calling him “a wizard at shortstop.” Compact, athletic 5-11/170 build; PBR’s book is real bat speed pointing to a higher offensive ceiling than the frame suggests, with solid present defense and strength gains to come. Still hitting on the summer 2026 circuit — homered at the AABC Don Mattingly World Series in July. Plays for Moe & Gene Johnson HS (Buda, TX); travels with Canes Southwest.",
    sources:[
      {outlet:"Prep Baseball Report TX", date:"Sep 2025", note:"#23 → #10 in TX after Future Games breakout (HR + standout defense); real bat speed, high offensive ceiling; national #10"},
      {outlet:"Austin American-Statesman (via Yahoo)", date:"Feb 2026", note:"“Wizard at shortstop”; .412/.471, 36 R as junior; team reached 6A DI regional finals; Texas commit"},
      {outlet:"Five Tool", date:"Jul 2026", note:"2-run HR at AABC Don Mattingly World Series; consistent barrels through summer 2026"},
      {outlet:"Perfect Game", date:"2026", note:"Listed R/R, 5-11/170, SS/2B; Canes Southwest National 17U"}
    ]
  },
  "Cameron Aguilar": {
    bats:"R", throws:"R", height:"5-10", weight:"170",
    blurb:"Uncommitted New England OF/RHP two-way — leadoff feel, plus base instincts and a 90 mph outfield arm; regional-level coverage so far.",
    notes:"Honest read: coverage is regional (PBR Massachusetts) rather than national, so this is a thinner file than the rest of the batch — but the reports are consistently positive. Right-handed-hitting outfielder from St. Mark’s School (Southborough, MA) who also pitches; played center field for Team Massachusetts at the PBR Future Games, where the squad went 3-0. PBR’s evaluations: leadoff profile with a good feel for the strike zone, above-average base-running instincts, loose clean hands with power potential in the swing (95 mph exit velo), and an outfield arm that has climbed from 81 to 88 and now 90 mph across evaluations — the arm strength trend is the most interesting developmental marker. Featured as an April 2026 PBR Massachusetts Uncommitted Spotlight, and remains uncommitted, which itself says the recruiting market views him as a tier below the committed names on this board. Worth a live look on the summer circuit before grading; ISL/NEPSAC competition context matters.",
    sources:[
      {outlet:"Prep Baseball Report MA", date:"Apr 2026", note:"Uncommitted Spotlight feature; leadoff feel for zone, above-avg base instincts, 95 EV, OF arm now 90 mph"},
      {outlet:"Baseball Journal", date:"Oct 2025", note:"Pitched and played CF for 3-0 Team Massachusetts at PBR Future Games alongside UConn commit Lucas Hodne"},
      {outlet:"Perfect Game", date:"2025", note:"Listed R/R, 5-10/165, OF/RHP; Ashland, MA; Nokona Chiefs travel program"}
    ]
  },
  "William Patrick": {
    bats:"R", throws:"R", height:"6-2", weight:"209",
    blurb:"ROSTER FIX: 2025 grad, now an LSU freshman — double-plus runner with plus raw power who barely played in 2026 behind a loaded Tiger outfield. Buy-low 2027 college follow.",
    notes:"ROSTER CORRECTION: not a 2027 HS player. Patrick graduated St. Frederick (Monroe, LA) in 2025, ranked #95 on Baseball America’s final 2025 BA 500, skipped pro ball and enrolled at LSU — so he’s a draft-eligible college outfielder for 2027, not a prep. The tools are loud: BA describes a 6-2, 200-plus-pound righty bat with explosive hands, an uphill path producing loud contact, plus raw power upside, double-plus run times (4th-best sixty at 2024 PG National), and a plus arm with range that fits center field — balanced against real swing-and-miss/chase questions against top travel-circuit arms, which is the whole evaluation. The 2026 freshman year was a redshirt-shaped situation without the redshirt: LSU returned its entire national-championship outfield, Jay Johnson tried him in the infield mid-season to find at-bats, and he barely played — the coaching staff openly discussed how his athleticism fills a need if he cracks the lineup. Monster HS resume (1.406 OPS as a senior, .429/3 HR/29 RBI/15 SB as a junior) but against Louisiana 1A competition, which BA graded 50/Extreme — high ceiling, high variance. 2027 is the prove-it year: if the playing time comes, the tools could move him fast.",
    sources:[
      {outlet:"Baseball America", date:"Aug 2025", note:"#95 on final 2025 BA 500; BA grade 50/Extreme; double-plus runner, plus arm/range for CF, plus power upside, hit-tool risk"},
      {outlet:"NOLA.com", date:"Apr 2026", note:"LSU freshman buried behind returning championship OF; moved to infield in March to find at-bats; 1.406 OPS as HS senior at 1A level"},
      {outlet:"Ouachita Citizen", date:"Feb 2025", note:"Signed with LSU; .429, 3 HR, 29 RBI, 15 SB as a junior; multi-sport athlete"},
      {outlet:"TigerBait roster", date:"2026", note:"Listed 6-2/209, OF, freshman at LSU"}
    ]
  }
};

// Full published snapshot of the board (written by the Publish button).
// When non-empty, it overlays the RAW/RESEARCH_PATCH seed for every visitor.
const PUBLISHED = [];
