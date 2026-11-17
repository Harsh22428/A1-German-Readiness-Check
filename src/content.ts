export type Area = 'vocabulary' | 'grammar' | 'reading';
export type Provider = 'goethe' | 'osd' | 'unsure';
export type Question = { id:string; area:Area; topic:string; prompt:string; passage?:string; options:{id:string;text:string}[]; correctOptionId:string; explanation:string; authorDifficultyEstimate:'accessible'|'standard'|'stretch'; reviewStatus:'author-checked' };
export const areas:Area[] = ['vocabulary','grammar','reading'];
export const labels:Record<Area,string> = {vocabulary:'Vocabulary',grammar:'Grammar',reading:'Reading'};
export const assessmentVersion='a1-2026-11-v1';
export const scoringVersion='foundations-v1';
function item(id:string,area:Area,topic:string,prompt:string,options:string[],key:number,explanation:string,difficulty:Question['authorDifficultyEstimate']='standard',passage?:string):Question {
  return {id,area,topic,prompt,options:options.map((text,i)=>({id:`${id}-${i}`,text})),correctOptionId:`${id}-${key}`,explanation,authorDifficultyEstimate:difficulty,reviewStatus:'author-checked',passage};
}
export const questions:Question[] = [
 item('V1','vocabulary','Everyday verbs','Ich habe Durst. Was möchte ich?',['schlafen','trinken','lesen','arbeiten'],1,'Durst means thirst. Trinken means to drink, which is what you want to do when you are thirsty.','accessible'),
 item('V2','vocabulary','Days and appointments','Heute ist Montag. Mein Termin ist morgen. Wann ist mein Termin?',['am Sonntag','am Mittwoch','am Montag','am Dienstag'],3,'Morgen means tomorrow. The day after Monday (Montag) is Tuesday (Dienstag).','accessible'),
 item('V3','vocabulary','Places and travel','Wo kann ich auf den Zug warten?',['am Bahnhof','im Supermarkt','in der Apotheke','im Restaurant'],0,'Der Zug is a train. You wait for a train at the station (am Bahnhof).','accessible'),
 item('V4','vocabulary','Household objects','Ich möchte schlafen. Was brauche ich?',['einen Teller','einen Schlüssel','ein Bett','eine Fahrkarte'],2,'Schlafen means to sleep. Ein Bett is a bed.','standard'),
 item('V5','vocabulary','Work and routine','Mein Arbeitstag beginnt um 9 Uhr. Was bedeutet „beginnt“?',['ist zu Ende','fängt an','dauert lange','fällt aus'],1,'Beginnen and anfangen both mean to start. Fängt an is the form used with a singular subject.','stretch'),
 item('G1','grammar','Present-tense verbs','Ich ___ aus Indien.',['kommen','komme','kommt','kommst'],1,'With ich, the present-tense form of kommen is komme: Ich komme aus Indien.','accessible'),
 item('G2','grammar','Verb position','Welcher Satz ist richtig?',['Morgen ich gehe zur Arbeit.','Ich morgen zur Arbeit gehe.','Morgen gehe ich zur Arbeit.','Gehe morgen zur Arbeit ich.'],2,'In a statement, the conjugated verb takes the second position. When Morgen comes first, gehe comes next, followed by ich.','stretch'),
 item('G3','grammar','Negation','Ist das ein Auto? Nein, das ist ___ Auto. Das ist ein Bus.',['kein','nicht','keine','keinen'],0,'Use kein to negate ein Auto. Auto is neuter and the subject complement here is nominative: Das ist kein Auto.','standard'),
 item('G4','grammar','Articles in a sentence','Ich kaufe ___ Apfel.',['ein','eine','einem','einen'],3,'Der Apfel is masculine. As the direct object of kaufen it takes accusative: einen Apfel.','stretch'),
 item('G5','grammar','Question words','___ wohnst du? In Berlin.',['Wer','Wie alt','Wo','Wann'],2,'Wo asks where. In Berlin answers a question about the place where someone lives.','accessible'),
 item('R1','reading','Opening hours','Wann ist die Bibliothek geöffnet?',['am Montag um 10 Uhr','am Dienstag um 10 Uhr','am Freitag um 19 Uhr','am Sonntag um 12 Uhr'],1,'The notice says the library is open Tuesday to Friday, from 9:00 to 18:00. Tuesday at 10:00 fits.','accessible','Die Bibliothek ist am Montag geschlossen. Von Dienstag bis Freitag ist sie von 9 bis 18 Uhr geöffnet. Am Wochenende ist sie geschlossen.'),
 item('R2','reading','Changed appointments','Wann ist der neue Termin?',['am Dienstag um 14 Uhr','am Mittwoch um 14 Uhr','am Dienstag um 10 Uhr','am Mittwoch um 10 Uhr'],3,'The Tuesday appointment is cancelled. The new appointment is Wednesday at 10:00.','standard','Guten Tag, Ihr Termin am Dienstag um 14 Uhr fällt aus. Bitte kommen Sie stattdessen am Mittwoch um 10 Uhr. Vielen Dank! Ihre Praxis Weber'),
 item('R3','reading','Conditions in an advert','Wie viel kostet der Tisch?',['0 Euro','20 Euro','30 Euro','50 Euro'],0,'Zu verschenken means free to give away. You must collect it yourself, but the table costs nothing.','stretch','Kleiner Küchentisch zu verschenken! Der Tisch ist zwei Jahre alt und in gutem Zustand. Nur Selbstabholung am Samstag. Bei Interesse bitte anrufen.'),
 item('R4','reading','Requests in a message','Was soll Anna mitbringen?',['einen Kuchen','Blumen','einen Salat','Getränke'],2,'Lea asks Anna to bring a salad. Lea already has drinks.','standard','Liebe Anna, am Freitag feiere ich ab 18 Uhr meinen Geburtstag bei mir zu Hause. Kannst du bitte einen Salat mitbringen? Getränke habe ich schon. Bis Freitag! Lea'),
 item('R5','reading','Public instructions','Was soll man hier tun?',['mit dem Fahrrad weiterfahren','das Fahrrad schieben','das Fahrrad verkaufen','das Fahrrad hier parken'],1,'Bitte absteigen und das Fahrrad schieben means get off and push your bicycle. Cycling in the courtyard is not allowed.','standard','Bitte absteigen und das Fahrrad schieben. Im Innenhof dürfen Sie nicht mit dem Fahrrad fahren. Vielen Dank für Ihre Rücksicht!'),
];
export const resources = {
 goethe:{title:'Official Goethe A1 practice',url:'https://www.goethe.de/en/spr/prf/ueb/pa1.html',description:'Full-format practice for all four exam skills.'},
 osd:{title:'Official ÖSD A1 practice',url:'https://osd.at/en/portfolio-item/oesd-zertifikat-a1-za1/',description:'Model sets, audio and digital training for your exam.'},
 globio:{title:'Globio’s Goethe-format mock tests',url:'https://globio.ai/german-mock-test/',description:'External resource. Registration or separate access may be required.'},
};
