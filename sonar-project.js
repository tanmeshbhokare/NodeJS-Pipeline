const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://40e8-103-102-31-35.in.ngrok.io/',
       options : {
            'sonar.projectDescription': 'This is a Node JS application',
            'sonar.projectName': 'Node JS Application',
            'sonar.projectKey':'NodeApp',
            'sonar.login': 'e7e6dccf8fa767616bff7fd5787096c756dd2a7c',
            //'sonar.login': 'admin',
            //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
            'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
          //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
