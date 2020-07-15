import {CsvFileReader} from './CsvFileReader';
import {MatchResults} from './MatchResults';
import {convertDateStringToDate} from './utils'
import  fs  from 'fs';


type MatchData = [Date , string, string, number, number, MatchResults , string];

 export class MatchReader extends CsvFileReader<MatchData>{

    mapRow(row :string[]): MatchData{
        return [
            convertDateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResults,
            row[6]

        ]
    }

  winsAnalysis(team: string):string {

    let manUnitedWins = 0;

for (let match of this.data ) {
    if(match[1] === team && match[5] === MatchResults.HomeWins){
        manUnitedWins++;
    }
    else if (match[2] === team && match[5] ===MatchResults.AwayWins){
        manUnitedWins++;
    }

}
        return `${team} won ${manUnitedWins } games`;



  }

  
  printHTML_Report(report:string): void{
        const html =`
                    <div>
                        <h1>Analysis Output</h1>
                        <div>${report}<div>
                    </div>`;

            fs.writeFileSync('report.html', html);
  }
  


}