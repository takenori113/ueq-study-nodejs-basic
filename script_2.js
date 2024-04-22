import fs from 'fs';
export const main = async () => {
  const csvPath = './seiseki.csv';
  fs.readFile(csvPath,'UTF-8',(error,date)=>{console.log(date);});
  
  
};

main();
