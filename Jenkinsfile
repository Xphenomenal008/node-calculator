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
                bat 'tar -czf node-calculator.tar.gz dist'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: '*.tar.gz', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Node pipeline completed successfully'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
