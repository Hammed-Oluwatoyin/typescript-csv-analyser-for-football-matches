import { MatchReader } from './MatchReader';


 
const firstMatchReader = new MatchReader('football.csv');
firstMatchReader.read();


const output = firstMatchReader.winsAnalysis('Newcastle')
firstMatchReader.printHTML_Report(output);




