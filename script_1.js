import os from 'os';
export const getTotalMemoryInMB = () => {

  return Math.trunc(os.totalmem()/1024/1024) ;
};

const main = () => {
  const totalMemoryInMB = (getTotalMemoryInMB());
  console.log(`Total memory: ${totalMemoryInMB} MB`);
};

main();
