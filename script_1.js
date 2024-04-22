import os from 'os';
export const getTotalMemoryInMB = () => {

  return os.totalmem()/1024/1024;
};

const main = () => {
  const totalMemoryInMB = Math.floor(getTotalMemoryInMB());
  console.log(`Total memory: ${totalMemoryInMB} MB`);
};

main();
