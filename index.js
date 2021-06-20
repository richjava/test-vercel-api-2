const axios = require('axios')

upload();

async function upload(){
    try {
        //note to self: no more than 3 projects can use the same repo
        let projectData = {
            "name": "builtjs-site-tw",
            "gitRepository": {
              "type": "github",
              "repo": "richjava/builtjs-site-tw-LGcXkZEsVP",
            },
            "framework": "nextjs",
            "buildCommand": "next build",
            "installCommand": "yarn install",
            "outputDirectory": "public"
          };
          await axios.post(
            "https://api.vercel.com/v8/projects/",
            projectData,
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + '<vercel_access_token>',
              },
            }
          )
    } catch (error) {
        console.log(error)
    }
    ;
}