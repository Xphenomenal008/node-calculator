pipeline {
    agent any

    tools {
        nodejs 'node18'   // Configure this in Jenkins → Global Tool Config
    }

    environment {
        APP_NAME = "node-calculator"
    }

    stages {

        stage('1. Validate') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('2. Clean') {
            steps {
                sh 'rm -rf node_modules dist || true'
            }
        }

        stage('3. Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('4. Lint (Optional Quality Gate)') {
            steps {
                echo 'Skipping lint for now'
            }
        }

        stage('5. Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('6. Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('7. Verify Build') {
            steps {
                sh 'test -d dist'
                sh 'ls -l dist'
            }
        }

        stage('8. Package Artifact') {
            steps {
                sh 'tar -czf ${APP_NAME}.tar.gz dist'
            }
        }

        stage('9. Archive Artifact') {
            steps {
                archiveArtifacts artifacts: '*.tar.gz', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded: code is tested, built, and packaged'
        }
        failure {
            echo '❌ Pipeline failed: investigate stage logs'
        }
        always {
            cleanWs()
        }
    }
}
