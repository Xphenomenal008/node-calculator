pipeline {
    agent any

    stages {

        stage('Validate') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Package') {
            steps {
                bat 'powershell Compress-Archive dist node-calculator.zip'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'node-calculator.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ CI pipeline completed successfully'
        }
        failure {
            echo '❌ CI pipeline failed'
        }
    }
}
