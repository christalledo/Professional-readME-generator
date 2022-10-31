// Function to generate readme
function generateMarkdown(response) {
    return `# ${response.title}
   
    ##  Title 

    ${response.title}
   
   
    ## Description
    ${response.description} 
    
    ## Language Used

    ${response.language}
    
    ##Table of Contents
    

    Title

        

    Description

    Language Used
    
    Table of Contents

    Installation


    Usage

    License

    Contributing

    Tests
     
    Questions


    
    ## Installation

    You can install and see it at these following links


    Github username: ${response.gitHub}

    Github link : ${response.gitHubLink}

    Live link : ${response.liveUrl}
   
    ## Usage
    
    This is a video showing how to use the readme generator.

    <img src = "${response.video}" alt = "video on how to use the site">

    ##  License

    <img src = "https://img.shields.io/static/v1?label=${response.license}& message=<MESSAGE>&color=${response.color}">

    ## Contributing
    This/these is/are my contributor.
        ${response.contributor}

    ##  Tests

    The application have completed numerous tests to work.

    ##  Questions
    
    If you have any more questions, you can reach me at ${response.socialMedia} with my acc named ${response.account}
    
    `

}


// Exporting generateMarkdown to index

module.exports = generateMarkdown;

