const fs = require("fs");

const lec = ["node", "react", "js", "mongo", "firebase"];

lec.map((lecture, index) => {
    
        let currFolder = `Lecture-${index + 1}-${lecture}`;

        fs.mkdirSync(currFolder);

        let filepath=`${currFolder}/readme.md`;
        fs.writeFileSync(filepath,"#practice")
        console.log(currFolder);
    
});
